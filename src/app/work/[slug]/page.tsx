import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Eyebrow } from "@/components/Section";
import { Badge } from "@/components/Badge";
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

  return (
    <>
      <Section className="pt-16 sm:pt-20 pb-10">
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
      </Section>

      <Section className="border-t border-[var(--border)] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-10">
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
            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
              <Eyebrow>Limitations &amp; what&apos;s not claimed here</Eyebrow>
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                {project.limitations}
              </p>
            </div>
          </div>

          <aside className="space-y-8">
            <div>
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
            </div>

            {related.length > 0 && (
              <div>
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
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
