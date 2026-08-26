"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import MatrixRain from "../MatrixRain";
import GlitchText from "../GlitchText";
import TerminalWindow from "../TerminalWindow";
import { GithubIcon, LinkedinIcon } from "../icons";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-void pt-24"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 opacity-70">
        <MatrixRain />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/70 to-void" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyber-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyber-600/40 bg-cyber-900/30 px-3 py-1 font-mono text-xs uppercase tracking-widest text-cyber-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyber-500" />
            status: online · {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            <GlitchText as="span" className="block text-gradient-cyber">
              {profile.name}
            </GlitchText>
            <span className="mt-2 block text-2xl text-muted sm:text-3xl md:text-4xl">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="glow-cyber rounded-lg bg-cyber-500 px-6 py-3 font-mono text-sm font-semibold text-void transition-transform hover:-translate-y-0.5 hover:bg-cyber-400"
            >
              ./view-projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border-bright px-6 py-3 font-mono text-sm font-semibold text-ink transition-colors hover:border-volt-500 hover:text-volt-400"
            >
              ./connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-5 text-muted"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="transition-colors hover:text-volt-400"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="transition-colors hover:text-volt-400"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-volt-400"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden justify-self-end sm:block motion-safe:animate-float"
        >
          <TerminalWindow title="whoami.sh" className="w-full max-w-sm">
            <p>
              <span className="text-volt-500">$</span> whoami
            </p>
            <p className="mt-1 text-cyber-400">{profile.name.toLowerCase().replace(/\s+/g, "_")}</p>
            <p className="mt-4">
              <span className="text-volt-500">$</span> cat role.txt
            </p>
            <p className="mt-1 text-ink">{profile.title}</p>
            <p className="mt-4">
              <span className="text-volt-500">$</span> uptime --years
            </p>
            <p className="mt-1 text-ink">
              {profile.yearsExperience}+ years in security
            </p>
            <p className="mt-4">
              <span className="text-volt-500">$</span> ./ai-workflow --status
            </p>
            <p className="mt-1 text-cyber-400">enabled · claude-code</p>
            <p className="mt-4 text-ink">
              <span className="text-volt-500">$</span>{" "}
              <span className="animate-blink text-ink">▌</span>
            </p>
          </TerminalWindow>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-cyber-400"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-5 w-5 motion-safe:animate-float" />
      </motion.a>
    </section>
  );
}
