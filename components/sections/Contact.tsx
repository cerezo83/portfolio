import { Mail, Send } from "lucide-react";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import TerminalWindow from "../TerminalWindow";
import { GithubIcon, LinkedinIcon } from "../icons";
import { profile } from "@/lib/data";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    cta: "Send an email",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "carloscerezobernal",
    href: profile.linkedin,
    cta: "View profile",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "cerezo83",
    href: profile.github,
    cta: "View code",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-border bg-surface py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="./connect --now"
          title="Let's talk security, cloud, or AI-assisted engineering"
          subtitle="Open to conversations about network security, infrastructure hardening, and AI-augmented engineering workflows."
        />

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
          {CHANNELS.map((channel, idx) => (
            <Reveal key={channel.label} delay={idx * 0.08}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="group flex h-full flex-col items-center rounded-xl border border-border bg-void/60 p-6 text-center transition-all hover:-translate-y-1 hover:border-cyber-600/50 hover:glow-cyber"
              >
                <channel.icon className="h-6 w-6 text-cyber-500" />
                <p className="mt-3 font-display text-sm font-semibold text-ink">
                  {channel.label}
                </p>
                <p className="mt-1 truncate text-xs text-muted">{channel.value}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-volt-400 opacity-80 transition-opacity group-hover:opacity-100">
                  {channel.cta}
                  <Send className="h-3 w-3" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl">
          <TerminalWindow title="contact.sh">
            <p>
              <span className="text-volt-500">$</span> ping carlos.cerezo
            </p>
            <p className="mt-1 text-cyber-400">64 bytes from carlos: open to new opportunities</p>
            <p className="mt-4">
              <span className="text-volt-500">$</span>{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-ink underline decoration-cyber-500/60 underline-offset-4 hover:text-cyber-400"
              >
                mail --compose {profile.email}
              </a>
            </p>
          </TerminalWindow>
        </Reveal>
      </div>
    </section>
  );
}
