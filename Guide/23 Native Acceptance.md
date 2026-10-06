# Native acceptance record

This separates reproducible development evidence from native acceptance. The 2.0.0 candidate has passed automated packaging and disposable extraction checks, and every required native check below passed in an owner-reported run on 2026-10-06 (Windows, no screenshots, Obsidian version not recorded). The optional checks were not exercised. After the release review and a short re-check of the rebuilt archive, 2.0.0 was released on 2026-10-06. That run used the owner's fresh install of the candidate (example notes only), not a separate isolated Obsidian profile. Repeat the required checks for each new candidate, against a fresh, sanitized candidate in an isolated Obsidian profile. Do not use real personal notes or provider credentials for the basic acceptance pass.

## Identify the candidate

- Template version: 2.0.0, released 2026-10-06
- Life OS plugin version: 0.21.0 (the 2026-10-06 native run used the archive labelled 0.20.0; its `main.js` and `styles.css` are identical to 0.21.0, only the manifest version changed)
- Archive SHA256: released archive `f706f8196d135db178afedc4c8b1c21d5ae46a032a5c1302130a6b9b6c97777f` (the 2026-10-06 native run used the earlier build `8d192e40...3aa185`; see Release review). For any later candidate, use its external `.sha256` sidecar
- Operating system and Obsidian version: Windows (vault on a Google Drive for desktop folder); Obsidian version not recorded
- Test date and reviewer: 2026-10-06, owner
- Result: automated development checks passed; all required native checks and the four 2.0.0 feature checks passed, owner-reported on 2026-10-06 (see below); release review done and the rebuilt archive re-checked; accepted and released as 2.0.0 on 2026-10-06; optional checks not tested; Obsidian version and screenshots not recorded

## Required checks

| Check | Expected behavior | Result |
| --- | --- | --- |
| Extraction | No unsafe paths, symlinks, or unexpected files; manifest matches | Passed (2026-10-06, owner): delivered ZIP SHA256 matched the sidecar (`certutil`); the automated disposable restore had passed on that exact ZIP before delivery |
| Cold start | Restricted-mode decision is explicit; Home opens after plugins load | Passed (2026-10-06, owner) |
| Reload twice | No duplicate views or stale listeners | Passed (2026-10-06, owner): one Life OS tab after two reloads; no duplicated actions |
| Home and Today | Accurate empty states; samples do not enter live commitments | Passed (2026-10-06, owner) |
| Capture | Existing QuickAdd routes work; same-name notes are not overwritten | Passed (2026-10-06, owner): library and retreat routes created notes in the right folders; a second New library note with the same title opened the existing note unchanged |
| Task navigation | Clicking a task opens its exact source line without changing it | Passed (2026-10-06, owner) |
| Calendar | Existing notes open; missing non-today dates are not created | Passed (2026-10-06, owner): month browsing created no daily notes |
| Review | Chart values reconcile with fixture properties and source-day links | Passed (2026-10-06, owner): with samples included, a column matched its note's `dq_*` average and opened that note; dimensions card showed the four ICOR dimensions |
| Brain | 3D rotation, pan, zoom, labels, search, filters, hover, and note opening work | Passed (2026-10-06, owner) |
| Keyboard | Navigation and chart details work without a mouse | Passed (2026-10-06, owner) |
| Layout | Narrow panes, 200 percent zoom, light and dark themes remain usable | Passed (2026-10-06, owner) |
| Privacy | No shipped keys or sessions; prompt buttons do not auto-send | Passed (2026-10-06, owner): no Agent Client sessions; per-install REST key; agent button opened the prompt unsent |
| Bridge | Listener and loopback configuration are checked locally without exposing keys | Passed (2026-10-06, owner): `netstat` showed the API listening on `127.0.0.1:27123` only |
| Backup restore | Restore a fixture vault and verify notes and settings | Passed (2026-10-06, owner): a copy outside Google Drive opened as a separate vault with plugins, dashboards, example notes, and settings intact |

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

No screenshots were captured and the Obsidian version was not recorded. The required checks were run the same day on the same install; their results are in the Required checks table.

## Release review, 2026-10-06

Human review from `scripts/RELEASE.md`, run on the archive with SHA256 `8d192e406a20521d8c4a7c319f72c3c35cfa1ab42752dffa5931d933763aa185`.

| Item | Finding | Decision |
| --- | --- | --- |
| Private data and unexpected files | 216 files. No personal paths, account names, or email addresses (only an upstream author address in Dataview's manifest); no API keys, tokens, or private keys; Agent Client has no sessions and auto-approve off; QuickAdd AI providers empty and online features off; Omnisearch HTTP API off; Local REST API ships without a key; workspace opens only Setup; every user-folder note is tagged `example` | No change |
| Version agreement | Template 2.0.0 candidate agrees across README, CHANGELOG, `Meta/version.md`, and this record. All eleven plugins agree across manifest, notices, and `Meta/version.md`. `life-os-app` code had changed in 2.0.0 under the old 0.20.0 label | Bumped `life-os-app` to 0.21.0 |
| Provenance | Nine of ten third-party plugins byte-identical to their upstream release assets. Dataview 0.5.68 `main.js` carries an undocumented one-line inline-field rendering patch, present since 1.0.0 | Keep the patch; disclosed in `THIRD_PARTY_NOTICES.md` Modifications |
| Licenses | Every plugin ships a LICENSE matching the notices. Kanban and Omnisearch are GPL-3.0, Templater AGPL-3.0, distributed as unmodified upstream `main.js` | Notices list the source commits; the published release attaches a `git archive` source zip of each at that commit |
| Local REST API default | HTTP server on, loopback only (`127.0.0.1:27123`, confirmed in the native Bridge check), per-install key | Keep on: the MCP bridge (Guide 19) and Setup Tier 4 rely on it |

The changes above produce a new candidate archive. Required re-check for it, because behavior is unchanged and only labels, notices, and documentation differ: extraction (SHA256 matches its sidecar), cold start, and one capture route. Status: passed (2026-10-06, owner) on `LifeOS-template-v2.0.0.zip`, SHA256 `f706f8196d135db178afedc4c8b1c21d5ae46a032a5c1302130a6b9b6c97777f`: the hash matched, Life OS 0.21.0 loaded after a cold start, and New clipping created a filled-in note in `07 Library/Clippings`. That exact archive is the 2.0.0 release.

Known cosmetic mismatch: the builder stamps every archive as a candidate, so inside the released archive `Meta/version.md` reads `release_status: candidate` and this record shows the re-check as pending. The archive was not rebuilt to change that text, because rebuilding would produce untested bytes.

## User-reported testing

The owner reports having tested and checked the system. That is useful user-reported evidence, but the exact platform, tested artifact, workflow coverage, and results were not specified. Do not infer that every native checklist item passed. Record those details during the next native acceptance run.
