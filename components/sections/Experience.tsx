"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap, BadgeCheck } from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { certifications, education, experience } from "@/lib/data";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative border-t border-border bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="git log --graph ./career"
          title="Experience timeline"
          subtitle="A career spent moving from vendor support desks into owning the security posture of critical financial infrastructure."
        />

        <ol className="relative space-y-4 border-l border-border pl-8">
          {experience.map((entry, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={`${entry.company}-${entry.role}`} delay={idx * 0.05}>
                <li className="relative">
                  <span
                    className={`absolute -left-[41px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      idx === 0
                        ? "border-cyber-500 bg-cyber-500/30"
                        : "border-border-bright bg-void"
                    }`}
                  >
                    {idx === 0 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyber-400 motion-safe:animate-pulse-glow" />
                    )}
                  </span>

                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full rounded-xl border border-border bg-surface p-5 text-left transition-colors hover:border-cyber-600/50"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ink">
                          {entry.role}
                        </h3>
                        <p className="mt-0.5 font-mono text-sm text-cyber-400">
                          {entry.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="font-mono text-xs text-muted">
                            {entry.start} — {entry.end}
                          </p>
                          <p className="text-xs text-muted-2">
                            {entry.duration} · {entry.location}
                          </p>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-muted transition-transform ${
                            isOpen ? "rotate-180 text-cyber-400" : ""
                          }`}
                        />
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-sm leading-relaxed text-muted">
                            {entry.description}
                          </p>
                          <ul className="mt-3 space-y-1.5">
                            {entry.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex gap-2 text-sm leading-relaxed text-muted"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyber-500" />
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {entry.tools.map((tool) => (
                              <span
                                key={tool}
                                className="rounded border border-border-bright bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-ink"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </li>
              </Reveal>
            );
          })}

          <Reveal delay={experience.length * 0.05}>
            <li className="relative">
              <span className="absolute -left-[41px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-border-bright bg-void">
                <GraduationCap className="h-2.5 w-2.5 text-volt-400" />
              </span>
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-display text-base font-semibold text-ink">
                  {education.degree}
                </h3>
                <p className="mt-0.5 font-mono text-sm text-volt-400">
                  {education.school}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {education.start} — {education.end}
                </p>
              </div>
            </li>
          </Reveal>
        </ol>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-5">
            <BadgeCheck className="h-5 w-5 shrink-0 text-cyber-500" />
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">Certifications:</span>{" "}
              {certifications.map((c) => c.name).join(", ")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
