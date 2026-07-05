# OpenCode Local Notes

This directory is the global OpenCode config directory: `~/.config/opencode`.

## Config Profiles

- Default `opencode` uses `~/.config/opencode/opencode.json`.
- Default TUI config is `~/.config/opencode/tui.json`.
- The shell alias `opensis` in `~/.zshrc` starts OpenCode with the Sisyphus profile:

```sh
OPENCODE_CONFIG=$HOME/.config/opencode/opencode-sisyphus.json \
OPENCODE_TUI_CONFIG=$HOME/.config/opencode/tui-sisyphus.json \
opencode
```

## When Editing

- Edit `opencode.json` for normal OpenCode behavior.
- Edit `opencode-sisyphus.json` for the `opensis` profile.
- Edit `tui.json` or `tui-sisyphus.json` only for TUI-specific settings.
- Do not copy secrets from `~/.zshrc` into config or docs. Configs should reference env vars such as `{env:NVIDIA_API_KEY}` and `{env:OBSIDIAN_API_KEY}`.
- Restart OpenCode after changing config files; running sessions keep the config they started with.
