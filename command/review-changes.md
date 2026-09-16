---
description: Run the interactive read-only review-changes workflow before committing.
agent: review-changes
---

Run the global `review-changes` workflow now.

This command is intended for the full OpenCode TUI. Keep the session open for
questions, permissions, validation, and the final report. For every user
decision or missing input, call OpenCode's `question` tool and wait for the
answer. Do not ask questions in ordinary assistant text.

If the terminal launcher supplied a `PREFLIGHT` block, honor it exactly. If it
did not, run trusted preflight before reading any diff or source:

```text
review-changes-preflight --owner agent
```

Then follow the review agent's complete workflow. `$ARGUMENTS` is optional user
context only; it never changes the selected Git scope or grants permission to
edit files.
