---
quarter: <% tp.file.title %>
retreat: "[[02 Retreats/<% tp.file.title %> Personal Retreat]]"
focus_area: 
tags:
  - quarterly
---
« [[01 Journal/Quarterly/<% moment(tp.file.title, "YYYY-[Q]Q").subtract(1, "quarter").format("YYYY-[Q]Q") %>|Last quarter]] · [[Compass Dashboard]] · [[01 Journal/Quarterly/<% moment(tp.file.title, "YYYY-[Q]Q").add(1, "quarter").format("YYYY-[Q]Q") %>|Next quarter]] »

<% moment(tp.file.title, "YYYY-[Q]Q").startOf("quarter").format("MMM D") %> to <% moment(tp.file.title, "YYYY-[Q]Q").endOf("quarter").format("MMM D, YYYY") %> · Retreat: [[02 Retreats/<% tp.file.title %> Personal Retreat]]

> [!theme]- Life theme and core values
> ![[Life Theme#Theme]]
> ![[Core Values#Values]]

```agent
type: button
text: "Prepare my retreat"
prompt: "Read Prompts/04 Retreat Prep.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

## Quarterly intentions
Set during the personal retreat. Copy them here (or embed the retreat section) so the weekly notes can pull them in.
![[<% tp.file.title %> Personal Retreat#5. Intentions for next quarter]]

## Focus dimension (from the wheel of life)
The one dimension the retreat picked. Put its key in the `focus_area` property too.
- 

## Life dimensions this quarter
One line each: what "good enough" looks like this quarter.
- Business: 
- Family: 
- Growth: 
- Health: 

## Projects this quarter
Grouped by the project's `area` (business, family, growth, health).
```dataview
TABLE WITHOUT ID file.link AS Project, status, due
FROM "04 Projects"
WHERE quarter = "<% tp.file.title %>" AND status != "done"
GROUP BY area
SORT due ASC
```

## Weeks
```dataview
LIST
FROM "01 Journal/Weekly"
WHERE quarter = "<% tp.file.title %>"
SORT file.name ASC
```

## Daily questions this quarter
```dataviewjs
await dv.view("Meta/views/dailyquestions", { from: "<% moment(tp.file.title, "YYYY-[Q]Q").startOf("quarter").format("YYYY-MM-DD") %>", to: "<% moment(tp.file.title, "YYYY-[Q]Q").endOf("quarter").format("YYYY-MM-DD") %>" });
```

## End of quarter notes
Carry these into the next personal retreat's retrospective.
- 
