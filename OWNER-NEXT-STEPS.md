# Symbiosis Chile — owner steps after the SEO release

The first technical SEO release is live. The next code checkpoint is preparing a permanent `www` to apex redirect and making the contact endpoint report provider failures truthfully. Do not submit an enquiry until that contact update is deployed.

## What is already handled

- The production sitemap, `robots.txt`, canonical and organization metadata were updated.
- Public DNS for `www.symbiosischile.com` already points to Vercel (`CNAME cname.vercel-dns.com`). I added `www.symbiosischile.com` to the existing Vercel project; HTTPS now works. A redirect to the apex is being prepared so both hostnames do not serve duplicate pages.
- Public authoritative nameservers are `ns-cloud-a1.googledomains.com` through `ns-cloud-a4.googledomains.com`. If a DNS change becomes necessary later, the actual DNS records must be changed in the account/project managing that Google Cloud DNS zone. The domain registrar account may be managed through Squarespace if it was migrated from Google Domains. Do not change nameservers or mail records for the current fix.
- The current contact API can incorrectly display success when Resend is unconfigured or rejects a message. A code correction is in preparation; provider acceptance still will not prove that the message reached the inbox.

## Step 1 — submit the sitemap in Search Console

1. Open [Google Search Console](https://search.google.com/search-console) and choose the existing `symbiosischile.com` Domain property.
2. Open **Sitemaps** from the left menu.
3. In **Add a new sitemap**, enter `https://symbiosischile.com/sitemap.xml` and select **Submit**.
4. If Search Console shows that the property is missing or you do not have access, stop there and tell the project owner which message it shows. Do not create a duplicate property.
5. Send back either “submitted” or “no access,” plus any error message. No export or screenshot is needed unless the page reports an error.

## Step 2 — coordinate one real enquiry test after the next deployment

Wait until the agent confirms the contact reliability update is deployed. Then:

1. Arrange a short test window with the person who watches `monserrat.tome@symbiosischile.com` (and the second configured recipient if that mailbox is still intended).
2. Use an email address you control. Enter a name such as `QA PRUEBA — Symbiosis` and include `PRUEBA SEO [date/time]` in the challenge field.
3. Submit once on `https://symbiosischile.com/`. Record the local date/time and whether the page showed success or an error.
4. Check Inbox and Spam. Confirm whether exactly one message arrived, when it arrived, and which recipient received it. Do not paste the test email address or message contents into this task.
5. If no email arrives, report “not received” and the approximate time. Do not submit repeated tests; the agent will inspect the provider status first.

The agent can verify endpoint responses and event behavior. Only you or the mailbox monitor can confirm inbox receipt. Do not send a customer enquiry as a test.

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
