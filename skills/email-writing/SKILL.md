---
name: email-writing
description: >
  Write and strategize emails of all kinds - professional work emails, cold outreach,
  follow-ups, and personal emails. Use this skill whenever the user mentions writing,
  drafting, or sending an email, even if they just say "help me write something to X"
  or "I need to follow up on Y," or provides bullet points to turn into a polished email.
  ALWAYS offer multiple strategic variants (2-3) so the user can choose the tone and
  approach that fits their goals - never output just one version.
---

# Email Writing Skill

Help users write clear, effective emails - from quick professional notes to high-stakes
cold outreach. This skill covers drafting from scratch, translating rough notes into
polished prose, and always presenting multiple strategic variants so the user can
choose the tone and approach that fits their situation.

**Core rule: Always output 2-3 variants. Never give a single email.**

---

## Step 1: Understand the Situation

Before writing, quickly assess what you know. Extract from context:

| Signal | What to infer |
|---|---|
| Recipient (boss, client, stranger, friend) | Formality level |
| Relationship history | How much warmth/directness is appropriate |
| Goal (ask, update, apologize, pitch, follow up) | Which strategies to offer |
| Urgency/stakes | Variant labels and tone range |
| Bullet points or rough notes | Translate before offering variants |

If critical info is missing (e.g., the user hasn't said who they're emailing or why),
ask **one concise question** before proceeding. Don't ask multiple questions at once.

---

## Step 2: Classify the Email Type

Use this to shape the variants you offer:

### A. Professional / Work Emails
Internal or external business communication. Goal is clarity and professionalism.
- Keep it concise; get to the point fast
- Use clear subject lines (action-oriented when needed)
- One clear ask or purpose per email
- **Variants:** e.g., "Formal and brief" / "Warmer, more context" / "Assertive ask"

### B. Cold Outreach
Emailing someone who doesn't know you. Goal is a response, not just to be read.
- Lead with value to the recipient, not your own credentials
- Keep it short (3-5 sentences body max)
- One clear, low-friction CTA (call to action)
- Avoid generic openers ("Hope this finds you well")
- **Variants:** e.g., "Value-first, soft ask" / "Bold and direct" / "Mutual connection angle"

### C. Follow-Up Emails
Checking in after no response, or after a meeting/event.
- Reference the prior touchpoint concisely
- Don't guilt-trip or over-apologize for following up
- Restate the ask or next step clearly
- **Variants:** e.g., "Gentle nudge" / "Create urgency" / "Pivot the conversation"

### D. High-Stakes / Difficult Emails
Sensitive situations: delivering bad news, pushing back, negotiating, apologizing,
declining, or making an important ask.
- Each variant should reflect a meaningfully different strategy, not just a tone change
- Label each by what it prioritizes (e.g., "Hold firm" vs. "Seek compromise")
- **Variants:** e.g., "Apologetic" / "Accountable but firm" / "Redirect focus forward"

### E. Personal Emails
To friends, family, or informal acquaintances.
- Match the user's natural voice if possible
- Warmth > formality
- **Variants:** e.g., "Casual and warm" / "Heartfelt" / "Light and brief"

---

## Step 3: Always Output Multiple Variants

Every response must include **2-3 variants**. Structure each response like this:

1. **1-2 sentence situation framing** - what you understood the goal to be
2. **2-3 variants**, each with:
   - A short goal-oriented label (e.g., "Warm and indirect", "Direct and confident")
   - One line on what this approach prioritizes vs. trades off
   - The full email: subject line + body + sign-off

Use the `message_compose_v1` tool when available - it renders a polished email UI
with copy/send buttons. Pass all variants in a single call as separate entries in
the `variants` array. This is the preferred output format.

---

## Step 4: Translating Notes to Variants

When the user gives bullet points or rough thoughts:
1. Infer the email type and recipient from context
2. Organize the content into a logical flow (opening, core, CTA)
3. Produce 2-3 variants from the same notes, varying tone and framing
4. Write in a natural voice - don't just restate the bullets as sentences

---

## Quality Checklist (apply to every variant before finishing)

- [ ] Subject line is specific and purposeful
- [ ] Opening line doesn't waste time (cut "Hope you're well" unless it fits naturally)
- [ ] There is exactly one clear ask or purpose
- [ ] Length matches stakes - short for simple, longer only if needed
- [ ] Sign-off matches formality level
- [ ] No filler phrases ("just wanted to reach out", "circle back", "per my last email")
- [ ] 2-3 variants are present - never just one

---

## Tone Reference

| Situation | Tone range across variants |
|---|---|
| Internal team note | Casual-professional to direct |
| Client or external partner | Warm-professional to confident |
| Cold outreach | Value-first to bold and brief |
| Negotiation or pushback | Measured to firm |
| Apology | Accountable to forward-looking |
| Declining | Kind to definitive |
| Personal | Warm to heartfelt |

---

## Tools

- **`message_compose_v1`** - Use this to render email drafts with a polished UI,
  subject line, and copy/send buttons. Use it for every email output when available.
  Pass all variants in a single call via the `variants` array.

---

## Example Patterns

**User says:** "Write an email to my boss asking for a raise"
-> High-stakes. 2 variants: "Build the case first" / "Direct ask with a number."

**User says:** "Help me follow up on a proposal I sent last week"
-> Follow-up. 2-3 variants: "Gentle nudge" / "Create urgency" / "Offer a new angle."

**User says:** "Email to a potential client I met at a conference"
-> Warm cold outreach. 2 variants: "Personalized and soft" / "Confident pitch."

**User pastes bullet points:** "broken heater, 2 weeks, want it fixed, might call city"
-> Translate notes. 2 variants: "Professional and firm" / "Urgent escalation tone."

**User says:** "Write a follow-up to a job interview"
-> 3 variants: "Grateful and brief" / "Reinforce a key point" / "Express enthusiasm + next step."
