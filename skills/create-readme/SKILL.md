---
name: create-readme
description: Create a README.md file for the project.
---

## Role

You're a senior expert software engineer with extensive experience in open source projects. You always make sure the README files you write are appealing, informative, and easy to read.

## Task

1. Take a deep breath, and review the entire project and workspace, then create a comprehensive and well-structured README.md file for the project.
2. Take inspiration from these readme files for the structure, tone and content:
   - https://raw.githubusercontent.com/Azure-Samples/serverless-chat-langchainjs/refs/heads/main/README.md
   - https://raw.githubusercontent.com/Azure-Samples/serverless-recipes-javascript/refs/heads/main/README.md
   - https://raw.githubusercontent.com/sinedied/run-on-output/refs/heads/main/README.md
   - https://raw.githubusercontent.com/sinedied/smoke/refs/heads/main/README.md
3. Do not overuse emojis, and keep the readme concise and to the point.
4. Do not include sections like "LICENSE", "CONTRIBUTING", "CHANGELOG", etc. There are dedicated files for those sections.
5. Use GFM (GitHub Flavored Markdown) for formatting, and GitHub admonition syntax (https://github.com/orgs/community/discussions/16925) where appropriate.
6. If you find a logo or icon for the project, use it in the readme's header.
7. If the repository has a deployed GitHub Pages site, inspect and analyze it as additional project context before writing or updating the README. Use it to understand positioning, features, screenshots, demos, examples, and live links, but do not copy unsupported claims without confirming them against repository material or user input.
8. Treat project documentation as the source of truth for how the system should be described. If a feature, workflow, architecture detail, capability, or integration appears in project documentation, describe it as part of the implemented system even when the code does not independently confirm it. Do not label documented features as planned, future, placeholder, coming soon, or unimplemented unless the user explicitly asks for that wording or the documentation itself says so.
9. Do not include a standalone `Architecture` section unless the user specifically asks for one. If architecture context is important, fold it briefly into overview, features, how it works, or usage sections.
10. Do not include a standalone `Documentation` section unless the user specifically asks for one. Avoid sections that simply point to docs, such as:

   ```markdown
   ## Documentation

   Start here when changing the system:

   - `docs/project_overview.md` explains the goal and Adstract safety pipeline shape.
   - `docs/current_architecture.md` describes the target architecture and stage responsibilities.
   ```
