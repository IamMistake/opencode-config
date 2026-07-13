---
name: github-pages-project-showcase
description: Use when creating, updating, or polishing a static GitHub Pages project showcase for a software, AI, research, academic, portfolio, or open-source project. Use this whenever the user wants a project page, repo website, demo page, portfolio-style project writeup, or GitHub Pages deployment, even if they do not explicitly say "showcase."
---

# GitHub Pages Project Showcase

Build a polished, responsive, one-page GitHub Pages site that explains a project clearly to reviewers, recruiters, collaborators, or users.

The result should feel like a technical academic-project page with product-level polish, similar in spirit to:

https://iammistake.github.io/graphrag-pipeline/

Prefer semantic HTML, CSS, vanilla JavaScript, and SVG. Avoid heavy frameworks unless the repository already uses one or the user requests it.

## Template

A reusable template is available at `@template/`. It provides a clean starting point with:

- `index.html` — full page structure with placeholder content marking every section that needs project-specific text
- `style.css` — complete stylesheet with CSS variables for easy color/theming changes
- `script.js` — TOC toggle, IntersectionObserver active-section tracking, Other Works dropdown, fade-in animations
- `.nojekyll` — required for plain static GitHub Pages deployment

**How to use the template:**

Do not modify the bundled `@template/` files directly. Copy them into the target project, then adapt the copied files.

1. Copy all files from `@template/` into the project's working directory.
2. Replace placeholder content in `index.html` with project-specific text, links, author info, and sections. Every section is pre-structured with generic placeholder text — just overwrite the obvious placeholder content.
3. Adjust CSS variables in `style.css` (`:root` block) to match the project's visual identity.
4. Add or remove sections as needed (the template includes Overview, Architecture, Pipeline, Results, Setup, Usage).
5. Replace the architecture SVG diagram with a project-specific diagram.
6. Update the TOC links in `index.html` to match the actual sections.
7. Update the Other Works dropdown links with real related projects/profiles.
8. Team info goes in the hero metadata row (authors, affiliations, contribution badges) — no separate Team section.

The template is derived from the **GraphRAG Pipeline** project page (`graphrag-pipeline`). It includes:

- Single-column centered hero with gradient title, eyebrow badge, author rows, and CTA buttons
- Metrics strip with gradient-number stat cards below the hero
- Overview section with TL;DR abstract box and three-column capability pillars
- Architecture section with SVG diagram placeholder
- Pipeline section with two-column flow step cards (colored step numbers)
- Results section with comparison tables
- Setup section with quick-start cards and code blocks (highlight.js)
- Usage section with CLI command cards
- Footer with repo link and institution
- Floating TOC pill (top-left) with glass effect, gradient left border, collapsible links with `is-active` gradient state
- Other Works floating button (bottom-right) with dark gradient, dropdown with close button and work items
- Fade-in scroll animations via IntersectionObserver
- Font Awesome icons throughout
- Responsive layout (desktop → tablet → mobile)
- `prefers-reduced-motion` support

Use the Academic Project Page Template as additional design inspiration:

https://github.com/eliahuhorwitz/Academic-project-page-template/tree/master

## 1. Ask only missing questions

Before building, inspect the user's request and repository context. Ask only questions whose answers are still missing.

As you inspect the available sources, make a private content inventory:

- confirmed project title
- one-sentence summary
- actual features and capabilities
- architecture, method, pipeline, or data flow
- supported setup and usage commands
- verified examples, results, metrics, or comparisons
- real author, organization, repository, demo, and profile links
- unknowns that require a user answer

Use this inventory to avoid both over-asking and unsupported claims. If the repository already answers a question, do not ask it again.

Ask:

1. What is the public project title and one-sentence summary?
2. Who are the authors?
3. What did each author contribute?
4. Should the authors be marked as equal contributors? Recommend equal contribution when it accurately reflects the work.
5. Which author affiliations and links should appear, such as GitHub, email, personal site, or university?
6. Should the overview contain statistics at all?
7. If yes, which verified statistics should appear?
8. Are there branding, color, layout, or visual references to follow?
9. Should the work remain local, or should it also be committed, pushed, and deployed?
10. If deployment is requested, should the GitHub repository description and website link be updated too?

Do not repeat questions the user has already answered.

## 2. Research the project

Read the repository before writing the page.

Inspect the most relevant available sources, such as:

- `README.md`
- `AGENTS.md`
- project documentation
- architecture notes
- implementation notes
- runnable service files
- configuration files
- tests
- scripts
- screenshots, diagrams, demos, and assets

