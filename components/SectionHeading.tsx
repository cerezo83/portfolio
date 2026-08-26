"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full border border-cyber-600/40 bg-cyber-900/30 px-3 py-1 font-mono text-xs uppercase tracking-widest text-cyber-400 ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyber-500" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
