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
    slug: "migration-discovery-qa-automation",
    title: "Migration Discovery & QA Automation",
    category: "Automation & Quality Engineering",
    ownership: "Built",
    status: "Completed",
    summary:
      "A Playwright-based pipeline that opens each module of a legacy LMS, extracts its content, assets, and assessments, runs structured QA against it, and reports everything in a seven-sheet Excel workbook — built to replace slow, error-prone manual migration audits.",
    problem:
      "Before migrating a large content library, someone has to go module-by-module and confirm what's actually there: content structure, embedded assets, SCORM packages, assessment questions, and whether anything is missing or broken. Done by hand across dozens or hundreds of modules, this is slow, inconsistent between reviewers, and easy to get subtly wrong.",
    role: "Built the pipeline end to end as a personal technical initiative, for use in real migration work.",
    approach: [
      "Built a browser-automation layer (Playwright) that logs in once via a real visible browser window — a person completes SSO/MFA by hand — then reuses that saved session for every later run, so the script never reads or stores credential values itself",
      "Walked each module's content structure automatically, downloading referenced assets and deduplicating them across the entire run using SHA-256 content hashing, so the same asset is never fetched twice",
      "Added a read-only investigation layer for SCORM/Rustici-embedded content and assessment questions — it inspects and extracts, but never submits an answer or marks anything complete",
      "Built a centralized navigation safety guard that refuses to visit any URL matching known state-changing endpoints (completion tracking, rating submission, variant switching), confirmed by direct inspection of the platform's own behavior — so the tool genuinely cannot accidentally change live data",
      "Designed a seven-state status model per module (Complete / Partial / Failed / Access Restricted / Requires Manual Review / Not Attempted / Not Applicable) instead of a single pass/fail flag, so a module with one failed asset download is distinguishable from one that's fully broken",
      "Added per-module checkpointing so a crash or interruption only loses the module in progress — already-downloaded assets are never re-fetched, and reports rebuild from the full checkpoint history on every run",
      "Joined the discovered content data onto an existing module-inventory spreadsheet by module ID, without ever modifying that source inventory, and generated a structured multi-sheet Excel report (module summary, topic mapping, content-component mapping, asset manifest, assessments, QA exceptions)",
    ],
    tools: ["Playwright", "TypeScript / Node.js", "SHA-256 content hashing", "Structured Excel reporting"],
    outcome:
      "A working, checkpointed pipeline that has been run against real migration content, producing structured, reviewable output instead of ad hoc manual notes. The read-only safety guard and the granular status model were both deliberate responses to real risks (accidentally changing live platform data, and collapsing meaningfully different failure modes into one generic \"failed\" bucket).",
    limitations:
      "No measured time-savings figure is published here, because none has been independently verified against a manual baseline. The client account this has been used on is withheld pending disclosure approval — what's described here is the tool's real, verifiable engineering, not a specific client engagement.",
    relatedSlugs: ["migration-mapping-templates", "ai-roleplay-export-validation-pipeline"],
  },
  {
    slug: "ai-roleplay-export-validation-pipeline",
    title: "AI Roleplay Export & Validation Pipeline",
    category: "Automation & Quality Engineering",
    ownership: "Built",
    status: "Completed",
    summary:
      "A four-stage pipeline that turns an AI-driven training roleplay's configuration into a client-ready approval workbook — browser extraction, schema normalization, Excel generation, and automated validation — built for compliance-sensitive review workflows.",
    problem:
      "Some customers need to formally review and approve the exact configuration of an AI-driven training exercise before it goes live — every instruction given to the AI, every scoring parameter, every reviewer setting — in a clean, readable document rather than screenshots of an admin screen. Producing that by hand, accurately, for a configuration with dozens of fields, is slow and easy to get subtly wrong.",
    role: "Built the full pipeline — extraction, normalization, document generation, and validation — as a personal technical initiative, for use in real client-facing review work.",
    approach: [
      "Built a browser-automation extraction stage that reads a roleplay's full configuration directly from the admin interface's rendered content, section by section",
      "Normalized the raw extraction into a consistent schema, so downstream steps don't depend on the quirks of how the page happened to render",
      "Generated a three-sheet client-facing Excel workbook (Client Review, Configuration Settings, Items to Confirm) from the normalized data",
      "Built a separate validation stage that cross-checks the generated workbook against the source data — e.g. confirming scoring weights actually sum to the declared maximum, and that every configured question made it into the client-facing sheet — before anything is sent anywhere",
      "Kept each pipeline stage as a separate, inspectable file on disk, so a person can hand-correct an intermediate JSON file and re-run just the later stages, without needing a live browser session again",
      "Wrote a regression test that runs the normalize → generate → validate stages against a hand-built fixture file, so the non-browser part of the pipeline can be checked for correctness without needing live credentials or a live session at all",
    ],
    tools: ["Playwright", "Python", "openpyxl (Excel generation)", "JSON schema normalization"],
    outcome:
      "Run end-to-end against a live, real configuration — not just tested against a mock — completing extraction through validation in under 20 seconds of active extraction time after a one-time manual login. That real run caught an actual configuration change (a newly added reviewer) that a prior manual extraction had missed, and surfaced two genuine bugs in the extraction logic, both found, root-caused, and fixed with the fix documented alongside the bug.",
    limitations:
      "One configuration screen (due-date and email-trigger settings) isn't parsed yet — documented as a known gap rather than silently skipped. One field (the roleplay's display name, in certain URL entry points) currently needs a one-line manual correction after extraction. The specific client and subject matter this was built and proven against are withheld pending disclosure approval.",
    relatedSlugs: ["migration-discovery-qa-automation"],
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
    relatedSlugs: ["enterprise-automotive-lms-migration", "knowledge-anywhere-migration", "migration-discovery-qa-automation"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
