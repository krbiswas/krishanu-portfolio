import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { GlassSurface } from "@/components/GlassSurface";
import { MotionReveal } from "@/components/MotionReveal";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
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
      <Section className="pt-6 sm:pt-10 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          <MotionReveal>
            <Eyebrow>Enterprise SaaS · Implementation & Professional Services</Eyebrow>
            <h1 className="max-w-xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-[var(--ink)]">
              {profile.tagline}
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[var(--ink-muted)] leading-relaxed">
              {profile.heroSupport}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/work/">Explore my work</Button>
              <Button href="/resume/" variant="secondary">
                View resume
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal delayMs={120}>
            <WorkflowDiagram />
          </MotionReveal>
        </div>
      </Section>

      {/* Credibility strip */}
      <Section className="py-10 sm:py-12">
        <MotionReveal>
          <GlassSurface className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {credibilityPillars.map((pillar) => (
                <div key={pillar.label}>
                  <p className="text-sm font-medium text-[var(--ink)]">{pillar.label}</p>
                  <p className="mt-1 text-sm text-[var(--ink-muted)]">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </GlassSurface>
        </MotionReveal>
      </Section>

      {/* Selected work */}
      <Section>
        <MotionReveal className="flex items-end justify-between gap-4 mb-10">
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
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((project, i) =>
            project ? (
              <MotionReveal key={project.slug} delayMs={i * 80}>
                <Link
                  href={`/work/${project.slug}/`}
                  className="group flex flex-col h-full glass rounded-[var(--radius-lg)] p-6 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1"
                >
                  <div className="relative z-[2] flex flex-col h-full">
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
                  </div>
                </Link>
              </MotionReveal>
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
        <MotionReveal>
          <Eyebrow>Career snapshot</Eyebrow>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-xl">
            From global operations at scale to enterprise SaaS implementation
          </h2>
        </MotionReveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {experience.map((entry, i) => (
            <MotionReveal key={entry.org} delayMs={i * 100}>
              <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.03] p-6 h-full">
                <p className="font-mono text-xs text-[var(--dark-ink-muted)] uppercase tracking-wide">
                  {entry.period}
                </p>
                <p className="mt-2 text-base font-medium">{entry.role}</p>
                <p className="text-sm text-[var(--dark-ink-muted)]">{entry.org}</p>
                <p className="mt-3 text-sm text-[var(--dark-ink-muted)] leading-relaxed">
                  {entry.summary}
                </p>
              </div>
            </MotionReveal>
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
      <Section className="py-20 sm:py-28">
        <MotionReveal>
          <GlassSurface className="p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
              Let&apos;s talk about enterprise SaaS, implementation, or operations.
            </h2>
            <p className="mt-3 text-[var(--ink-muted)] max-w-xl mx-auto">
              Open to roles in SaaS implementation, professional services, customer operations,
              and process-driven delivery.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact/">Get in touch</Button>
              <Button href="/resume/" variant="secondary">
                View resume
              </Button>
            </div>
          </GlassSurface>
        </MotionReveal>
      </Section>
    </>
  );
}
