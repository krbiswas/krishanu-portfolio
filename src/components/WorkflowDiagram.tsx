const stages = [
  { label: "Source content", detail: "Inconsistent, unstructured, scattered across systems" },
  { label: "Structured mapping", detail: "Normalized, validated, exceptions tracked" },
  { label: "Delivered", detail: "Migrated, QA'd, ready for the customer" },
];

export function WorkflowDiagram() {
  return (
    <div
      className="relative w-full max-w-md mx-auto lg:mx-0"
      role="img"
      aria-label="Diagram: messy source content becomes structured, validated, delivered output through three stages."
    >
      <svg
        viewBox="0 0 400 60"
        className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 w-[80%] h-auto hidden sm:block"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="30"
          x2="400"
          y2="30"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-4">
        {stages.map((stage, i) => (
          <div
            key={stage.label}
            className="glass rounded-[var(--radius-md)] p-4 flex-1 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1"
          >
            <div className="relative z-[2]">
              <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
              <p className="mt-1.5 text-sm font-semibold text-[var(--ink)] leading-snug">
                {stage.label}
              </p>
              <p className="mt-1 text-xs text-[var(--ink-muted)] leading-relaxed">{stage.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
