import { Plugin } from "@opencode/plugin/tui"

declare const Bun: {
  spawn(
    command: readonly string[],
    options: { stdout: "ignore"; stderr: "ignore" },
  ): { unref(): void }
}

export default Plugin.define({
  id: "local.linux-notifier",
  setup(ctx) {
    // OpenCode normally starts in the active terminal. Defaulting to focused
    // avoids a startup notification before the renderer emits its first event.
    let focused = true
    const seen = new Set<string>()

    const onFocus = () => {
      focused = true
    }
    const onBlur = () => {
      focused = false
    }

    ctx.renderer.on("focus", onFocus)
    ctx.renderer.on("blur", onBlur)

    const notify = (sessionID: string, message: string, urgency = "normal") => {
      if (focused) return

      const route = ctx.ui.router.current()
      if (route.type !== "session" || route.sessionID !== sessionID) return

      const session = ctx.data.session.get(sessionID)
      const title = session?.title?.trim() || "OpenCode"

      try {
        Bun.spawn(
          [
            "notify-send",
            "--app-name=OpenCode",
            `--urgency=${urgency}`,
            "--expire-time=8000",
            title,
            message,
          ],
          { stdout: "ignore", stderr: "ignore" },
        ).unref()
      } catch {
        // Notifications are optional; never disrupt the TUI if notify-send fails.
      }
    }

    const notifyOnce = (
      id: string,
      sessionID: string,
      message: string,
      urgency = "normal",
    ) => {
      if (seen.has(id)) return
      seen.add(id)
      if (seen.size > 100) seen.delete(seen.values().next().value!)
      notify(sessionID, message, urgency)
    }

    const stopPermissionAsked = ctx.data.on("permission.asked", (event) => {
      const detail = event.data.message?.trim() || event.data.action
      notifyOnce(
        `permission:${event.data.id}`,
        event.data.sessionID,
        `Permission required: ${detail}`,
        "critical",
      )
    })

    const stopFormCreated = ctx.data.on("form.created", (event) => {
      notifyOnce(
        `form:${event.data.form.id}`,
        event.data.form.sessionID,
        `Input required: ${event.data.form.title}`,
        "critical",
      )
    })

    const stopSucceeded = ctx.data.on("session.execution.succeeded", (event) => {
      notify(event.data.sessionID, "Response completed")
    })

    const stopFailed = ctx.data.on("session.execution.failed", (event) => {
      notify(event.data.sessionID, "Response failed", "critical")
    })

    return () => {
      stopPermissionAsked()
      stopFormCreated()
      stopSucceeded()
      stopFailed()
      ctx.renderer.off("focus", onFocus)
      ctx.renderer.off("blur", onBlur)
    }
  },
})
