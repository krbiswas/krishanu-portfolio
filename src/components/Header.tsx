"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content/nav";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href.replace(/\/$/, ""));
  }

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-40 px-3 sm:px-5">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="glass glass-nav rounded-[var(--radius-pill)] relative flex h-14 items-center justify-between pl-5 pr-2.5 sm:pr-3">
          <div className="relative z-[2] flex w-full items-center justify-between">
            <Link
              href="/"
              className="font-mono text-sm font-semibold tracking-tight text-[var(--ink)] shrink-0"
            >
              Krishanu Biswas
            </Link>

            <nav className="hidden sm:flex items-center gap-1 mx-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-[var(--radius-pill)] px-3.5 py-1.5 text-sm transition-colors duration-[var(--duration-fast)] ${
                      active
                        ? "text-[var(--ink)] bg-[var(--surface-elevated)]"
                        : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <ThemeToggle />
              <Link
                href="/resume/"
                className="rounded-[var(--radius-pill)] bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-ink)] hover:opacity-90 transition-opacity duration-[var(--duration-fast)]"
              >
                Resume
              </Link>
            </div>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
