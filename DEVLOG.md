# Symbiosis Chile development log

Record each meaningful checkpoint with its date, objective, changes, verification, result, remaining work and commit. Keep personal lead data and secret values out of this file.

## 2026-09-22 — Search Console sitemap acceptance

- Objective: record the owner's Search Console submission result.
- Evidence: owner-provided screenshot of the Sitemaps report showing `https://symbiosischile.com/sitemap.xml`, status `Correcto`, submitted and last-read 22 Sep 2026, and 1 discovered page.
- Result: submission succeeded; the discovered count matches the current one-URL sitemap. No further sitemap action is needed now.
- Remaining: coordinate one real inbox receipt test and collect verified business facts before service-page work.
- Commit: pending.

## 2026-09-22 — Contact delivery truth and OKF project foundation

- Objective: prevent false form success and make the Andes-aligned project rules durable in the Symbiosis repository.
- Changes: return an error when Resend is unconfigured, rejects or fails; remove contact payloads/provider responses from logs; validate and bound submitted strings; add project rules, project memory, the Symbiosis Golden Tracking Standard and an owner action guide. Added `www.symbiosischile.com` to the Vercel project after confirming its DNS CNAME already points to Vercel, and prepared a permanent host-based redirect to the apex in Next.js.
- Verification: `npm run lint` passes with one existing warning in unused `AuthorBio.tsx`; `npm run build` passes; `git diff --check` passes. PR #2 Vercel checks passed. Production deployment `dpl_2e4NvxQoJRcLp44hhBoxVDHxVKC9` is Ready. Live checks: apex home, sitemap and robots return 200; `www` sends a permanent 308 to the apex and preserves path/query; malformed contact request returns 400. No real enquiry was sent, so inbox receipt is unverified.
- Result: the contact endpoint no longer reports success unless Resend accepts the message. Production now consistently uses the apex host.
- Remaining: owner submits the sitemap in Search Console; coordinate one controlled enquiry and verify inbox receipt; provide verified business facts before service-page content work.
- Implementation commit: `3edfab9` (merged as `137be9b` via PR #2).
