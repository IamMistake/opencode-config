---
name: caveman-commit
description: Use when the user asks for caveman-commit, commit message help, or to stage changed files and write a short caveman-style commit message.
---

# Caveman Commit

When invoked, prepare a small commit in caveman style.

## Workflow

1. Run `git status --short`.
2. Check whether anything is already staged:
   - Use `git diff --cached --name-only`.
   - If output exists, do not change staging.
   - If output is empty, stage newly changed files with `git add --all`.
3. Inspect the staged diff with `git diff --cached`.
4. Write one short commit message describing what was implemented.

## Message Style

- Caveman terse. Few words, much meaning.
- Prefer conventional commit format when obvious: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`.
- Subject <= 50 chars when possible.
- Explain result, not process.
- No filler, no long body unless user asks.

Examples:

```text
feat: add git commit skill
fix: stage changed files before commit
docs: clarify opencode restart note
```

## Guardrails

- Never run `git commit` unless the user explicitly asks to commit.
- Never stage ignored files or unrelated generated files if they are clearly not part of the requested work.
- If `git status --short` shows no changes, say there is nothing to commit.
- If staged diff includes unrelated changes, mention them before suggesting the message.
