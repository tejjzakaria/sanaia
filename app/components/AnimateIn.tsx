"use client";
import { useEffect, useRef, ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  animation?: string;
  delay?: string;
  className?: string;
  threshold?: number;
}

export default function AnimateIn({
  children,
  animation = "animate-fade-up",
  delay = "",
  className = "",
  threshold = 0.12,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("invisible-until-animate");
          el.classList.add(animation);
          if (delay) el.classList.add(delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={`invisible-until-animate ${className}`}>
      {children}
    </div>
  );
}
