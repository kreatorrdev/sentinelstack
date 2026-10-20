# SentinelStack — Cybersecurity SaaS Landing Page

> **Project type:** Marketing website and simulated product preview for a fictional cybersecurity SaaS  
> **Positioning:** SaaS web design + security-aware UI/UX  
> **Status:** Implemented, verified, and deployed to Vercel  
> **UI language:** English  
> **Target MVP effort:** Approximately 2–4 focused development days (estimate, not a deadline)

## 1. Goal and scope

Create a polished SaaS landing page for a **fictional security monitoring platform**. The site should communicate a clear product value proposition, explain example capabilities, showcase a **simulated dashboard** and let visitors request a demo. No actual network scanning, incident detection or vulnerability assessment will take place in the MVP.

**MVP includes:** marketing page, interactive dashboard preview with mock data, features, process, sample pricing, FAQ, demo request form, SEO and portfolio documentation.  
**Not in MVP:** functioning security monitoring, real customer accounts, live security telemetry, real SOC alerts, paid subscriptions or vulnerability scans.

## 2. Brand and visual identity

| Item | Decision |
| --- | --- |
| Brand | SentinelStack |
| Tagline | *Clarity across your security landscape.* |
| Visual style | Dark, technical, premium, legible; avoid generic "hacker green" clichés |
| Colors | Midnight `#0A1224`, slate `#17243A`, cyan `#49C7D9`, white `#F1F6FA`, gray `#95A7BC` |
| Typography | Geometric sans-serif headings and UI text via `next/font` |
| Primary CTA | **Request a Demo** |
| Secondary CTA | **Explore the Platform** |
| Data policy | All charts, activity and statistics explicitly marked **Simulated data** |

Avoid invented certifications, false "SOC 2 certified" badges, fabricated client logos, exaggerated protection guarantees or misleading claims of real-time threat detection.

## 3. Sections and behaviors

| Section | User goal | Elements |
| --- | --- | --- |
| Header/Hero | Understand offer | Value statement, CTA, simulated dashboard visual |
| Platform Preview | Experience interface | Sample alerts, risk overview, trend chart, data-label disclaimer |
| Features | Compare capabilities | Monitoring concept, alerts concept, reporting concept |
| How It Works | Understand workflow | Connect → Review → Respond (illustrative only) |
| Security & Trust | Assess credibility | Explain responsible design; no unverified claims |
| Pricing | Compare mock plans | Three sample tiers, feature comparisons, no live checkout |
| FAQ | Resolve objections | Accessible expand/collapse controls |
| Request Demo | Contact team | Validated name/email/company/message form; demo-mode fallback |
| Footer | Navigate | Links, privacy note, clearly stated fictional project status |

### Simulated dashboard content

Use static typed objects for sample alert severities, event history and time-series values. Do **not** imply mock values are live data. Make chart information understandable without relying solely on color.

## 4. Technical stack

| Layer | Technology | Why |
| --- | --- | --- |
| Site | Next.js App Router + React | Marketing page with polished interaction |
| Types | TypeScript | Safe structured mock data and pricing models |
| Styling | Tailwind CSS | Responsive dark theme and components |
| Charts | Recharts | Simulated alert/risk trends |
| Form | React Hook Form + Zod | Validation and user feedback |
| Form delivery | Formspree or equivalent, only once configured | Lead capture without accounts |
| SEO | Next.js Metadata API | Search previews and share cards |
| QA | ESLint, TypeScript, Lighthouse | Code and accessibility checks |
| Source/hosting | GitHub + Vercel | Portfolio delivery |

If the demo request provider is not configured, clicking submit must disclose that the form is a preview and no email was sent. Never expose private API tokens in browser code or Git commits.

## 5. Implementation roadmap

Check off tasks in order. **Status: 20/20 — implementation, portfolio documentation, local verification, and Vercel production delivery complete.**.

### Phase A — Foundation

- [x] **S01 — Message:** define fictional target customer, value proposition and limitations. *(Product copy / Markdown)*
- [x] **S02 — Visual identity:** dark tokens, typography, component styles and responsive layout. *(Tailwind / `next/font`)*
- [x] **S03 — Initialize:** Next.js + TypeScript app, local Git repository, and project structure. *(Next.js, Git)*
- [x] **S04 — Typed mock data:** alerts, chart points, pricing plans and FAQs. *(TypeScript)*

