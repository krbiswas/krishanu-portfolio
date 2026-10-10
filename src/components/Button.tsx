import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-ink)] hover:opacity-90",
  secondary:
    "border border-[var(--border-strong)] text-[var(--ink)] hover:bg-[var(--surface-elevated)]",
  ghost: "text-[var(--ink-muted)] hover:text-[var(--ink)]",
};

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
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
