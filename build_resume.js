// Builds Resume_Senior_FullStack_Engineer.docx (two-column layout).
// Usage: node build_resume.js <output.docx>
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
  BorderStyle, AlignmentType, LevelFormat, VerticalAlign, TableLayoutType, UnderlineType, ImageRun,
} = require("docx");

const OUT = process.argv[2] || "resume.docx";
const FONT = "Arial";
const BLUE = "1E88E5";
const DARK = "111111";
const TEXT = "333333";
const GRAY = "555555";
const NB = " ";

const PAGE_W = 12240, MARGIN = 720;
const CONTENT_W = PAGE_W - 2 * MARGIN;
const LEFT_W = 6500, GAP_W = 400, RIGHT_W = CONTENT_W - LEFT_W - GAP_W;

const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: none, bottom: none, left: none, right: none };
const dashed = { bottom: { style: BorderStyle.DASHED, size: 4, color: "C8C8C8", space: 4 } };

const run = (text, o = {}) => new TextRun({ text, font: FONT, size: o.size || 18, color: o.color || TEXT, bold: o.bold });

// Small inline icons (PNG files in resume_icons/, drawn from Segoe MDL2 glyphs)
const ICON_DIR = require("path").join(__dirname, "resume_icons");
const icon = (name, color = "blue", px = 11) => new ImageRun({
  type: "png", data: fs.readFileSync(require("path").join(ICON_DIR, `${name}_${color}.png`)),
  transformation: { width: px, height: px },
});

const sectionHeader = (text) => new Paragraph({
  spacing: { before: 130, after: 70 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: "000000", space: 2 } },
  children: [run(text, { size: 26, bold: true, color: "000000" })],
});

const divider = () => new Paragraph({ spacing: { before: 0, after: 30, line: 100 }, border: dashed, children: [] });

const bullet = (text) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  spacing: { after: 10, line: 240 },
  children: [run(text)],
});

function role({ title, company, dates, location, bullets }, last) {
  const out = [
    new Paragraph({ spacing: { before: 60, after: 0 }, children: [run(title, { size: 21, bold: true, color: DARK })] }),
    new Paragraph({ spacing: { after: 10 }, children: [run(company, { size: 21, bold: true, color: BLUE })] }),
    new Paragraph({ spacing: { after: 40 }, children: [
      icon("calendar", "gray", 10), run("  " + dates, { size: 17, color: GRAY }),
      ...(location ? [run("       "), icon("pin", "gray", 10), run("  " + location, { size: 17, color: GRAY })] : []),
    ] }),
    ...bullets.map(bullet),
  ];
  if (!last) out.push(divider());
  return out;
}

function eduItem(degree, school, dates, last) {
  const out = [
    new Paragraph({ spacing: { before: 60, after: 0 }, children: [run(degree, { size: 20, bold: true, color: DARK })] }),
    new Paragraph({ spacing: { after: 40 }, children: [run(school, { size: 19, bold: true, color: BLUE }), ...(dates ? [run("     "), icon("calendar", "gray", 10), run("  " + dates, { size: 17, color: GRAY })] : [])] }),
  ];
  if (!last) out.push(divider());
  return out;
}

function skillGroup(label, items, last) {
  const children = [];
  items.forEach((s, i) => {
    children.push(new TextRun({
      text: s.replace(/ /g, NB), font: FONT, size: 18, bold: true, color: TEXT,
      underline: { type: UnderlineType.SINGLE, color: "BDBDBD" },
    }));
    if (i < items.length - 1) children.push(new TextRun({ text: "     ", font: FONT, size: 18 }));
  });
  const out = [
    new Paragraph({ spacing: { before: 60, after: 40 }, children: [run(label, { size: 20, bold: true, color: BLUE })] }),
    new Paragraph({ spacing: { after: 50, line: 320 }, children }),
  ];
  if (!last) out.push(divider());
  return out;
}

const titledItem = (name, by) => [
  new Paragraph({ spacing: { before: 60, after: 0 }, children: [run(name, { size: 19, bold: true, color: DARK })] }),
  new Paragraph({ spacing: { after: 40 }, children: [run(by, { size: 17, color: GRAY })] }),
];

// ---------------- CONTENT ----------------
const experience = [
  {
    title: "Senior Software Engineer", company: "JPMorganChase", dates: "Jun 2023 - Present", location: "New York, NY",
    bullets: [
      "Lead the AWS cloud migration of 25 UI-facing APIs for Consumer & Community Banking (CCB) applications, introducing feature flags and fallback mechanisms for safe, incremental rollouts and stronger resilience",
      "Engineer and optimize REST APIs that improve performance, scalability, and reliability across CCB applications",
      "Raised Sonar code coverage from 18% to 80% as subject-matter expert for UI deliverables, cutting technical debt and release risk",
      "Align technology initiatives with business objectives by partnering with cross-functional product, design, and engineering teams",
    ],
  },
  {
    title: "Software Engineer", company: "Walmart", dates: "Jan 2023 - May 2023", location: "",
    bullets: [
      "Developed React interfaces for the Shopper Behavior and Channel Performance analytics dashboards",
      "Drove TDD with Jest, Cypress, and JUnit, sustaining 85% code coverage",
      "Delivered secure model- and region-based feature access to support compliance and data protection requirements",
    ],
  },
  {
    title: "Software Engineer", company: "Ford Motor Company", dates: "Mar 2021 - Dec 2022", location: "",
    bullets: [
      "Built 3 portals for Ford's EV Beta Program with React frontends and Node.js backend services",
      "Integrated Splunk and Amplitude observability to strengthen production monitoring and product analytics",
      "Sustained strong automated test coverage with Jest and JUnit",
    ],
  },
  {
    title: "Software Engineer", company: "Synchrony", dates: "Jan 2018 - Feb 2021", location: "",
    bullets: [
      "Designed performance-critical credit card processing APIs using Apache Kafka, RabbitMQ, and Redis, handling 1M+ transactions/day",
      "Engineered responsive React frontends that improved customer experience across financial services applications",
    ],
  },
  {
    title: "Software Engineer", company: "HCL Technologies", dates: "Aug 2014 - Jul 2016", location: "",
    bullets: [
      "Delivered and automated HR portals using React and Spring Boot",
      "Received the Spot Award for excellence in delivery and innovation",
    ],
  },
];

