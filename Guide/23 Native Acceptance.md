# Native acceptance record

This separates reproducible development evidence from native acceptance. A local candidate has passed automated packaging and disposable extraction checks, but native acceptance is not complete. Run the remaining checks against a fresh, sanitized candidate in an isolated Obsidian profile. Do not use real personal notes or provider credentials for the basic acceptance pass.

## Identify the candidate

- Template version: 2.0.0 candidate
- Life OS plugin version: 0.20.0
- Archive SHA256: use the exact candidate's external `.sha256` sidecar; not embedded here to avoid self-referential hashes
- Operating system and Obsidian version: Windows (vault on a Google Drive for desktop folder); Obsidian version not recorded
- Test date and reviewer: 2026-10-06, owner
- Result: automated development checks passed; owner-reported install and the four 2.0.0 feature checks passed (see below); native acceptance incomplete

## Required checks

| Check | Expected behavior | Result |
| --- | --- | --- |
| Extraction | No unsafe paths, symlinks, or unexpected files; manifest matches | Automated candidate restore passed; rerun for the exact delivered ZIP |
| Cold start | Restricted-mode decision is explicit; Home opens after plugins load | Not tested |
| Reload twice | No duplicate views or stale listeners | Not tested |
| Home and Today | Accurate empty states; samples do not enter live commitments | Not tested |
| Capture | Existing QuickAdd routes work; same-name notes are not overwritten | Partial (2026-10-06, owner): the three library routes and the retreat route created notes in the right folders; same-name overwrite protection not tested |
| Task navigation | Clicking a task opens its exact source line without changing it | Not tested |
| Calendar | Existing notes open; missing non-today dates are not created | Not tested |
| Review | Chart values reconcile with fixture properties and source-day links | Not tested |
| Brain | 3D rotation, pan, zoom, labels, search, filters, hover, and note opening work | Not tested |
| Keyboard | Navigation and chart details work without a mouse | Not tested |
| Layout | Narrow panes, 200 percent zoom, light and dark themes remain usable | Not tested |
| Privacy | No shipped keys or sessions; prompt buttons do not auto-send | Not tested |
| Bridge | Listener and loopback configuration are checked locally without exposing keys | Not tested |
| Backup restore | Restore a fixture vault and verify notes and settings | Not tested |

## Separate optional checks

Provider authentication, an actual AI request, external calendar integration, and mobile-specific functionality require separate authorization and evidence. Leave them not tested if they were not exercised. A desktop browser fixture does not prove mobile or native behavior.

## Evidence rules

Bind screenshots and results to the exact candidate checksum. Label synthetic fixtures visibly. Record failures and skipped checks. A passing static, mock-runtime, or browser test does not mark this record complete.

## Development checks, 2026-09-09

Life OS application 0.20.0 passed 59 static and mock-runtime checks. The Assistant contract verifier passed 16 explicit non-auto-send workflows and context disclosure checks. Eleven synthetic temporary-directory release-safety tests passed. The dashboard browser fixture passed all ten dashboard modules, Home spacing, task-source navigation, month navigation, charts, library filters, workload and discussion summaries, per-module visual controls, narrow document widths, and a light-theme smoke check.

The Brain browser regression fixture passed graph filtering, search, hover, selection, note opening, keyboard controls, zoom, reset, and cleanup. Its latest synthetic rotation CPU timing was median 5.4 ms and p95 6.2 ms. This measures neither native Obsidian frame latency nor mobile performance.

A sanitized local candidate passed 165 template checks. Its ZIP sidecar and embedded file hashes were checked after extraction into a disposable directory. No personal vault was overwritten or restored. The archive remains a development candidate, not an accepted public release. No provider request or publication was performed. Screenshots use synthetic records, with a visible fixture label and stubbed icons.

## Owner-reported checks, 2026-10-06: 2.0.0 features

Artifact: `LifeOS-template-v2.0.0.zip`, built from `main` at `6909f08` with `build_template.py --version 2.0.0`, SHA256 `8d192e406a20521d8c4a7c319f72c3c35cfa1ab42752dffa5931d933763aa185`. Before delivery it passed 168 template checks and a disposable extraction (215 files matched the manifest). The owner extracted it to a Google Drive for desktop folder on Windows, opened it as a vault, turned off Restricted mode, and reloaded.

| Check | Expected behavior | Result (owner-reported) |
| --- | --- | --- |
| Install | Plugins load after Restricted mode is turned off; Setup checks itself | Passed. The owner reported the Setup page all green; which tiers was not specified. On a fresh template the Tier 1 and 2 items (birthdate, Life Theme, Core Values, example notes, answered questions) are expected to be open, so treat this as Tier 0 confirmation only |
| Focus mode | A `highlight_of_the_day` typed into today's note shows in the note's callout and in large type at the top of the Compass Dashboard | Passed |
| Project health | Example project shows 🟢; with its open tasks ticked it shows 🔴 on the Projects Dashboard and under Project health on the Compass Dashboard | Passed |
| Library | Each Library dashboard button prompts for a title and creates a filled-in note in `Course`, `Notes`, or `Clippings` | Passed |
| Retreat dimensions | A new personal retreat has exactly `wheel_business`, `wheel_family`, `wheel_growth`, `wheel_health` | Passed |

No screenshots were captured. The Obsidian version, the exact reload steps, and the other required checks above were not recorded or exercised in this run; they remain not tested.

## User-reported testing

The owner reports having tested and checked the system. That is useful user-reported evidence, but the exact platform, tested artifact, workflow coverage, and results were not specified. Do not infer that every native checklist item passed. Record those details during the next native acceptance run.
