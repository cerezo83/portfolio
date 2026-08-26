"use client";

import { useEffect, useRef } from "react";

const CHARACTERS =
  "01アイウエオカキクケコサシスセソ$#@%&*<>[]{}/\\;:";

export default function MatrixRain({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const fontSize = 15;
    let columns = Math.floor(width / fontSize);
    let drops = new Array(columns).fill(1);

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    let frame = 0;
    let animationId: number;

    const draw = () => {
      frame++;
      if (frame % 2 === 0) {
        ctx.fillStyle = "rgba(5, 8, 10, 0.08)";
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < drops.length; i++) {
          const char =
            CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          const isHead = Math.random() > 0.94;
          ctx.fillStyle = isHead
            ? "rgba(190, 255, 230, 0.9)"
            : "rgba(0, 255, 157, 0.35)";
          ctx.font = `${fontSize}px var(--font-mono, monospace)`;
          ctx.fillText(char, x, y);

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none h-full w-full ${className}`}
    />
  );
}
