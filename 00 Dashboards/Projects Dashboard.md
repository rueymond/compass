Projects are notes in `04 Projects/` with a `status`, `area` (business, family, growth, or health), `quarter`, and `due` property. Tasks belong to a project via `#project/<slug>`.

## Active
🔴 means the project has no open task: no unchecked `- [ ]` in the project note and no open task tagged `#project/<slug>` anywhere. A project without a next action is stalled; add one or mark it done. Flagged projects sort to the top.
```dataviewjs
await dv.view("Meta/views/projects");
```

## By quarter
```dataview
TABLE WITHOUT ID file.link AS Project, status, area, due
FROM "04 Projects"
WHERE type = "project"
GROUP BY quarter
SORT quarter DESC
```

## Done
```dataview
LIST
FROM "04 Projects"
WHERE type = "project" AND status = "done"
SORT file.mtime DESC
```
