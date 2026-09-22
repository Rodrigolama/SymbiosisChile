# Symbiosis Chile — repository rules

These instructions apply to all work in this repository.

## Verified project context

- Production is `https://symbiosischile.com/`, served by the Vercel project `symbiosis-chile`.
- The Vercel production branch is `main`. Confirm the current deployment before attributing a live behavior to a local commit.
- The active production app is a server-rendered Next.js deployment. It uses `/api/contact` and Vercel environment variables.
- `migracion-siteground` is a preserved static/PHP alternative. Do not merge or deploy it as routine production work.
- The canonical hostname is the HTTPS apex. The `www` certificate/DNS issue remains an owner/provider action until independently verified as repaired.
- The central OKF project record and SEO assessment are under `/Users/rodrigolama/dev/knowledge/projects/`; project-local decisions and development checkpoints belong in this repository too.

## Factual content and privacy

- Do not invent service scope, credentials, client relationships, results, compliance guarantees, response-time commitments or scientific methods. Mark unverified claims for the scientific/business owner.
- Do not send names, email addresses, telephone numbers, enquiry text or other direct identifiers to GA4, Google Ads, GTM custom event parameters or other general analytics events.
- Never log a contact payload or provider response that may contain personal information. Log only non-sensitive status and error class/code.
- A contact request is successful only after the configured delivery provider accepts it. Never show success when mail delivery is unconfigured, times out or is rejected.
- Do not submit real test enquiries without coordinating with the owner and the mailbox monitor.

## Git and checkpoints

- Start implementation from the current `main` and use a named feature branch.
- Preserve the SiteGround branch and unrelated work. Never force-push, rewrite history, or discard user changes.
- Keep each checkpoint focused and make a Conventional Commit after reviewing its diff and the proportional validation available.
- Update `DEVLOG.md` in the same checkpoint with date, objective, changes, checks, result and remaining work.
- Push only a feature branch for preview/review. Production changes go through the established Vercel Git workflow and an approved release.

## SEO, accessibility and measurement

- Keep sitemap entries limited to canonical, indexable URLs that return 200. Never include fragment-only locations or planned/fictitious pages.
- Canonical, internal links, sitemap and structured data must agree on `https://symbiosischile.com/`.
- Maintain accessible names, keyboard operation and visible feedback for all contact form steps.
- Follow `.agents/memory/golden-tracking-standard.md` for the event roles and PII rules. The GA4/GTM/Ads account configuration and IDs still require owner-side confirmation.
- Record production evidence separately from local or preview checks. A passing local endpoint response does not prove that a real email reached an inbox.
