Compass borrows four ideas from the ICOR method (Input, Control, Output, Refine): one highlight per day, a cockpit that warns you about stalled projects, four life dimensions, and a library split by what kind of input it is. All of it runs on the same plugins as the rest of the vault (QuickAdd, Templater, Dataview, Tasks) and plain Markdown.

## ICOR mapped onto the folders
| Stage | Question it answers | Where it lives in Compass |
| --- | --- | --- |
| **Input** | What comes in? | `07 Library/` (Course, Notes, Clippings), QuickAdd captures into the daily note and `08 Tasks/Tasks.md`, `inbox/` |
| **Control** | What am I working on, and is it moving? | [[Compass Dashboard]] (focus mode), [[Projects Dashboard]] (project health), [[Task Dashboard]], `04 Projects/`, `05 People/` |
| **Output** | What do I make from it? | `06 Writing/` and its boards; library quotes embedded with `![[Note#^id]]` |
| **Refine** | Is it working, and what changes? | daily questions, weekly note, quarterly note, personal retreat scored on the four dimensions |

## Highlight of the day
- Every daily note has a `highlight_of_the_day` text property: the one thing that would make today a good day, chosen in the morning. Optionally set `dimension` to the life dimension it serves.
- The daily note shows it in a callout under the date. The [[Compass Dashboard]] shows it in large type as the first thing on the page, with today's due and scheduled tasks and stalled projects underneath. That top block is focus mode; everything below the line is context.
- The weekly note's review table lists each day's highlight next to its effort scores, so the Friday review shows what you said mattered and how much effort it got.
- Not every day needs one. An empty highlight is shown as "not set", never as a failure.

## Project health (the cockpit warning)
- A project is healthy when it has at least one open task: an unchecked `- [ ]` in the project note itself, or an open task tagged `#project/<slug>` anywhere in the vault (each task counted once).
- Zero open tasks means no next action. The [[Projects Dashboard]] flags it 🔴 and sorts it to the top; the Compass Dashboard lists it under Project health.
- The fix is always one of two: write the next action, or set `status: done`.
- The logic lives in `Meta/views/projects.js` (`{ mode: "warnings" }` for the short list).

## Life dimensions
- Four dimensions: **Business, Family, Growth, Health**. They replace the eight-area wheel of life and live in [[Compass Config]] as `wheel_areas` (the retreat scores) and `dimensions` (the one-line meanings).
- Personal retreat: score each dimension 1 to 10, pick one focus dimension, write one line per dimension in the retrospective, and name the dimension each intention serves.
- Quarterly note: the focus dimension, one "good enough" line per dimension, projects grouped by `area`.
- Weekly note: each of the three intentions names its dimension.
- Projects: `area` takes one of the four keys. Library courses can too.
- Life Theme stays one sentence over all four.

## Library: Course, Notes, Clippings
| Folder | What goes there | Template | QuickAdd command |
| --- | --- | --- | --- |
| `07 Library/Course` | courses you are taking | `Templates/Library Course.md` | 🎓 New library course |
| `07 Library/Notes` | your notes on a book, article, podcast, talk, or paper (`kind` says which) | `Templates/Library Note.md` | 📚 New library note |
| `07 Library/Clippings` | web pages saved to read or keep | `Templates/Library Clipping.md` | ✂️ New clipping |

- The [[Library]] dashboard shows the three folders side by side and has buttons for the three commands.
- The folder decides the category, so a clipping saved by the Web Clipper or Web viewer shows up even without the template's properties. Point both at `07 Library/Clippings` (details on the Library dashboard).
- Courses you *make* are writing, not input: they stay in `06 Writing/Course Content`.
- Book notes from earlier versions belong in `07 Library/Notes`; set `type: note` and `kind: book`.

## What was removed
Habit tracking (`habit_*` checkboxes, the Habit Canvas dashboard, the habits widget, and this guide's predecessor) was removed in the ICOR restructure (see CHANGELOG, Unreleased; a breaking change) to keep the daily note to one highlight and the daily questions. Old daily notes that still carry `habit_*` properties are left untouched; nothing reads them any more, and you can delete those properties by hand if you want.
