"use client";

import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-border bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="cat ./skills.yaml"
          title="Skills & expertise"
          subtitle="Built across firewalls, financial-grade SOC operations, cloud platforms, and now, AI-assisted engineering."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.title} delay={(idx % 2) * 0.1}>
              <div className="h-full rounded-xl border border-border bg-void/60 p-6 transition-colors hover:border-cyber-600/50">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {group.title}
                  </h3>
                  <span className="font-mono text-sm text-cyber-400">
                    {group.level}%
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {group.blurb}
                </p>

                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.level}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyber-500 to-volt-500"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border-bright bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
