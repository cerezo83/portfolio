"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import TypewriterTerminal, { TerminalLine } from "../TypewriterTerminal";
import { aiWorkflowPillars, aiWorkflowSteps } from "@/lib/data";

const DEMO_LINES: TerminalLine[] = [
  { prompt: "$ ", text: "claude-code \"triage last night's IDS alerts\"", tone: "default" },
  { text: "→ 214 alerts correlated into 6 distinct incidents", tone: "cyber" },
  { text: "→ 1 flagged critical: repeated auth failures, edge firewall", tone: "volt" },
  { prompt: "$ ", text: "claude-code \"review terraform diff for the SOC VPC\"", tone: "default" },
  { text: "→ found 1 overly-permissive security group rule", tone: "cyber" },
  { text: "→ suggested least-privilege fix + opened draft PR", tone: "volt" },
  { prompt: "$ ", text: "claude-code \"draft incident runbook from this trace\"", tone: "default" },
  { text: "→ runbook.md generated · ready for review", tone: "cyber" },
];

export default function AiWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="relative overflow-hidden border-t border-border bg-surface py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-volt-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-[420px] w-[420px] rounded-full bg-cyber-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="./ai-workflow --run"
            title="Human judgment. AI-accelerated execution."
            subtitle="Claude and Claude Code are part of the daily toolkit — not a gimmick bolted onto the workflow, but the layer that turns hours of manual triage into minutes of reviewed output."
          />
          <Reveal direction="left" className="hidden shrink-0 sm:block">
            <div className="flex items-center gap-2 rounded-full border border-volt-500/40 bg-volt-900/30 px-4 py-2 font-mono text-xs text-volt-400">
              <Bot className="h-4 w-4" />
              centerpiece
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <Reveal direction="left">
            <ol className="relative space-y-8 border-l border-border pl-8">
              {aiWorkflowSteps.map((item, idx) => (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-cyber-500/50 bg-void font-mono text-xs text-cyber-400">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <TypewriterTerminal lines={DEMO_LINES} title="claude-code — security-workflow" />
            <p className="mt-3 flex items-center gap-2 text-xs text-muted">
              <Sparkles className="h-3.5 w-3.5 text-cyber-500" />
              Illustrative walkthrough of a real daily pattern — triage, review,
              document.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aiWorkflowPillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 0.08}>
              <div className="h-full rounded-xl border border-border bg-void/60 p-6 transition-colors hover:border-volt-500/50 hover:glow-volt">
                <h4 className="font-display text-base font-semibold text-ink">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
