import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { profile, credibilityPillars } from "@/content/profile";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";

const featuredSlugs = [
  "enterprise-automotive-lms-migration",
  "migration-discovery-qa-automation",
  "ai-roleplay-export-validation-pipeline",
];

export default function Home() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <Section className="pt-16 sm:pt-24 pb-16 sm:pb-20">
        <Eyebrow>Enterprise SaaS · Implementation & Professional Services</Eyebrow>
        <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-[var(--ink)]">
          {profile.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[var(--ink-muted)] leading-relaxed">
          {profile.heroSupport}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/work/">Explore my work</Button>
          <Button href="/resume/" variant="secondary">
            View resume
          </Button>
        </div>
      </Section>

      {/* Credibility strip */}
      <Section className="py-12 sm:py-16 border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {credibilityPillars.map((pillar) => (
            <div key={pillar.label}>
              <p className="text-sm font-medium text-[var(--ink)]">{pillar.label}</p>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section>
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
              Problems I&apos;ve worked on
            </h2>
          </div>
          <Link
            href="/work/"
            className="hidden sm:inline text-sm font-medium text-[var(--accent)] hover:underline"
          >
            View all work →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((project) =>
            project ? (
              <Link
                key={project.slug}
                href={`/work/${project.slug}/`}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge tone="accent">{project.category}</Badge>
                  <Badge>{project.status}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-muted)] leading-relaxed flex-1">
                  {project.summary}
                </p>
                <p className="mt-4 text-sm font-medium text-[var(--accent)]">
                  Read case study →
                </p>
              </Link>
            ) : null
          )}
        </div>

        <Link
          href="/work/"
          className="sm:hidden mt-6 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
        >
          View all work →
        </Link>
      </Section>

      {/* Career snapshot */}
      <Section dark>
        <Eyebrow>Career snapshot</Eyebrow>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-xl">
          From global operations at scale to enterprise SaaS implementation
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {experience.map((entry) => (
            <div key={entry.org} className="border-t border-[var(--dark-border)] pt-5">
              <p className="font-mono text-xs text-[var(--dark-ink-muted)] uppercase tracking-wide">
                {entry.period}
              </p>
              <p className="mt-2 text-base font-medium">{entry.role}</p>
              <p className="text-sm text-[var(--dark-ink-muted)]">{entry.org}</p>
              <p className="mt-3 text-sm text-[var(--dark-ink-muted)] leading-relaxed">
                {entry.summary}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/experience/"
          className="mt-10 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
        >
          See full experience →
        </Link>
      </Section>

      {/* Closing CTA */}
      <Section className="text-center py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
          Let&apos;s talk about enterprise SaaS, implementation, or operations.
        </h2>
        <p className="mt-3 text-[var(--ink-muted)] max-w-xl mx-auto">
          Open to roles in SaaS implementation, professional services, customer operations, and
          process-driven delivery.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact/">Get in touch</Button>
          <Button href="/resume/" variant="secondary">
            View resume
          </Button>
        </div>
      </Section>
    </>
  );
}
