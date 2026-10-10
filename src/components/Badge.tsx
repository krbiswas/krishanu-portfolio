import { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "success" | "warning" | "accent";
}) {
  const tones: Record<string, string> = {
    neutral: "bg-[var(--surface-elevated)] text-[var(--ink-muted)] border-[var(--border)]",
    success: "bg-[var(--success-soft)] text-[var(--success)] border-transparent",
    warning: "bg-[var(--warning-soft)] text-[var(--warning)] border-transparent",
    accent: "bg-[var(--accent-soft)] text-[var(--accent)] border-transparent",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium font-mono tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
