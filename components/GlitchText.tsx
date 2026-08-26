"use client";

import { ElementType, ReactNode } from "react";

type GlitchTextProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export default function GlitchText({
  children,
  as: Tag = "span",
  className = "",
}: GlitchTextProps) {
  const text = typeof children === "string" ? children : undefined;

  return (
    <Tag
      className={`group relative inline-block ${className}`}
      data-text={text}
    >
      <span className="relative z-10">{children}</span>
      {text && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-0 hidden text-volt-500 opacity-80 mix-blend-screen group-hover:block motion-safe:group-hover:animate-glitch"
            style={{ transform: "translate(2px, 0)" }}
          >
            {children}
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-0 hidden text-cyber-500 opacity-80 mix-blend-screen group-hover:block motion-safe:group-hover:animate-glitch"
            style={{ transform: "translate(-2px, 0)", animationDelay: "0.15s" }}
          >
            {children}
          </span>
        </>
      )}
    </Tag>
  );
}
