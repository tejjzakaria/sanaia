"use client";
import { useEffect, useRef, useState } from "react";
import AnimateIn from "./AnimateIn";
import { useLanguage } from "../context/LanguageContext";

const VIDEOS = [
  "https://sanaia.s3.us-east-1.amazonaws.com/IMG_0928.MOV",
  "https://sanaia.s3.us-east-1.amazonaws.com/IMG_4213.MOV",
  "https://sanaia.s3.us-east-1.amazonaws.com/IMG_4214.MOV",
  "https://sanaia.s3.us-east-1.amazonaws.com/IMG_6802.MP4",
];

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];

function VideoCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  // Set src only when the card is near the viewport so off-screen videos
  // don't consume bandwidth. 300px margin starts the load just before it's visible.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const video = videoRef.current;
          if (video && !video.src) {
            video.src = src;
            video.load();
          }
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [src]);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    }
  }

  function handleVideoClick() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <AnimateIn animation="animate-scale-in" delay={DELAYS[index]}>
      <div
        ref={containerRef}
        className="group relative rounded-3xl overflow-hidden bg-ink aspect-[9/16] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
        />

        {/* Play overlay — visible when paused */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
            }}
            className="relative z-10 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200"
            aria-label="Lire la vidéo"
          >
            <svg
              className="w-6 h-6 text-forest translate-x-0.5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
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
            <VideoCard key={src} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
