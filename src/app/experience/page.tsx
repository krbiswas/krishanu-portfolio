import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { experience } from "@/content/experience";
import { education, earlyWork } from "@/content/education";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline — Mindtickle, Accenture, and earlier self-directed work.",
};

export default function ExperiencePage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 pb-10">
        <Eyebrow>Experience</Eyebrow>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--ink)] max-w-2xl">
          A career built on structured, high-volume operations work
        </h1>
      </Section>

      <Section className="border-t border-[var(--border)] py-16">
        <div className="space-y-16">
          {experience.map((entry) => (
            <div key={entry.org} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6">
              <div>
                <p className="font-mono text-sm text-[var(--ink-faint)]">{entry.period}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[var(--ink)]">{entry.role}</h2>
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
          ))}

          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6">
            <div>
              <p className="font-mono text-sm text-[var(--ink-faint)]">Earlier</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--ink)]">Education & early work</h2>
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
          </div>
        </div>
      </Section>
    </>
  );
}
