export type ExperienceEntry = {
  org: string;
  role: string;
  period: string;
  verified: boolean;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    org: "Mindtickle",
    role: "Managed Services Associate, Professional Services",
    period: "Oct 2024 — Present",
    verified: false,
    summary:
      "Support enterprise customer accounts through LMS and content migrations into Mindtickle, working across content mapping, QA, and customer troubleshooting.",
    highlights: [
      "Supported customer onboarding and post-go-live troubleshooting for enterprise accounts",
      "Contributed to LMS and SCORM content migrations, including module mapping and asset handling",
      "Performed migration QA: validation passes, exception tracking, and issue resolution",
      "Worked within Content Center workflows for structured content delivery",
      "Wrote SOPs and playbook documentation to standardize recurring migration and support tasks",
      "Explored and applied automation-assisted approaches to reduce repetitive manual migration work",
      "Coordinated with customer stakeholders and internal teams to keep delivery on track",
    ],
  },
  {
    org: "Accenture",
    role: "Trust & Safety Associate (Meta account)",
    period: "Nov 2021 — Oct 2024",
    verified: false,
    summary:
      "Worked in global Trust & Safety operations supporting Meta, reviewing content against policy at scale and collaborating across global teams on quality and process.",
    highlights: [
      "Applied platform policy to content review decisions under quality and turnaround standards",
      "Worked on quality improvement and escalation handling within a structured operations environment",
      "Collaborated with vendor and cross-functional teams across a global operating model",
      "Contributed to process-consistency efforts across a high-volume operations workflow",
      "Built foundations in risk-aware decision-making that carried into later SaaS operations work",
    ],
  },
];
