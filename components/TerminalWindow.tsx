import { ReactNode } from "react";

type TerminalWindowProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function TerminalWindow({
  title = "zsh",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-surface/80 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 truncate font-mono text-xs text-muted">
          {title}
        </span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed sm:p-6">
        {children}
      </div>
    </div>
  );
}
