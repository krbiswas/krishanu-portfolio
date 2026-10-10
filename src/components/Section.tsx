import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 ${dark ? "bg-[var(--dark-bg)] text-[var(--dark-ink)]" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-wide text-[var(--ink-faint)] uppercase mb-3">
      {children}
    </p>
  );
}