### Phase B — Landing page

- [x] **S05 — Shared shell:** accessible header, mobile menu, footer, persistent CTA. *(React / Tailwind)*
- [x] **S06 — Hero:** headline, CTA buttons, simulated product preview. *(React)*
- [x] **S07 — Features:** reusable feature cards, clear descriptions. *(React)*
- [x] **S08 — Dashboard:** simulated risk/event overview and chart with clear data labels. *(Recharts)*
- [x] **S09 — How It Works:** clear three-step explanation. *(React / Tailwind)*
- [x] **S10 — Trust section:** responsible language; avoid unverifiable certification claims. *(Content / React)*
- [x] **S11 — Pricing:** three sample tiers, feature lists and CTA links; explicitly illustrative. *(TypeScript / React)*
- [x] **S12 — FAQ:** accessible accordion with keyboard support. *(React / semantic HTML)*

### Phase C — Lead capture

- [x] **S13 — Contact form:** name, email, company and optional message, with a privacy note. *(React Hook Form)*
- [x] **S14 — Validation/states:** Zod schema, accessible errors, loading, real delivery success/failure. *(Zod)*
- [x] **S15 — Delivery/abuse handling:** configure service and anti-spam; otherwise a non-sending demo form. *(Formspree or equivalent)*

### Phase D — Security, polish and release

- [x] **S16 — Responsive/a11y:** mobile, contrast, focus, screen readers and reduced motion. *(Tailwind, testing)*
- [x] **S17 — Security review:** dependency audit, no embedded secrets, minimal PII, honest mock claims. *(npm audit review / code inspection)*
- [x] **S18 — SEO/performance:** metadata, Open Graph, optimized assets, semantic headings. *(Next.js / Lighthouse)*
- [x] **S19 — Build/deploy:** lint and production build passed; deployed to https://sentinelstack.vercel.app and production smoke-tested. Source is stored in the private `kreatorrdev/sentinelstack` GitHub repository and connected to Vercel for deployments from `main`. *(npm, Git, Vercel)*
- [x] **S20 — Portfolio package:** README, screenshots, simulated-data disclosure and case study. *(Markdown / images)*

## 6. Suggested folder layout

```text
sentinelstack/
├── public/images/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   ├── dashboard/
│   │   ├── sections/
│   │   └── forms/
│   ├── data/
│   │   ├── mock-security.ts
│   │   ├── pricing.ts
│   │   └── faq.ts
│   ├── lib/validation.ts
│   └── types/security.ts
├── README.md
└── PROJECT_ROADMAP.md
```

## 7. Definition of done

- [ ] All marketing sections and links work on desktop, tablet and mobile.
- [ ] Mock charts and alerts are explicitly identified as **simulated**.
- [ ] No false certifications, real customer claims or genuine monitoring claims appear.
- [ ] Demo request form handles invalid inputs and reports whether anything was actually sent.
- [ ] Accessible FAQ, navigable charts (with textual summaries) and strong visual contrast.
- [ ] Dependency/security review completed; no credentials stored in Git.
- [ ] `npm run build` and configured lint checks pass.
- [x] Live Vercel URL, private GitHub README and case study are ready.

## 8. Optional phase 2 (separate security application)

Only if we deliberately turn this marketing site into a larger backend project:

- Role-based demo access and authentication using a reputable identity provider.
- Server-side mock event API and audit logging (initially synthetic data only).
- Read-only integrations with user-authorized security tools, clear permission boundaries and scoped API keys.
- Explicit threat model, rate limiting and abuse monitoring before accepting real data.

## 9. First next action

**Start with S01/S02:** decide the fictional audience (small businesses vs. security teams), write the hero copy and choose the dashboard mockup visual direction. Save this file as `PROJECT_ROADMAP.md` in the project root.

## Delivery notes — 19 October 2026

The implementation includes the complete interactive marketing experience and non-sending demo form. See `docs/VERIFICATION.md` for observed checks and the development-only dependency advisory. Real form delivery, actual security services, and payment processing remain outside the scope. Lighthouse and a full screen-reader audit are not claimed.

Production URL: https://sentinelstack.vercel.app
Production deployment: dpl_9TG4efg48D1XHyiBQzXHs1xR6NyS (READY).
