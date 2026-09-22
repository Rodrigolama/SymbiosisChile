# Symbiosis Chile — owner steps after the SEO release

The first technical SEO release is live. The contact-delivery correction and permanent `www` to apex redirect are deployed. The sitemap and robots file are live; a real inbox receipt test is still needed to verify the full mail path.

## What is already handled

- The production sitemap, `robots.txt`, canonical and organization metadata were updated.
- Public DNS for `www.symbiosischile.com` already points to Vercel (`CNAME cname.vercel-dns.com`). I added `www.symbiosischile.com` to the existing Vercel project. Production now redirects `www` permanently to the canonical apex, preserving paths and query parameters.
- Public authoritative nameservers are `ns-cloud-a1.googledomains.com` through `ns-cloud-a4.googledomains.com`. If a DNS change becomes necessary later, the actual DNS records must be changed in the account/project managing that Google Cloud DNS zone. The domain registrar account may be managed through Squarespace if it was migrated from Google Domains. Do not change nameservers or mail records for the current fix.
- The contact API now reports success only after Resend accepts the message. Provider acceptance still will not prove that the message reached the inbox, so one coordinated inbox test remains.

## Step 1 — submit the sitemap in Search Console — complete

The owner submitted `https://symbiosischile.com/sitemap.xml`. Search Console showed **Correcto**, a last-read date of 22 Sep 2026, and one discovered page. That matches the current sitemap, which contains the homepage. No further sitemap action is needed now; Google may take time to crawl and decide whether to index the page.

## Step 2 — coordinate one real enquiry test

1. Arrange a short test window with the person who watches `monserrat.tome@symbiosischile.com` (and the second configured recipient if that mailbox is still intended).
2. Use an email address you control. Enter a name such as `QA PRUEBA — Symbiosis` and include `PRUEBA SEO [date/time]` in the challenge field.
3. Submit once on `https://symbiosischile.com/`. Record the local date/time and whether the page showed success or an error.
4. Check Inbox and Spam. Confirm whether exactly one message arrived, when it arrived, and which recipient received it. Do not paste the test email address or message contents into this task.
5. If no email arrives, report “not received” and the approximate time. Do not submit repeated tests; the agent will inspect the provider status first.

The agent verified malformed payload rejection in production. Only you or the mailbox monitor can confirm successful inbox receipt. Do not send a customer enquiry as a test.

## Step 3 — confirm the business facts before service-page work

When convenient, reply with this short brief. Write “unknown” for anything you cannot confirm; unverified details will stay unpublished.

```text
Content approver:
Most important service to sell:
Second-priority service:
Types of projects and buyers we want:
Regions served / travel limits:
What a baseline study actually includes:
Methods and deliverables we can claim:
What the mycorrhiza service actually includes:
Verified qualifications to publish:
Client names/logos/case studies approved for publication:
Realistic response-time commitment, if any:
```

## Changes to avoid

- Do not change domain nameservers or edit MX, SPF, DKIM or DMARC records.
- Do not click **Redeploy**, change the production branch, or reconnect Git.
- Do not submit multiple contact tests or use real customer information.

Vercel domain setup and redirect behavior are documented in [Vercel's custom-domain guide](https://vercel.com/docs/domains/working-with-domains/add-a-domain) and [domain redirect guide](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting). The DNS nameservers establish the authoritative service for DNS records; [Squarespace explains the Google Domains migration](https://support.squarespace.com/hc/en-us/articles/17131164996365-About-the-Google-Domains-migration-to-Squarespace).
