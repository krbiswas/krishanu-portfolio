import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in enterprise SaaS migration, content operations, and automation.",
};

export default function WorkPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 pb-10">
        <Eyebrow>Work</Eyebrow>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--ink)] max-w-2xl">
          Migration, implementation, and automation work
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--ink-muted)]">
          A few client names here are withheld or anonymized pending disclosure approval — the
          work and my contribution described are real.
        </p>
      </Section>

      <Section className="border-t border-[var(--border)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}/`}
              className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)]"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge tone="accent">{project.category}</Badge>
                <Badge>{project.status}</Badge>
                <Badge>{project.ownership}</Badge>
              </div>
              <h2 className="text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-muted)] leading-relaxed">
                {project.summary}
              </p>
              <p className="mt-4 text-sm font-medium text-[var(--accent)]">Read case study →</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
