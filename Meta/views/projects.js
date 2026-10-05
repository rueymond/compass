// Compass project health widget.
// Usage:
//   await dv.view("Meta/views/projects")                       -> table of active projects with a Health column
//   await dv.view("Meta/views/projects", { mode: "warnings" }) -> only projects with no open task (for the Compass Dashboard)
// A project's open tasks are the unchecked "- [ ]" lines in the project note itself plus every task tagged
// #project/<slug> (or a sub-tag) anywhere in the vault, counted once. Zero open tasks means no next action: flagged 🔴.
const cfg = dv.page("Meta/Compass Config") || {};
const FOLDER = cfg.projects_folder || "04 Projects";
const MODE = (input && input.mode) || "table";
const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const key = t => `${t.path}:${t.line}`;

const projects = dv.pages(`"${FOLDER}"`).where(p => p.type === "project" && p.status !== "done").array();
const allTasks = dv.pages().where(p => !p.file.path.startsWith("wiki/")).file.tasks.array();
const health = projects.map(p => {
  const tag = "#project/" + slug(p.file.name);
  const mine = new Map();
  for (const t of p.file.tasks) mine.set(key(t), t);
  for (const t of allTasks) if ((t.tags || []).some(x => x === tag || x.startsWith(tag + "/"))) mine.set(key(t), t);
  const tasks = [...mine.values()];
  const open = tasks.filter(t => !t.completed).length;
  const done = tasks.length - open;
  return { p, open, done, pct: tasks.length ? Math.round(100 * done / tasks.length) : 0 };
});

const flag = h => h.open === 0 ? "🔴 no open task" : "🟢";
if (MODE === "warnings") {
  const bad = health.filter(h => h.open === 0).sort((a, b) => String(a.p.due ?? "9999").localeCompare(String(b.p.due ?? "9999")));
  if (bad.length === 0) dv.paragraph("🟢 Every active project has at least one open task.");
  else dv.list(bad.map(h => `🔴 ${h.p.file.link}${h.p.area ? ` · ${h.p.area}` : ""}: no open task. Add the next action or mark it done.`));
} else {
  // Flagged projects first, then by due date.
  health.sort((a, b) => (a.open === 0 ? 0 : 1) - (b.open === 0 ? 0 : 1) || String(a.p.due ?? "9999").localeCompare(String(b.p.due ?? "9999")));
  dv.table(["Health", "Project", "Status", "Area", "Quarter", "Due", "Open tasks", "Progress"],
    health.map(h => [flag(h), h.p.file.link, h.p.status, h.p.area ?? "", h.p.quarter ?? "", h.p.due ?? "", h.open, `${h.pct}%`]));
}
