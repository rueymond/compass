Video: 18:36 to 20:46. Everything is DataviewJS reading properties; nothing on the page is typed by hand.

## Widgets and where they read from
| Widget (video) | View | Reads |
| --- | --- | --- |
| Focus mode, first on the page: today's highlight in large type | `Meta/views/focus.js` | `highlight_of_the_day` and `dimension` in today's daily note |
| Project health: active projects with no open task, flagged 🔴 | `Meta/views/projects.js` (`mode: "warnings"`) | open `- [ ]` tasks in each project note plus tasks tagged `#project/<slug>` |
| Wheel of life from this quarter's retreat (19:18), on the four life dimensions | `Meta/views/wheel.js` | `wheel_*` numbers in `02 Retreats/YYYY-QN Personal Retreat.md`, found by today's date |
| Combined daily questions, toggles, time-frame dropdown (19:39) | `Meta/views/dailyquestions.js` | every `dq_*` number in the daily notes |
| Life theme (20:19) | embed | `03 Planning/Life Theme.md#Theme` |
| Memento mori (20:21) | `Meta/views/memento.js` | `birthdate`, `life_expectancy` in `Meta/Compass Config.md` |
| Quick links to capture and to the planning notes (20:23) | `Meta/views/quicklinks.js` | QuickAdd command ids, today's date |

Also: `Projects Dashboard.md` (his projects dashboard, 19:03, plus the 🔴 health column), `Daily Questions.md` (his journaling dashboards, 18:54), `Task Dashboard.md`, `Library.md`. The habits widget from the video was removed; see [[06 Workflow - ICOR, Focus, and Library]].

## Using a view anywhere
```dataviewjs
await dv.view("Meta/views/focus");
await dv.view("Meta/views/projects", { mode: "warnings" });
await dv.view("Meta/views/dailyquestions", { from: "2026-07-01", to: "2026-09-30" });
await dv.view("Meta/views/wheel", { page: "02 Retreats/2026-Q2 Personal Retreat" });
await dv.view("Meta/views/week", { week: "2026-W35" });
```

## Configuration
`Meta/Compass Config.md` holds folders, prefixes, birthdate, life expectancy. Views fall back to sensible defaults if the config is missing.

## Extending
Mike built his with Claude's help. To add a widget: copy `Meta/views/week.js`, keep the first five lines (config, folder, prefix), change what it collects and renders, and call it with `dv.view`. Views cannot import each other, so each is self-contained.
