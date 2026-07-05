---
name: github-pages-project-showcase
description: Use when creating or updating a polished static GitHub Pages site that explains a software or research project.
---

# GitHub Pages Project Showcase

Build a polished, responsive, one-page GitHub Pages site that explains a project clearly to reviewers, recruiters, collaborators, or users.

Use the Academic Project Page Template as design inspiration and as an optional starting point:

https://github.com/eliahuhorwitz/Academic-project-page-template/tree/master

The result should feel like a technical academic-project page with product-level polish, similar in spirit to:

https://iammistake.github.io/ai-ad-request-safety-pipeline/

Prefer semantic HTML, CSS, vanilla JavaScript, and SVG. Avoid heavy frameworks unless the repository already uses one or the user requests it.

## 1. Ask only missing questions

Before building, inspect the user's request and repository context. Ask only questions whose answers are still missing.

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

### Contents sidebar

Add a fixed, collapsible **Contents** sidebar on the left side of the page.

It must:

- list and link to every major page section
- highlight the currently visible section
- collapse into a compact button
- remain accessible while scrolling
- use smooth scrolling
- preserve keyboard accessibility
- adapt, collapse, or hide appropriately on smaller screens

Use `IntersectionObserver` or an equivalent lightweight approach for active-section tracking.

The Contents sidebar is the page's primary table of contents.

### Other Works button

Add a separate fixed **Other Works** button in the bottom-right corner.

When clicked, it toggles a compact dropdown or popover containing related projects, products, portfolios, organizations, or author profiles.

Each item should include:

- name
- one-line description
- external link

The component must:

- remain separate from the Contents sidebar
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

For the AI Ad Request Safety Pipeline example, suitable items include:

- GitHub - Nikola's GitHub profile
- Adstract AI - Nikola's AI ad network and the product protected by the pipeline
- `https://adstract.ai`

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

Keep JavaScript limited to useful interactions such as:

- Contents collapse and expansion
- active-section tracking
- smooth navigation
- Other Works popover
- tabs or small explainers
- animation controls
- copy buttons where useful

Do not add a framework for interactions that can be implemented clearly in vanilla JavaScript.

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

The work is complete only when:

- the page clearly explains the project
- all claims come from project documentation, repository material, or user input
- documented system features are presented as implemented
- no unsupported roadmap wording appears
- authors, affiliations, contributions, and links are accurate
- statistics are either verified or omitted
- all major sections appear in the Contents sidebar
- the Contents sidebar collapses and tracks the active section
- the Other Works button is fixed in the bottom-right and opens a real-links-only popover
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
