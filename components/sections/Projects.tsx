"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { GithubIcon } from "../icons";
import { projects, Project } from "@/lib/data";

const CATEGORIES = [
  "All",
  "AI & Automation",
  "Cloud & Infrastructure",
  "Security & Monitoring",
] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative border-t border-border bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="ls ./projects"
          title="Selected work"
          subtitle="Real builds spanning AI-assisted engineering, cloud infrastructure, and the security & monitoring stacks that keep it all honest."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors sm:text-sm ${
                filter === cat
                  ? "border-cyber-500 bg-cyber-900/40 text-cyber-400"
                  : "border-border text-muted hover:border-border-bright hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <Reveal key={project.id} delay={(idx % 3) * 0.08}>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-surface text-left transition-all hover:-translate-y-1 hover:border-cyber-600/50 hover:glow-cyber"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-surface-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-border-bright bg-void/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-volt-400 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-border-bright bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded border border-border-bright bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-void/80 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border-bright bg-surface"
            >
              <div className="relative aspect-video w-full border-b border-border">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="640px"
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close project details"
                  className="absolute right-3 top-3 rounded-full border border-border-bright bg-void/80 p-2 text-ink hover:text-cyber-400"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <span className="font-mono text-xs uppercase tracking-wide text-volt-400">
                  {active.category}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                  {active.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {active.fullDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border-bright bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {active.github !== "#" && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-lg bg-cyber-500 px-4 py-2.5 font-mono text-sm font-semibold text-void hover:bg-cyber-400"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Source
                    </a>
                  )}
                  {active.demo !== "#" && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-lg border border-border-bright px-4 py-2.5 font-mono text-sm font-semibold text-ink hover:border-volt-500 hover:text-volt-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
