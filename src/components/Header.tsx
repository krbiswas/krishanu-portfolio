import Link from "next/link";
import { navLinks } from "@/content/nav";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-[var(--ink)]"
        >
          Krishanu Biswas
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[var(--radius-sm)] px-3 py-2 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/resume/"
            className="rounded-[var(--radius-md)] bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-ink)] hover:opacity-90 transition-opacity"
          >
            Resume
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
