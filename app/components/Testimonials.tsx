"use client";
import { useRef, useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";
import { useLanguage } from "../context/LanguageContext";

const VIDEOS = [
  "https://sanaia.s3.us-east-1.amazonaws.com/IMG_0928.mp4",
  "https://sanaia.s3.us-east-1.amazonaws.com/IMG_7029.MP4",
  "https://sanaia.s3.us-east-1.amazonaws.com/IMG_4214.mp4",
  "https://sanaia.s3.us-east-1.amazonaws.com/IMG_6802.mp4",
];

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];

function VideoCard({
  src,
  index,
  activeRef,
  onPlay,
}: {
  src: string;
  index: number;
  activeRef: React.MutableRefObject<HTMLVideoElement | null>;
  onPlay: (v: HTMLVideoElement) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load only metadata (first frame thumbnail) when card scrolls into view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = "metadata";
          video.load();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Sync playing state when this video is paused externally (by another card)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPause = () => setPlaying(false);
    video.addEventListener("pause", onPause);
    return () => video.removeEventListener("pause", onPause);
  }, []);

  async function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      // Pause whatever is currently playing
      if (activeRef.current && activeRef.current !== video) {
        activeRef.current.pause();
      }
      setLoading(true);
      if (video.preload !== "auto") {
        video.preload = "auto";
        video.load();
      }
      try {
        await video.play();
        onPlay(video);
        setPlaying(true);
      } catch {
        setPlaying(false);
      } finally {
        setLoading(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <AnimateIn animation="animate-scale-in" delay={DELAYS[index]}>
      <div
        className="group relative rounded-3xl overflow-hidden bg-ink aspect-[9/16] shadow-xl cursor-pointer active:scale-[0.98] transition-transform duration-150"
        onClick={toggle}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          preload="none"
          onEnded={() => { setPlaying(false); setLoading(false); }}
        >
          <source src={src} type="video/mp4" />
        </video>

        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing && !loading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />

          <button
            onClick={(e) => { e.stopPropagation(); toggle(); }}
            className="relative z-10 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110"
            aria-label="Lire la vidéo"
          >
            {loading ? (
              <svg className="w-6 h-6 text-forest animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" />
                <path className="opacity-75" d="M4 12a8 8 0 018-8" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-forest translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <div className="absolute bottom-0 inset-x-0 p-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-forest-light animate-pulse" />
              <span className="text-white/80 text-xs font-semibold tracking-wide uppercase">
                Avis client
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const activeRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimateIn animation="animate-fade-up" className="text-center mb-16 space-y-4">
          <p className="text-forest-mid text-xs font-bold tracking-widest uppercase">
            {t.testimonials.tag}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
            {t.testimonials.heading}
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            {t.testimonials.subheading}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {VIDEOS.map((src, i) => (
            <VideoCard
              key={src}
              src={src}
              index={i}
              activeRef={activeRef}
              onPlay={(v) => { activeRef.current = v; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
