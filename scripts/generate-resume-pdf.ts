import PDFDocument from "pdfkit";
import { createWriteStream } from "node:fs";
import path from "node:path";
import { profile } from "../src/content/profile";
import { experience } from "../src/content/experience";
import { education, earlyWork } from "../src/content/education";
import { skillGroups } from "../src/content/skills";

const outPath = path.join(process.cwd(), "public", "resume.pdf");
const doc = new PDFDocument({ size: "A4", margins: { top: 56, bottom: 56, left: 56, right: 56 } });
doc.pipe(createWriteStream(outPath));

const ink = "#16181d";
const muted = "#51565f";
const accent = "#2b3a8f";

doc.font("Helvetica-Bold").fontSize(22).fillColor(ink).text(profile.name);
doc.font("Helvetica").fontSize(12).fillColor(muted).text(profile.shortTitle);
doc.moveDown(0.6);
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(muted)
  .text([profile.linkedin, profile.location].filter(Boolean).join("   ·   "));

doc.moveDown(1);
doc.font("Helvetica").fontSize(10.5).fillColor(muted).text(profile.summary, { align: "left" });

function sectionHeading(title: string) {
  doc.moveDown(1.1);
  doc.font("Helvetica-Bold").fontSize(12).fillColor(accent).text(title.toUpperCase());
  doc.moveDown(0.3);
}

sectionHeading("Experience");
experience.forEach((entry) => {
  doc.font("Helvetica-Bold").fontSize(11).fillColor(ink).text(`${entry.role} · ${entry.org}`);
  doc.font("Helvetica").fontSize(9.5).fillColor(muted).text(entry.period);
  doc.moveDown(0.2);
  entry.highlights.forEach((item) => {
    doc.font("Helvetica").fontSize(9.8).fillColor(muted).text(`—  ${item}`, { indent: 0 });
  });
  doc.moveDown(0.6);
});

sectionHeading("Education");
education.forEach((item) => {
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(ink).text(item.school);
  doc.font("Helvetica").fontSize(9.5).fillColor(muted).text(item.period);
});
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(9.8).fillColor(muted).text(`${earlyWork.heading}: ${earlyWork.detail}`);

sectionHeading("Skills");
skillGroups.forEach((group) => {
  doc
    .font("Helvetica-Bold")
    .fontSize(9.8)
    .fillColor(ink)
    .text(`${group.group}: `, { continued: true })
    .font("Helvetica")
    .fillColor(muted)
    .text(group.items.join(", "));
});

doc.end();

console.log(`Resume PDF written to ${outPath}`);
