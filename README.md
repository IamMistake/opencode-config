# OpenCode Config

Personal OpenCode configuration and agent setup.

## Profiles

- `opencode` uses `opencode.json` and `tui.json`.

## Secrets

Do not commit real API keys, passwords, tokens, or local `.env` files.

Configs should reference environment variables instead:

```json
"apiKey": "{env:NVIDIA_API_KEY}"
```

Required environment variables for the current configs:

- `NVIDIA_API_KEY`
- `OBSIDIAN_API_KEY`

## Notes For Agents

See `AGENTS.md` for local editing guidance.

## Submodules

Some external skills are kept as git submodules:

- `skills/excalidraw-diagram`
- `skills/obsidian-skills`

After cloning this repo, initialize them with:

```sh
git submodule update --init --recursive
```
