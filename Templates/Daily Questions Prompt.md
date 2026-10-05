<%*
/*
  Compass: end-of-day Daily Questions prompt (Marshall Goldsmith, "Triggers").
  Run this template ON the daily note (Templater: Open insert template modal, or the hotkey you assign).
  It asks each question, expects 1..10, and writes the answers into the note's properties. Nothing is inserted into the body.
  Questions come from the `questions` list in Meta/Compass Config.md (FALLBACK below is used only if that list is missing). Keep the "Did I do my best to" framing:
  grade effort, not results.
*/
const FALLBACK = [
  ["dq_goals",         "Did I do my best to set clear goals today?"],
  ["dq_progress",      "Did I do my best to make progress toward my goals?"],
  ["dq_meaning",       "Did I do my best to find meaning?"],
  ["dq_happy",         "Did I do my best to be happy?"],
  ["dq_relationships", "Did I do my best to build positive relationships?"],
  ["dq_engaged",       "Did I do my best to be fully engaged?"],
];
const file = tp.config.target_file;
const cache = app.metadataCache.getFileCache(file) || {};
const fm = cache.frontmatter || {};
const cfg = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath("Meta/Compass Config.md"))?.frontmatter || {};
const QUESTIONS = Array.isArray(cfg.questions) && cfg.questions.length ? cfg.questions.map(q => typeof q === "string" ? [q, "Did I do my best to " + q.replace(/^dq_/, "").replace(/[_-]+/g, " ") + "?"] : [q.key, q.text]).filter(x => x[0] && x[1]) : FALLBACK;
const answers = {};
for (const [key, q] of QUESTIONS) {
  const a = await tp.system.prompt(`${q}  (1 = terrible, 10 = great)`, fm[key] ? String(fm[key]) : "");
  if (a === null) break;
  const n = parseInt(a);
  if (!isNaN(n)) answers[key] = Math.min(10, Math.max(1, n));
}
if (Object.keys(answers).length) {
  await app.fileManager.processFrontMatter(file, f => { Object.assign(f, answers); });
  new Notice(`Saved ${Object.keys(answers).length} answers to ${file.basename}`);
}
-%>
