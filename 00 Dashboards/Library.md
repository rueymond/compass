---
cssclasses:
  - lifeos-dashboard
---
Everything you take in lives in `07 Library/`, in three folders. The folder decides the category; each folder has its own template, so the QuickAdd commands below create a filled-in note in the right place.

| Folder | What goes there | Template | Create with |
| --- | --- | --- | --- |
| `07 Library/Course` | courses you are taking (making one? that is `06 Writing/Course Content`) | `Templates/Library Course.md` | QuickAdd: 🎓 New library course |
| `07 Library/Notes` | your notes on a book, article, podcast, talk, or paper, with `^block-id` quotes | `Templates/Library Note.md` | QuickAdd: 📚 New library note |
| `07 Library/Clippings` | pages saved from the web to read or keep | `Templates/Library Clipping.md` | QuickAdd: ✂️ New clipping |

```dataviewjs
const bar = dv.container.createEl("div");
bar.style.cssText = "display:flex;gap:0.5em;flex-wrap:wrap;";
for (const [id, label] of [["quickadd:choice:lifeos-new-course", "🎓 New course"], ["quickadd:choice:lifeos-new-library-note", "📚 New note"], ["quickadd:choice:lifeos-new-clipping", "✂️ New clipping"]]) {
  const b = bar.createEl("button", { text: label });
  b.addEventListener("click", () => { if (!app.commands.executeCommandById(id)) new Notice(`QuickAdd command ${id} not found`); });
}
```

## Course
```dataview
TABLE WITHOUT ID file.link AS Course, status AS Status, platform AS Platform, area AS Dimension, started AS Started, finished AS Finished
FROM "07 Library/Course"
SORT choice(status = "active", 0, choice(status = "queued", 1, 2)) ASC, file.mtime DESC
```

## Notes
```dataview
TABLE WITHOUT ID file.link AS Note, kind AS Kind, author AS Author, status AS Status, rating AS Rating
FROM "07 Library/Notes"
SORT choice(status = "active", 0, 1) ASC, file.mtime DESC
```

## Clippings
Inbox first. Once read, keep what matters (or turn it into a note), then set `status: done`.
```dataview
TABLE WITHOUT ID file.link AS Clipping, source AS Source, clipped AS Clipped, status AS Status
FROM "07 Library/Clippings"
SORT choice(status = "inbox", 0, 1) ASC, clipped DESC
```

## Saving web pages straight into Clippings
- **Obsidian Web Clipper** (browser extension): set the default template's note location to `07 Library/Clippings` and add the properties `type: clipping`, `source: {{url}}`, `clipped: {{date}}`, `status: inbox`.
- **Web viewer** (core plugin, see [[16 SEO, Web Viewer, and Vault Lens]]): Settings → Web viewer → set the folder for saved pages to `07 Library/Clippings`. Saved pages keep the properties the viewer wrote; they still show up above because the folder decides the category. Add `status: inbox` if you want them sorted first.

## Ask
```agent
type: button
text: "File this page in the wiki"
prompt: "Read Prompts/12 Research Capture.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```
