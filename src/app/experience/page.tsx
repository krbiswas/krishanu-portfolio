import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { MotionReveal } from "@/components/MotionReveal";
import { experience } from "@/content/experience";
import { education, earlyWork } from "@/content/education";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline — Mindtickle, Accenture, and earlier self-directed work.",
};

export default function ExperiencePage() {
  return (
    <>
      <Section className="pt-6 sm:pt-8 pb-10">
        <Eyebrow>Experience</Eyebrow>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--ink)] max-w-2xl">
          A career built on structured, high-volume operations work
        </h1>
      </Section>

      <Section className="border-t border-[var(--border)] py-16">
        <div className="relative space-y-12 sm:pl-10">
          <div
            className="hidden sm:block absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]"
            aria-hidden="true"
          />

          {experience.map((entry, i) => (
            <MotionReveal key={entry.org} delayMs={i * 100} className="relative">
              <span
                className="hidden sm:block absolute -left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]"
                aria-hidden="true"
              />
              <div className="glass rounded-[var(--radius-lg)] p-6 sm:p-7">
                <div className="relative z-[2]">
                  <p className="font-mono text-xs text-[var(--ink-faint)] uppercase tracking-wide">
                    {entry.period}
                  </p>
                  <h2 className="mt-1.5 text-xl font-semibold text-[var(--ink)]">{entry.role}</h2>
                  <p className="text-[var(--ink-muted)]">{entry.org}</p>
                  <p className="mt-3 text-[var(--ink-muted)] leading-relaxed max-w-2xl">
                    {entry.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {entry.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-[var(--ink-muted)]">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--ink-faint)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionReveal>
          ))}

          <MotionReveal delayMs={experience.length * 100} className="relative">
            <span
              className="hidden sm:block absolute -left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--ink-faint)] ring-4 ring-[var(--bg)]"
              aria-hidden="true"
            />
            <div>
              <p className="font-mono text-xs text-[var(--ink-faint)] uppercase tracking-wide">
                Earlier
              </p>
              <h2 className="mt-1.5 text-xl font-semibold text-[var(--ink)]">
                Education & early work
              </h2>
              <ul className="mt-3 space-y-3">
                {education.map((item) => (
                  <li key={item.school} className="text-sm text-[var(--ink-muted)]">
                    <span className="font-medium text-[var(--ink)]">{item.school}</span>
                    {" — "}
                    {item.detail}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                <span className="font-medium text-[var(--ink)]">{earlyWork.heading}:</span>{" "}
                {earlyWork.detail}
              </p>
            </div>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
