---
name: Golden tracking standard — Symbiosis Chile
description: Minimum GA4 and Google Ads measurement rules for Symbiosis lead generation
---

# Golden tracking standard — Symbiosis Chile

**Version:** 1.0, adapted 2026-09-22 from the Andes Learning OKF standard.

## Outcome and event roles

| Outcome | Event | Intended Ads role | When it fires |
| --- | --- | --- | --- |
| Contact form successfully accepted by Resend | `generate_lead` | Primary lead conversion, subject to account confirmation | Once, after the backend returns success |
| WhatsApp link opened | `whatsapp_click` | Secondary intent signal | On the visitor's click, before navigation |

- Do not fire a lead event for validation failures, provider rejection, missing configuration, timeouts, retries that did not succeed or simply opening the form.
- Keep WhatsApp clicks distinct from delivered enquiries and qualified leads.
- The actual Google Ads primary/secondary settings are unverified. Do not infer them from code or change account goals without the account owner.
- Keep the GTM/direct Google tag arrangement documented. Do not add a second conversion route without mapping the current container and Ads action.

## Privacy and data fields

- Never send names, email addresses, phone numbers, free-text enquiry content or other direct identifiers to GA4, Ads or generic GTM event parameters.
- Only send approved non-sensitive business fields such as selected service, form identifier, or a generated opaque lead ID after the backend confirms success.
- If attribution capture is implemented, preserve landing page, referrer, UTM fields and Google click identifiers for the operational enquiry record. Do not put those values into URLs after receipt or expose secrets.
- Never write enquiry payloads, email addresses or provider response bodies to server logs.

## Delivery contract

- `RESEND_API_KEY` is required in the Vercel environment that handles the request. Missing configuration must return an error and must not log the submission or report success.
- Resend must accept the message before the API returns `success: true`.
- Provider rejection, timeout or transport failure returns a user-safe error; logs contain only a status or error class.
- Provider acceptance is not proof of inbox delivery. Confirm a real message in the intended mailbox during a coordinated test.

## Ownership and verification

- Engineering owns event code, PII safety, endpoint response semantics and preview validation.
- The project owner/analytics operator confirms GA4, GTM and Ads account IDs, access, conversion roles and whether events reach the correct properties.
- The project owner and mailbox monitor coordinate the one real delivery test and verify the received message.
- Code-observed IDs are candidates only until checked in the accounts: GA4 `G-2R5PYZSMDB`, GTM `GTM-K235XMRN`, Ads `AW-18008420048`.
- Preview and local success checks do not prove production inbox receipt or Ads import.
