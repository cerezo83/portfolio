import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-void py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center sm:px-8">
        <p className="font-mono text-xs text-muted">
          <span className="text-cyber-500">© {year}</span> {profile.name} — built
          with Next.js, Tailwind CSS &amp; an AI-assisted workflow.
        </p>
        <p className="font-mono text-[11px] text-muted-2">
          exit(0) // no bugs were left unpatched
        </p>
      </div>
    </footer>
  );
}
