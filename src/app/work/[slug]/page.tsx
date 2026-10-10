import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Eyebrow } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { GlassSurface } from "@/components/GlassSurface";
import { MotionReveal } from "@/components/MotionReveal";
import { getProjectBySlug, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = project.relatedSlugs
    .map((s) => getProjectBySlug(s))
    .filter(Boolean);

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Section className="pt-6 sm:pt-8 pb-10">
        <MotionReveal>
          <Link
            href="/work/"
            className="text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            ← All work
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="accent">{project.category}</Badge>
            <Badge>{project.status}</Badge>
            <Badge>{project.ownership}</Badge>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--ink)] max-w-2xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--ink-muted)] leading-relaxed">
            {project.summary}
          </p>
        </MotionReveal>
      </Section>

      <Section className="border-t border-[var(--border)] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <MotionReveal className="space-y-10">
            <div>
              <Eyebrow>Problem</Eyebrow>
              <p className="text-[var(--ink-muted)] leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <Eyebrow>My role</Eyebrow>
              <p className="text-[var(--ink-muted)] leading-relaxed">{project.role}</p>
            </div>
            <div>
              <Eyebrow>Approach</Eyebrow>
              <ul className="space-y-3">
                {project.approach.map((step) => (
                  <li key={step} className="flex gap-3 text-[var(--ink-muted)] leading-relaxed">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--ink-faint)]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>Outcome</Eyebrow>
              <p className="text-[var(--ink-muted)] leading-relaxed">{project.outcome}</p>
            </div>
            <GlassSurface className="p-5">
              <Eyebrow>Limitations &amp; what&apos;s not claimed here</Eyebrow>
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                {project.limitations}
              </p>
            </GlassSurface>
          </MotionReveal>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <GlassSurface className="p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-faint)] font-mono">
                Tools & systems
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li key={tool}>
                    <Badge>{tool}</Badge>
                  </li>
                ))}
              </ul>
            </GlassSurface>

            {related.length > 0 && (
              <GlassSurface className="p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--ink-faint)] font-mono">
                  Related work
                </h3>
                <ul className="mt-3 space-y-3">
                  {related.map((item) =>
                    item ? (
                      <li key={item.slug}>
                        <Link
                          href={`/work/${item.slug}/`}
                          className="text-sm font-medium text-[var(--accent)] hover:underline"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ) : null
                  )}
                </ul>
              </GlassSurface>
            )}
          </aside>
        </div>
      </Section>

      {projects.length > 1 && (
        <Section className="border-t border-[var(--border)] py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/work/${prev.slug}/`}
              className="glass rounded-[var(--radius-lg)] p-5 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-0.5"
            >
              <div className="relative z-[2]">
                <p className="font-mono text-xs text-[var(--ink-faint)] uppercase tracking-wide">
                  ← Previous
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--ink)]">{prev.title}</p>
              </div>
            </Link>
            <Link
              href={`/work/${next.slug}/`}
              className="glass rounded-[var(--radius-lg)] p-5 text-right transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-0.5"
            >
              <div className="relative z-[2]">
                <p className="font-mono text-xs text-[var(--ink-faint)] uppercase tracking-wide">
                  Next →
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--ink)]">{next.title}</p>
              </div>
            </Link>
          </div>
        </Section>
      )}
    </>
  );
}
