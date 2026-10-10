import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-medium transition-all duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--accent)] text-[var(--accent-ink)] hover:opacity-90 shadow-[0_8px_20px_-8px_rgb(var(--accent-rgb)/0.5)]",
  secondary: "glass hover:border-[var(--border-strong)]",
  ghost: "text-[var(--ink-muted)] hover:text-[var(--ink)]",
};

function Content({ children }: { children: ReactNode }) {
  return <span className="relative z-[2] inline-flex items-center gap-2">{children}</span>;
}

export function Button({
  href,
  children,
  variant = "primary",
  external,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = `${base} ${variants[variant]}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        <Content>{children}</Content>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      <Content>{children}</Content>
    </Link>
  );
}