const left = [sectionHeader("EXPERIENCE")];
experience.forEach((r, i) => left.push(...role(r, i === experience.length - 1)));
left.push(
  sectionHeader("EDUCATION"),
  ...eduItem("Ph.D., Information Technology", "University of the Cumberlands", ""),
  ...eduItem("M.S., Computer Science", "San Diego State University", "2016 - 2019"),
  ...eduItem("B.E., Electrical, Electronics & Communications Engg", "Visvesvaraya Technological University", "2010 - 2014", true),
);

const skills = [
  ["Frontend", ["React.js", "Bootstrap", "Web Development", "Portals"]],
  ["Backend & Messaging", ["Node.js", "Spring Boot", "REST APIs", "Apache Kafka", "RabbitMQ", "Redis", "Credit Card Processing"]],
  ["Cloud & DevOps", ["AWS", "AWS Cloud Migration", "Docker", "Pivotal Cloud Foundry", "Feature Flags", "MLOps"]],
  ["Testing & Quality", ["TDD", "Jest", "Cypress", "JUnit", "Sonar", "Clean Code"]],
  ["Observability", ["Splunk", "Dynatrace", "Amplitude", "System Monitoring", "Data Privacy"]],
];

const right = [
  sectionHeader("SUMMARY"),
  new Paragraph({
    spacing: { after: 60, line: 260 },
    children: [run("Senior Full-Stack Engineer with 10+ years building enterprise web apps and high-performance APIs across banking, retail, and automotive. Expert in React, TypeScript, and JavaScript with backend experience in Node.js and Java/Spring Boot. Currently leading an AWS cloud migration at JPMorganChase. Known for test-driven quality (coverage raised 18% to 80%), platform reliability, and a growing focus on applied AI and MLOps. AWS Certified Solutions Architect")],
  }),
  sectionHeader("SKILLS"),
  ...skills.flatMap(([label, items], i) => skillGroup(label, items, i === skills.length - 1)),
  sectionHeader("CERTIFICATIONS"),
  ...titledItem("AWS Certified Solutions Architect", "Amazon Web Services"),
  divider(),
  ...titledItem("AWS Certified Cloud Practitioner", "Amazon Web Services"),
  sectionHeader("TRAINING / COURSES"),
  ...titledItem("Algorithms Specialization", "Stanford University (Coursera)"),
];

// ---------------- HEADER ----------------
const header = [
  new Paragraph({ spacing: { after: 0 }, children: [run("SALMAN MUJTABA", { size: 52, bold: true, color: "000000" })] }),
  new Paragraph({ spacing: { after: 80 }, children: [run("Senior Full-Stack Engineer", { size: 26, bold: true, color: BLUE })] }),
  new Paragraph({
    spacing: { after: 20 },
    children: [
      icon("phone"), run(" +1 (347) 659-3510", { bold: true, color: TEXT }), run("      "),
      icon("at"), run(" gossipheadstart@gmail.com", { bold: true, color: TEXT }), run("      "),
      icon("link"), run(" linkedin.com/in/salman-mujtaba-62021044a", { bold: true, color: TEXT }),
    ],
  }),
  new Paragraph({ spacing: { after: 100 }, children: [icon("pin"), run(" Sanford, Florida", { bold: true, color: TEXT })] }),
];

const cell = (w, children) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: noBorders, verticalAlign: VerticalAlign.TOP, margins: { top: 0, bottom: 0, left: 0, right: 0 }, children });

const body = new Table({
  width: { size: CONTENT_W, type: WidthType.DXA },
  columnWidths: [LEFT_W, GAP_W, RIGHT_W],
  layout: TableLayoutType.FIXED,
  borders: { ...noBorders, insideHorizontal: none, insideVertical: none },
  rows: [new TableRow({ children: [cell(LEFT_W, left), cell(GAP_W, [new Paragraph("")]), cell(RIGHT_W, right)] })],
});

const doc = new Document({
  creator: "Salman Mujtaba",
  title: "Salman Mujtaba - Senior Full-Stack Engineer",
  styles: { default: { document: { run: { font: FONT, size: 18 } } } },
  numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 240, hanging: 180 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: 15840 }, margin: { top: 520, bottom: 300, left: MARGIN, right: MARGIN } } },
    children: [...header, body, new Paragraph({ spacing: { before: 0, after: 0, line: 20 }, children: [new TextRun({ text: "", size: 2 })] })],
  }],
});

Packer.toBuffer(doc).then(b => { fs.writeFileSync(OUT, b); console.log("wrote", OUT); });
