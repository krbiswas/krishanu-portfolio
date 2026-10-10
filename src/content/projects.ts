export type Ownership =
  | "Led"
  | "Built"
  | "Co-developed"
  | "Contributed to"
  | "Supported"
  | "Prototyped";

export type ProjectStatus = "Completed" | "Ongoing" | "Prototype" | "Concept";

export type Project = {
  slug: string;
  title: string;
  category: string;
  ownership: Ownership;
  status: ProjectStatus;
  summary: string;
  problem: string;
  role: string;
  approach: string[];
  tools: string[];
  outcome: string;
  limitations: string;
  relatedSlugs: string[];
};

export const categories = [
  "Enterprise Implementation",
  "Migration & Content Operations",
  "Automation & Quality Engineering",
] as const;

export const projects: Project[] = [
  {
    slug: "enterprise-automotive-lms-migration",
    title: "Enterprise Automotive LMS Migration",
    category: "Enterprise Implementation",
    ownership: "Contributed to",
    status: "Ongoing",
    summary:
      "Content and module migration for a large automotive enterprise's learning program, moving legacy training content into Mindtickle with full SCORM validation and QA.",
    problem:
      "A large automotive enterprise customer needed its existing training catalog — modules, assets, and assessments — migrated into Mindtickle without breaking content structure, sequencing, or SCORM compatibility. The client's identity is withheld here pending disclosure approval; the work itself is real and ongoing.",
    role: "Part of the Managed Services delivery team responsible for content mapping, asset handling, and migration QA — not the sole owner of the engagement.",
    approach: [
      "Analyzed source course structure and mapped modules, topics, and sequencing to the target Mindtickle structure",
      "Handled asset inventory and migration, including identifying missing or broken references",
      "Validated SCORM packages for compatibility before and after migration",
      "Ran structured QA passes and logged exceptions for follow-up and resolution",
      "Coordinated with internal teams on open questions and dependency tracking",
    ],
    tools: ["Mindtickle Content Center", "SCORM", "Excel / Google Sheets", "Migration mapping templates"],
    outcome:
      "Migration work is in progress as part of an ongoing Managed Services engagement. Structured mapping and QA passes have reduced ambiguity in what's been migrated versus what remains open, but this is not yet a fully closed-out engagement.",
    limitations:
      "No measured efficiency or error-reduction numbers are published here because none have been independently verified. Client name and specific module counts are withheld pending disclosure approval.",
    relatedSlugs: ["knowledge-anywhere-migration", "migration-mapping-templates"],
  },
  {
    slug: "knowledge-anywhere-migration",
    title: "Knowledge Anywhere Migration",
    category: "Migration & Content Operations",
    ownership: "Contributed to",
    status: "Ongoing",
    summary:
      "Migrating course content, SCORM packages, and assets from the Knowledge Anywhere LMS into Mindtickle's Content Center, with structured mapping and validation at each step.",
    problem:
      "Content sitting in a different LMS (Knowledge Anywhere) needed to be inventoried, mapped, and rebuilt inside Mindtickle's Content Center structure, while preserving sequencing and keeping SCORM packages working after the move.",
    role: "Contributed to content mapping, asset preparation, and migration QA for this account.",
    approach: [
      "Mapped source modules to Mindtickle's course/topic structure",
      "Identified and prepared assets for migration, flagging gaps early",
      "Investigated SCORM package compatibility and surfaced issues for resolution",
      "Tracked exceptions and unresolved items through a shared mapping sheet rather than ad hoc notes",
    ],
    tools: ["Mindtickle Content Center", "SCORM", "Excel / Google Sheets"],
    outcome:
      "Supported a cleaner handoff between source content inventory and target build by keeping mapping and exceptions in one structured place instead of scattered communication.",
    limitations:
      "Full project outcome and final scope are still being finalized; this case study describes the workflow and contribution rather than a closed, measured result.",
    relatedSlugs: ["enterprise-automotive-lms-migration", "migration-mapping-templates"],
  },
  {
    slug: "seismic-link-auditor",
    title: "Seismic Link Auditor",
    category: "Automation & Quality Engineering",
    ownership: "Built",
    status: "Prototype",
    summary:
      "An internal prototype tool for discovering and auditing internal and external links referenced inside Seismic content, to catch broken or missing references before migration.",
    problem:
      "Manually checking every link referenced inside a large set of Seismic content items ahead of a migration is slow and error-prone. Broken or orphaned links that slip through surface later as customer-visible defects.",
    role: "Built the prototype as a personal initiative to reduce this specific manual bottleneck.",
    approach: [
      "Extracted structured data (including link references) from Seismic content exports",
      "Built logic to identify internal vs. external links and flag likely-broken or missing references",
      "Produced a simple output list usable for manual review and prioritization",
    ],
    tools: ["JSON data processing", "Scripting / automation", "Seismic content exports"],
    outcome:
      "Works as a prototype that speeds up link discovery compared to fully manual review. It has not been deployed as a production tool across all migrations, so no measured time-savings figure is published here.",
    limitations:
      "This is a personal/internal prototype, not a shipped product. It should be read as evidence of initiative and technical curiosity, not as an enterprise-scale automation platform.",
    relatedSlugs: ["migration-mapping-templates"],
  },
  {
    slug: "migration-mapping-templates",
    title: "Migration Mapping & Tracking Templates",
    category: "Migration & Content Operations",
    ownership: "Built",
    status: "Completed",
    summary:
      "Structured spreadsheet templates used to standardize how source content maps to target Mindtickle structure across migration projects — series, module, module type, and status tracking in one consistent format.",
    problem:
      "Without a shared structure, migration mapping tends to live in inconsistent, ad hoc spreadsheets — making it hard to see what's mapped, what's missing, and what's still in question across a project.",
    role: "Built and maintained these templates for use across migration work.",
    approach: [
      "Defined a consistent column structure: series name, module name, module type, and content sequence",
      "Added dropdown-based validation to reduce inconsistent data entry",
      "Built in status tracking so open items and exceptions are visible at a glance rather than buried in comments",
    ],
    tools: ["Excel / Google Sheets", "Data validation / dropdowns"],
    outcome:
      "Gave migration work a consistent format to track against, making it easier for anyone looking at the sheet to see mapping status without a separate explanation.",
    limitations:
      "No formal time-savings measurement exists for this; the benefit described here is the structural/process improvement itself, not a quantified efficiency gain.",
    relatedSlugs: ["enterprise-automotive-lms-migration", "knowledge-anywhere-migration", "seismic-link-auditor"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
