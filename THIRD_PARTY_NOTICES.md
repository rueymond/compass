# Third-party notices

This vault bundles the following Obsidian community plugins with their recorded versions and licenses. Each plugin folder includes its main script, manifest, and license; a stylesheet is included where supplied. The upstream links below are provenance references. File presence and matching version labels alone do not prove byte-for-byte identity with an upstream release. A public release requires a separate upstream provenance and redistribution review, including applicable source-distribution requirements.

| Plugin id | Version shipped | License | Upstream | Release |
| --- | --- | --- | --- | --- |
| dataview | 0.5.68 | MIT | https://github.com/blacksmithgu/obsidian-dataview | https://github.com/blacksmithgu/obsidian-dataview/releases/tag/0.5.68 (modified, see Modifications) |
| templater-obsidian | 2.25.0 | AGPL-3.0 | https://github.com/SilentVoid13/Templater | https://github.com/SilentVoid13/Templater/releases/tag/2.25.0 |
| periodic-notes | 0.0.17 | MIT | https://github.com/liamcain/obsidian-periodic-notes | https://github.com/liamcain/obsidian-periodic-notes/releases/tag/0.0.17 |
| quickadd | 2.23.0 | MIT | https://github.com/chhoumann/quickadd | https://github.com/chhoumann/quickadd/releases/tag/2.23.0 |
| obsidian-tasks-plugin | 8.4.0 | MIT | https://github.com/obsidian-tasks-group/obsidian-tasks | https://github.com/obsidian-tasks-group/obsidian-tasks/releases/tag/8.4.0 |
| obsidian-kanban | 2.0.51 | GPL-3.0 | https://github.com/mgmeyers/obsidian-kanban | https://github.com/mgmeyers/obsidian-kanban/releases/tag/2.0.51 |
| omnisearch | 1.30.1 | GPL-3.0 | https://github.com/scambier/obsidian-omnisearch | https://github.com/scambier/obsidian-omnisearch/releases/tag/1.30.1 |
| obsidian-local-rest-api | 5.1.0 | MIT | https://github.com/coddingtonbear/obsidian-local-rest-api | https://github.com/coddingtonbear/obsidian-local-rest-api/releases/tag/5.1.0 |
| agent-client | 0.12.1 | Apache-2.0 | https://github.com/RAIT-09/obsidian-agent-client | https://github.com/RAIT-09/obsidian-agent-client/releases/tag/0.12.1 |
| seo | 0.5.6 | MIT | https://github.com/davidvkimball/obsidian-seo | https://github.com/davidvkimball/obsidian-seo/releases/tag/0.5.6 |

Plugin ids are the ones Obsidian uses; the display names appear in Settings → Community plugins.

## Provenance check (2026-10-06)

`main.js`, `manifest.json`, and `styles.css` of every plugin above were compared byte for byte with the assets of the linked upstream release. All are identical except Dataview's `main.js` (below).

## Modifications

- **dataview 0.5.68, `main.js`**: in `renderCompactMarkdownForInlineFieldLivePreview`, upstream moves only the last child node of the rendered paragraph into the container (`container.appendChild(paragraph.childNodes.item(paragraph.childNodes.length - 1))`); the bundled copy moves every child node (`while (paragraph.firstChild) container.appendChild(paragraph.firstChild)`), so an inline field whose value renders as several nodes is not truncated to its last node. The embedded source map differs accordingly. The patch has shipped since Compass 1.0.0 and was undocumented until 2.0.0. MIT permits modification; the upstream copyright and license notice are retained in `.obsidian/plugins/dataview/LICENSE`.

## Source code for GPL and AGPL plugins

Kanban and Omnisearch (GPL-3.0) and Templater (AGPL-3.0) are distributed as the unmodified compiled `main.js` from their upstream releases. Their complete corresponding source is the upstream repository at the release tag:

| Plugin id | Tag | Commit |
| --- | --- | --- |
| obsidian-kanban | 2.0.51 | `8501981a1afacb4c8fc03ec60604aa5eedfbd857` |
| omnisearch | 1.30.1 | `7ca477dae88f150088edd97bd9bcc7fdcf820c0b` |
| templater-obsidian | 2.25.0 | `b74b8dd21d686ca8fb88f11a9709db9487113a17` |

Each published Compass release attaches a source archive of each of these three repositories at that commit (`<plugin-id>-<version>-source.zip`), so the source stays available from the same place as the vault even if an upstream tag moves or disappears.

## First-party component

The original Life OS application shell is included with this vault.

| Plugin id | Version shipped | License | Source |
| --- | --- | --- | --- |
| life-os-app | 0.21.0 | MIT | `.obsidian/plugins/life-os-app/` |

The Life OS Brain view is an original Canvas implementation inspired by the brain-shaped visual concept in SEO OS. No SEO OS source code, assets, dependencies, or client data are bundled.

Obsidian itself is not included; members install it from https://obsidian.md.

Workflows in this vault follow Mike Schmitz's public video "How I Run My Whole Life Out of Obsidian" (Practical PKM, 2026): see `CREDITS.md`.
