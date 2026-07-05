# OpenCode Config

Personal OpenCode configuration and agent setup.

## Profiles

- `opencode` uses `opencode.json` and `tui.json`.
- `opensis` uses `opencode-sisyphus.json` and `tui-sisyphus.json`.

The `opensis` shell alias is defined outside this repo in `~/.zshrc`:

```sh
OPENCODE_CONFIG=$HOME/.config/opencode/opencode-sisyphus.json \
OPENCODE_TUI_CONFIG=$HOME/.config/opencode/tui-sisyphus.json \
opencode
```

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
