// Compass Focus widget: today's highlight_of_the_day, large, at the top of the Compass Dashboard.
// Usage: await dv.view("Meta/views/focus")
// Reads the property from today's daily note; never writes. The button opens (or creates) today's note
// through the QuickAdd choice lifeos-daily, which is where the highlight is set.
const cfg = dv.page("Meta/Compass Config") || {};
const FOLDER = cfg.daily_folder || "01 Journal/Daily";
const today = moment().format("YYYY-MM-DD");
const page = dv.page(`${FOLDER}/${today}`);
const highlight = page && page.highlight_of_the_day ? String(page.highlight_of_the_day).trim() : "";
const dimension = page && page.dimension ? String(page.dimension).trim() : "";

const root = dv.container.createEl("div", { cls: "lifeos-widget lifeos-focus" });
root.style.cssText = "border:2px solid var(--interactive-accent);border-radius:10px;padding:1em 1.25em;margin:0.5em 0 1em;";
root.createEl("div", { text: `Highlight of the day · ${moment().format("dddd, MMMM D")}` }).style.cssText = "font-size:0.8em;text-transform:uppercase;letter-spacing:0.06em;opacity:0.7;";
const main = root.createEl("div", { text: highlight || (page ? "No highlight set yet." : "Today's note does not exist yet.") });
main.style.cssText = `font-size:${highlight ? "1.8em" : "1.2em"};font-weight:${highlight ? 700 : 400};line-height:1.25;margin:0.3em 0;${highlight ? "" : "opacity:0.75;"}`;
if (dimension) root.createEl("div", { text: `Dimension: ${dimension}` }).style.cssText = "opacity:0.75;";
if (!highlight) root.createEl("p", { text: "Pick the one thing that would make today a good day and write it in the highlight_of_the_day property of today's note." }).style.cssText = "margin:0.4em 0;opacity:0.8;";

const actions = root.createEl("div");
actions.style.cssText = "margin-top:0.6em;display:flex;gap:0.5em;flex-wrap:wrap;";
const btn = actions.createEl("button", { text: page ? "Open today's note" : "Create today's note" });
btn.addEventListener("click", () => {
  const ok = app.commands.findCommand("quickadd:choice:lifeos-daily") && app.commands.executeCommandById("quickadd:choice:lifeos-daily");
  if (!ok && page) app.workspace.openLinkText(page.file.path, "", false);
});
