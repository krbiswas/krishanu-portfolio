import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { education, earlyWork } from "@/content/education";
import { skillGroups } from "@/content/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Krishanu Biswas — Enterprise SaaS implementation and operations.",
};

export default function ResumePage() {
  return (
    <>
      <Section className="pt-6 sm:pt-8 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <Eyebrow>Resume</Eyebrow>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--ink)]">
              {profile.name}
            </h1>
            <p className="mt-2 text-[var(--ink-muted)]">{profile.shortTitle}</p>
          </div>
          <Button href="/resume.pdf" external>
            Download PDF
          </Button>
        </div>
      </Section>

      <Section className="border-t border-[var(--border)] py-16 print:py-4">
        <div className="max-w-2xl space-y-12">
          <div>
            <p className="text-[var(--ink-muted)] leading-relaxed">{profile.summary}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-faint)] font-mono mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((entry) => (
                <div key={entry.org}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-medium text-[var(--ink)]">
                      {entry.role} · {entry.org}
                    </h3>
                    <p className="font-mono text-xs text-[var(--ink-faint)]">{entry.period}</p>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {entry.highlights.map((item) => (
                      <li key={item} className="text-sm text-[var(--ink-muted)] leading-relaxed">
                        — {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-faint)] font-mono mb-6">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((item) => (
                <div key={item.school} className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="text-sm font-medium text-[var(--ink)]">{item.school}</p>
                  <p className="font-mono text-xs text-[var(--ink-faint)]">{item.period}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-[var(--ink-muted)]">
              <span className="font-medium text-[var(--ink)]">{earlyWork.heading}:</span>{" "}
              {earlyWork.detail}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-faint)] font-mono mb-6">
              Skills
            </h2>
            <div className="space-y-3">
              {skillGroups.map((group) => (
                <div key={group.group} className="text-sm">
                  <span className="font-medium text-[var(--ink)]">{group.group}:</span>{" "}
                  <span className="text-[var(--ink-muted)]">{group.items.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