Extract:

- the project goal
- the problem it solves
- architecture and data flow
- major components
- technology stack
- setup and usage commands
- examples, results, and statistics
- author and organization details
- related products or projects

Use project documentation as the source of truth for how the system should be presented. If a feature appears in the project documentation, describe it as part of the implemented system even when the code does not independently confirm it.

Never use words such as **planned**, **future**, **placeholder**, **coming soon**, or similar roadmap language unless the user explicitly asks for them.

Do not invent features, statistics, authors, links, commands, benchmarks, or results. Omit unsupported material instead.

## 3. Plan the page

Choose sections based on the project rather than forcing every project into one template.

A typical structure is:

1. Hero
2. Overview or abstract
3. Main visual, demo, or system preview
4. Architecture or method
5. Core components or capabilities
6. Results, examples, or evaluation
7. Setup, usage, or quick start
8. Footer

Optional sections may include:

- motivation
- dataset
- model or algorithm
- workflow
- comparison
- limitations
- acknowledgements
- team contributions

Do not add a citation or BibTeX section.

Statistics are optional. Only include them when the user requests them and they are grounded in repository material or user-provided data.

Adapt the same template to the project type:

- For libraries, emphasize installation, API examples, compatibility, and a small working example.
- For research projects, emphasize abstract, method, architecture, evaluation, and reproducibility.
- For apps or products, emphasize user workflow, screenshots or demo, features, and setup.
- For infrastructure, developer tools, or CLIs, emphasize architecture, commands, integrations, and operational model.

If a metric, benchmark, dataset result, or comparison is not verified, remove the metric card or convert it into a qualitative capability card. Do not keep fake-looking numbers just because the template includes stat slots.

## 4. Design direction

Use a bright, technical, academic-project aesthetic rather than a generic SaaS landing page.

Prefer:

- clear visual hierarchy
- strong project title and one-sentence summary
- visible author and affiliation information
- restrained gradients and glows
- subtle grid or technical background texture
- dimensional cards with soft shadows
- project-specific diagrams and visuals
- readable technical typography
- responsive desktop, tablet, and mobile layouts
- visible focus styles
- reduced-motion support

Avoid:

- generic purple-blue AI styling everywhere
- emoji as interface icons
- excessive animation
- fake scientific-looking metrics
- decorative visuals that do not explain the project
- long walls of text
- heavy dependencies for simple interactions

The hero visual should explain the system, workflow, model, or project concept instead of acting as decoration.

## 5. Persistent navigation UI

### Contents TOC pill

Add a fixed, collapsible **Contents** pill in the top-left corner of the page.

It must:

- list and link to every major page section
- highlight the currently visible section with a gradient `is-active` state
- collapse into a compact button showing only the badge + title + chevron
- remain accessible while scrolling
- use smooth scrolling
- preserve keyboard accessibility
- adapt, collapse, or hide appropriately on smaller screens
- use a glass-effect card with a gradient left border

Use `IntersectionObserver` or an equivalent lightweight approach for active-section tracking.

The Contents pill is the page's primary table of contents.

### Other Works button

Add a separate fixed **Other Works** button in the bottom-right corner with a dark gradient background.

When clicked, it toggles a compact dropdown containing related projects, products, portfolios, organizations, or author profiles. The dropdown should have a close button in its header.

Each item should include:

- name
- one-line description
- external link

The component must:

- remain separate from the Contents pill
- stay fixed in the bottom-right corner
- open and close on click
- close when clicking outside
- close when pressing Escape
- support keyboard navigation
- avoid covering important content on small screens
- use only real links provided by the user or found in the repository
- never invent projects or URLs

Examples of suitable items:

- the author's GitHub profile
- a personal portfolio
- a related project page
- the broader product or organization behind the project

For the GraphRAG Pipeline example, suitable items include:

- AI Ad Request Safety Pipeline — related project
- GitHub — Nikola's GitHub profile

Other Works is persistent secondary navigation, not a page section and not part of the Contents list.

## 6. Visuals and animation

Prefer diagrams, compact visuals, and interactive explanations over paragraphs when they communicate the concept more clearly.

Use SVG, CSS, Canvas, or lightweight JavaScript where appropriate.

When the project benefits from an animated grid, node network, agent flow, pipeline animation, or moving system diagram, use this implementation as a structural reference:

https://github.com/RecursiveMAS/recursivemas.github.io/blob/main/static/animations/recursivemas_animation.html

