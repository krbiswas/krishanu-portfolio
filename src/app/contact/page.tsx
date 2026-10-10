import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { GlassSurface } from "@/components/GlassSurface";
import { MotionReveal } from "@/components/MotionReveal";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Krishanu Biswas.",
};

export default function ContactPage() {
  return (
    <Section className="pt-6 sm:pt-8 pb-24">
      <MotionReveal>
        <GlassSurface className="p-10 sm:p-16 text-center max-w-2xl mx-auto">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--ink)]">
            Open to roles in enterprise SaaS, implementation, and operations
          </h1>
          <p className="mt-4 text-[var(--ink-muted)]">LinkedIn is the fastest way to reach me.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {profile.linkedin ? (
              <Button href={profile.linkedin} external>
                Connect on LinkedIn
              </Button>
            ) : null}
            {profile.email ? (
              <Button href={`mailto:${profile.email}`} variant="secondary">
                Email me
              </Button>
            ) : null}
          </div>
        </GlassSurface>
      </MotionReveal>
    </Section>
  );
}
