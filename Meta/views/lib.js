// Shared helpers for Compass widgets. Loaded by other views with dv.view? No: Dataview
// views cannot import each other, so each view re-declares what it needs. This file
// documents the conventions and is kept for reference only.
//
// Conventions:
//   - Daily notes are named YYYY-MM-DD and live in cfg.daily_folder.
//   - Daily questions are number properties named <dq_prefix><name>  (1..10).
//   - The highlight of the day is the text property highlight_of_the_day.
//   - Wheel of life areas are number properties named <wheel_prefix><name> (1..10)
//     inside the note "<retreat_folder>/YYYY-QN Personal Retreat".
//   - moment() is available globally inside Obsidian.