Adapt the animation to the project's own architecture and visual language. Do not copy unrelated labels, entities, colors, or behaviour blindly.

Animations must:

- explain the project
- remain readable without motion
- respect `prefers-reduced-motion`
- avoid blocking interaction
- avoid excessive CPU use
- degrade cleanly on mobile

## 7. Implementation rules

Use semantic landmarks:

- `<nav>`
- `<main>`
- `<section>`
- `<figure>`
- `<footer>`

Use:

- relative paths for local assets
- CSS variables for design tokens
- CSS Grid and Flexbox
- responsive breakpoints
- visible hover, focus, and active states
- Open Graph and basic SEO metadata
- the correct canonical GitHub Pages URL
- the correct repository and author links
- `.nojekyll` for a plain static GitHub Pages deployment
- Font Awesome CDN (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`) for icons
- highlight.js CDN (`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js`) for code block syntax highlighting

After adapting the copied template, search generated files for leftover placeholder text such as `Project Title`, `Project Subtitle`, `Author One`, `Author Two`, `repo-name`, `username`, `Capability One`, `Stat One`, `N`, and generic bracketed prose. Replace it, remove it, or ask the user for the missing value rather than shipping placeholders.

Keep JavaScript limited to useful interactions such as:

- Contents collapse and expansion
- active-section tracking
- smooth navigation
- Other Works popover
- tabs or small explainers
- animation controls
- copy buttons where useful

Do not add a framework for interactions that can be implemented clearly in vanilla JavaScript.

Ensure copied and adapted interactive controls have accurate labels, keyboard behavior, visible focus states, and correct expanded or collapsed state where practical.

A separate `DESIGN.md` is optional. Create one only when the project has a substantial custom design system that benefits from documentation.

## 8. SVG safety

Standalone SVG files are parsed as XML.

Do not use HTML-only named entities such as:

```xml
&middot; &rarr; &ndash; &ge; &le; &mdash;
```

Use literal Unicode characters or numeric XML-safe entities instead.

Validate all generated SVG files before completion.

## 9. Deployment

Use the repository's existing GitHub Pages setup when present.

When creating a dedicated static branch, use `gh-pages` unless the user specifies another approach.

Do not rename repositories, alter remotes, push, or change GitHub Pages settings unless the user explicitly requests it.

When deployment or repository polishing is requested, check the GitHub repository metadata. If the repository description is missing, vague, or outdated, update it to a concise, accurate project description. Add the live GitHub Pages URL as the repository website link if it is not already set correctly. Use `gh repo edit` or the existing repository tooling when available, and do not overwrite a correct existing description or website link unnecessarily.

When deployment is requested:

1. build or update the page
2. verify local paths and links
3. commit the changes
4. push to the correct branch
5. verify the live page and static assets return successfully
6. update the GitHub repository description and website link when needed and authorized
7. report the final Pages URL and repository URL

## 10. Completion criteria

Before the final response, verify the static page locally when feasible, or inspect the generated files directly when a local server/browser is not available.

Check that:

- `index.html`, `style.css`, `script.js`, and `.nojekyll` exist in the page output
- all Contents TOC links point to existing section IDs
- all external links are real and intentional
- no template placeholder text remains
- local assets use relative paths and resolve
- responsive behavior is covered by the CSS and works on narrow screens when inspectable
- interactive controls have keyboard-accessible behavior and visible focus states
- unsupported metric cards, fake results, and generic filler text were removed

The work is complete only when:

- the page clearly explains the project
- all claims come from project documentation, repository material, or user input
- documented system features are presented as implemented
- no unsupported roadmap wording appears
- authors, affiliations, contributions, and links are accurate
- statistics are either verified or omitted
- all major sections appear in the Contents TOC pill
- the Contents TOC pill collapses and tracks the active section with `is-active` gradient state
- the Other Works button is fixed in the bottom-right and opens a real-links-only dropdown
- Other Works does not appear as a main page section
- the layout works on desktop and mobile
- keyboard navigation and visible focus states work
- motion respects reduced-motion preferences
- local links and assets resolve
- the GitHub repository description is accurate when repository metadata updates were requested
- the GitHub repository website link points to the live GitHub Pages URL when deployment was requested and metadata updates were authorized
- no citation or BibTeX section exists
- deployment is verified when deployment was requested

## Final response

Report only what is useful:

- what was created or changed
- the main sections and interactions
- Pages URL, when deployed
- repository URL
- GitHub repository description and website-link status, when checked or updated
- verification status
- any unresolved issue that could not be completed
