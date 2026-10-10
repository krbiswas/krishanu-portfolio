import Link from "next/link";
import { profile } from "@/content/profile";
import { navLinks } from "@/content/nav";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold text-[var(--ink)]">{profile.name}</p>
          <p className="mt-1 max-w-sm text-sm text-[var(--ink-muted)]">{profile.shortTitle}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
            >
              LinkedIn
            </a>
          ) : null}
        </nav>
      </Container>
      <Container className="mt-8 border-t border-[var(--border)] pt-6">
        <p className="font-mono text-xs text-[var(--ink-faint)]">
          © {year} {profile.name}. Built with Next.js, deployed as a static site.
        </p>
      </Container>
    </footer>
  );
}
