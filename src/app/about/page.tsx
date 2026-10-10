import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { profile } from "@/content/profile";
import { education, earlyWork } from "@/content/education";
import { skillGroups, interests } from "@/content/skills";

export const metadata: Metadata = {
  title: "About",
  description: "How Krishanu Biswas got into enterprise SaaS, implementation, and operations.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 pb-12">
        <Eyebrow>About</Eyebrow>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--ink)] max-w-2xl">
          What I do today, and how I got here
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--ink-muted)] leading-relaxed">
          {profile.summary}
        </p>
      </Section>

      <Section className="border-t border-[var(--border)] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-[var(--ink-muted)] leading-relaxed">
            <h2 className="text-xl font-semibold text-[var(--ink)]">How I got here</h2>
            <p>
              My academic background is in science — a research-oriented degree that trained me to
              work methodically with data, document process carefully, and present findings
              clearly. None of that was software engineering, but it built habits that transfer
              well into structured operational work.
            </p>
            <p>
              Alongside that, I spent time doing freelance web work — building and maintaining
              WordPress sites, including an independent site of my own, picking up SEO and content
              operations along the way. It was self-directed and informal, but it&apos;s where I
              first got comfortable with the idea of shipping something and being responsible for
              how it worked.
            </p>
            <p>
              My first full-time role was in Trust &amp; Safety operations, supporting a large
              platform at global scale. That work was less about technology and more about
              judgment under pressure — applying policy consistently, handling escalations, and
              staying accurate across a high volume of decisions. It&apos;s not the kind of
              experience that shows up as a flashy project, but it&apos;s where I built real
              discipline around quality and process.
            </p>
            <p>
              From there I moved into enterprise SaaS, working in Professional Services on
              content and LMS migrations. That&apos;s where the two halves of my background come
              together: the operational rigor from Trust &amp; Safety, and the technical curiosity
              from building websites, now applied to mapping content, validating migrations, and
              occasionally writing a script when a manual process is worth automating.
            </p>
            <h2 className="text-xl font-semibold text-[var(--ink)] pt-4">What interests me</h2>
            <p>
              I&apos;m drawn to problems that sit between a customer&apos;s actual need and a
              platform&apos;s real capability — figuring out what&apos;s genuinely possible,
              documenting it clearly, and making the delivery process repeatable rather than
              reinvented every time. I&apos;m also just curious about AI-assisted tooling: not as
              a buzzword, but as a practical way to remove the boring, repetitive parts of
              migration and QA work.
            </p>
            <h2 className="text-xl font-semibold text-[var(--ink)] pt-4">Outside of work</h2>
            <p>{interests.join(", ")}.</p>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-faint)] font-mono">
                Education
              </h3>
              <ul className="mt-4 space-y-4">
                {education.map((item) => (
                  <li key={item.school}>
                    <p className="text-sm font-medium text-[var(--ink)]">{item.school}</p>
                    <p className="text-xs text-[var(--ink-faint)] font-mono">{item.period}</p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">{item.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[var(--ink-muted)]">
                <span className="font-medium text-[var(--ink)]">{earlyWork.heading}:</span>{" "}
                {earlyWork.detail}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-faint)] font-mono">
                Skills
              </h3>
              <div className="mt-4 space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.group}>
                    <p className="text-sm font-medium text-[var(--ink)]">{group.group}</p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">{group.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
