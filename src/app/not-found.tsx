import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Section className="pt-10 pb-24 text-center">
      <p className="font-mono text-sm text-[var(--ink-faint)]">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--ink)]">
        Page not found
      </h1>
      <p className="mt-3 text-[var(--ink-muted)]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Section>
  );
}
