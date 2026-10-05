# Life OS data definitions

These definitions describe the intended application contract. The implementation and its synthetic tests must agree before a release is accepted.

## Canonical sources

Markdown notes and their properties are canonical. Life OS does not maintain a second task or journal database. Existing Compass Config folder and property settings must be resolved consistently across Today, Plan, Review, and Home. A missing configuration is unavailable data, not a zero score or a new set of invented questions.

## Effort and check-in coverage

- An effort score is a finite numeric property from 1 through 10. Booleans, numeric strings, out-of-range numbers, and missing properties are not scores.
- Daily effort is the arithmetic mean of valid recorded question scores for that day. A date-window average is the mean of the scored daily means; it is not a pooled average of every answer.
- Unscored days are absent from the average. Show the scored-day count alongside it.
- Question changes can change what an average means. Do not present comparisons across different question sets as equivalent measurements.
- Check-in coverage counts valid recorded answers. It is not a grade of a person's life.

## Highlight of the day

| Stored value | Meaning |
| --- | --- |
| Non-empty text in `highlight_of_the_day` | Set; shown as written |
| Missing, blank, or whitespace only | Not set |
| Any other type | Not set |

The highlight is shown, never scored. It does not count toward check-in coverage, and a day without one is not a failure. `dimension` is an optional label (business, family, growth, health) shown next to it. Habit tracking (`habit_*`) is not part of the contract; old `habit_*` properties are ignored.

## Project health

A project (a note in the configured projects folder with `type: project` and a status other than `done`) has a next action when it has at least one open task: an unchecked task in the project note, or an open task tagged `#project/<slug>` or a sub-tag anywhere outside `wiki/`. Each task counts once. A project with none is flagged 🔴. The flag is a prompt, not a judgment.

## Tasks

The commitment feed is a read-only index of task list items in its disclosed source folders. Markdown examples inside fenced code blocks are not commitments. Operational feeds exclude example-tagged files. Unknown status symbols and unavailable metadata must be disclosed rather than guessed.

Due dates, scheduled dates, and priority are separate fields. Sorting must be deterministic. Opening a task should navigate to its source line; it must not mutate the task or its recurrence. Tasks remains the editor for task-specific behavior.

## Samples and partial data

Sample inclusion in analytics is explicit. It does not make demonstration tasks real commitments. Brain may display clearly identified sample nodes as an exploration aid; its counts are not personal achievement metrics.

Every source error must preserve the distinction between ready, partial, and unavailable. A partial result with no indexed tasks must not be labeled as proof that no tasks exist.

## Life areas and graph

Life-area bars use valid numeric scores from the latest scored retreat in the configured retreat folder. They are self-reported reflection, not clinical or objective measurements.

Brain positions and anatomical lines are decorative. Only resolved vault links form graph edges. Graph counts reflect the view's exclusions and caps, not the entire native Obsidian graph. The graph is not a productivity score.

## Evidence

Synthetic tests validate logic with invented fixtures outside personal notes. Browser screenshots from those tests are labeled synthetic. They do not prove native Obsidian compatibility, successful AI authentication, backup recovery, or publication readiness.
