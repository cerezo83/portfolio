"use client";

import { useEffect, useState } from "react";
import TerminalWindow from "./TerminalWindow";

export type TerminalLine = {
  prompt?: string;
  text: string;
  tone?: "default" | "cyber" | "volt" | "muted";
};

const TONE_CLASS: Record<NonNullable<TerminalLine["tone"]>, string> = {
  default: "text-ink",
  cyber: "text-cyber-400",
  volt: "text-volt-400",
  muted: "text-muted",
};

export default function TypewriterTerminal({
  lines,
  title = "claude-code",
  className = "",
}: {
  lines: TerminalLine[];
  title?: string;
  className?: string;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    const fullText = `${currentLine.prompt ?? ""}${currentLine.text}`;

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, 14 + Math.random() * 22);
      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 550);
    return () => clearTimeout(pause);
  }, [charIndex, lineIndex, lines, reducedMotion]);

  const isDone = lineIndex >= lines.length;

  return (
    <TerminalWindow title={title} className={className}>
      <div className="min-h-[220px]">
        {lines.map((line, idx) => {
          if (idx > lineIndex && !reducedMotion) return null;
          const fullText = `${line.prompt ?? ""}${line.text}`;
          const isCurrent = idx === lineIndex && !reducedMotion;
          const shown =
            isCurrent && !isDone ? fullText.slice(0, charIndex) : fullText;

          return (
            <p key={idx} className={`${TONE_CLASS[line.tone ?? "default"]} mb-1.5`}>
              {line.prompt && <span className="text-volt-500">{line.prompt}</span>}
              {shown.slice(line.prompt?.length ?? 0)}
              {isCurrent && !isDone && (
                <span className="animate-blink text-ink">▌</span>
              )}
            </p>
          );
        })}
        {(isDone || reducedMotion) && (
          <p className="text-ink">
            <span className="text-volt-500">$</span>{" "}
            <span className="animate-blink">▌</span>
          </p>
        )}
      </div>
    </TerminalWindow>
  );
}
