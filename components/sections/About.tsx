import Image from "next/image";
import { ShieldCheck, Building2, Radar, Sparkles } from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import TerminalWindow from "../TerminalWindow";
import { profile, toolsUsed } from "@/lib/data";
import { asset } from "@/lib/basePath";

const stats = [
  {
    icon: ShieldCheck,
    label: "Years in Security IT",
    value: `${profile.yearsExperience}+`,
  },
  {
    icon: Building2,
    label: "Financial-grade infrastructure",
    value: "BME Markets",
  },
  {
    icon: Radar,
    label: "Vendor stacks operated",
    value: "15+",
  },
  {
    icon: Sparkles,
    label: "AI-augmented workflow",
    value: "Daily driver",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-border bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="cat ./about.md"
          title="A decade in the SOC, now building with AI"
          subtitle="From tier-1 support tickets to owning network security for one of Spain's most critical financial infrastructures."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal direction="left">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-cyber-500/60 glow-cyber">
                <Image
                  src={asset("/images/carlos-cerezo.jpg")}
                  alt="Portrait of Carlos Cerezo"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink">
                  {profile.name}
                </p>
                <p className="font-mono text-sm text-cyber-400">
                  {profile.title} · {profile.location}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              {profile.summary.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-cyber-600/50"
                >
                  <Icon className="h-5 w-5 text-cyber-500" />
                  <p className="mt-3 font-display text-2xl font-bold text-ink">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{label}</p>
                </div>
              ))}
            </div>

            <TerminalWindow title="ls ./arsenal" className="mt-6">
              <div className="flex flex-wrap gap-2">
                {toolsUsed.flatMap((group) =>
                  group.tools.map((tool) => (
                    <span
                      key={`${group.category}-${tool}`}
                      className="rounded-md border border-border-bright bg-surface-2 px-2.5 py-1 text-xs text-ink"
                    >
                      {tool}
                    </span>
                  ))
                )}
              </div>
            </TerminalWindow>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
