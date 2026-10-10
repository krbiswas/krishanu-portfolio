"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/content/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink)]"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="glass glass-strong fixed inset-x-3 top-[76px] rounded-[var(--radius-lg)] px-3 py-3"
        >
          <nav className="relative z-[2] flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius-sm)] px-3 py-2.5 text-base text-[var(--ink)] hover:bg-[var(--surface-elevated)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume/"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-[var(--radius-md)] bg-[var(--accent)] px-3 py-2.5 text-center text-base font-medium text-[var(--accent-ink)]"
            >
              Resume
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
