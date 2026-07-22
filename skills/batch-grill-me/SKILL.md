---
name: batch-grill-me
description: Interview the user relentlessly in batches about a plan or design. Use when the user wants to stress-test a plan with multiple questions at once, or uses phrases such as "batch grill me" or "grill me in batches".
---

Interview the user relentlessly until you reach a shared understanding. Map this as a design tree: every decision branches into the decisions that depend on it.

Work through the tree in rounds. The frontier is every decision whose prerequisites are already settled: the questions you can ask now without guessing at answers you have not heard yet. Ask the whole frontier in one round. Number each question and provide your recommended answer with a short reason. Then wait for the user's answers before continuing.

After each round, recompute the frontier from the user's answers. If one question depends on another question that is still open in the current round, ask it in a later round instead.

If a fact can be found by exploring the environment, find it instead of asking the user. Facts are your responsibility; decisions belong to the user.

The session is complete when the frontier is empty and every branch has been visited. Do not act on the plan until the user confirms you have reached a shared understanding.
