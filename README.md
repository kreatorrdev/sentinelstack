# SentinelStack

**Less noise. More control.** A fictional cybersecurity SaaS designed and developed as a portfolio project.

**Live site:** https://sentinelstack.vercel.app

**Private source repository:** https://github.com/kreatorrdev/sentinelstack

SentinelStack brings a premium marketing website and a simulated security workspace into one interactive experience. All product capabilities, data, organizations, names, events, and prices are illustrative. No security monitoring, network scanning, authentication, checkout, or live telemetry is implemented.

## Experience

- Original animated SVG security radar, orbital paths, connected signal nodes, floating system labels, and a luminous mint interface.
- Responsive landing page: hero, coverage areas, interactive platform preview, capabilities, workflow, trust, pricing, FAQ, demo request, and footer.
- Three dashboard scenarios: workspace overview, cloud environment, and identity & access.
- Seven- and thirty-day chart datasets with accessible text summaries.
- Severity filters and expandable findings with context and an illustrative next step.
- Downloadable text reports containing only the chosen synthetic dataset.
- Monthly/annual illustrative prices with the annual total displayed explicitly.
- Keyboard-operated tabs, mobile navigation, FAQ, skip link, visible focus, native privacy dialog, and reduced-motion support.
- React Hook Form + Zod validation. Successful submission explicitly states that nothing was sent, stored, or booked.

## Stack

Next.js App Router · React · TypeScript · Tailwind CSS · Motion · Recharts · Lucide · React Hook Form · Zod.

The site uses Next.js static export. `npm run build` creates the deployable `out/` directory. No server or environment secrets are needed. Fonts use `next/font` and are served locally after the build.

## Local development

Use Node.js 22 or later and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Next.js. To validate:

```sh
npm run lint
npm run typecheck
npm run build
```

Serve `out/` with a static web server to preview the production export. `next start` is not compatible with static export; use `npm run preview` instead.

## Hosting

The project is deployed on Vercel at https://sentinelstack.vercel.app. `vercel.json` uses the Next.js framework integration and `.next` build manifests; the framework deploys the generated static export. Security response headers are configured. The local static export remains in `out/`.

The canonical URL, sitemap, and social image origin read Vercel's `VERCEL_PROJECT_PRODUCTION_URL` automatically. Outside Vercel, set `NEXT_PUBLIC_SITE_URL` to the site's origin before building (see `.env.example`). Without either variable the build targets the local preview at `http://localhost:3100`.

Deploy from the project root with an authorized Vercel CLI:

```sh
vercel --prod
```

No hosting credentials are included in the source. Authentication files and local QA material are excluded from uploads. A previously reserved, unpublished Sites identity is retained in `.openai/hosting.json` and excluded from Vercel deployments.

## Project structure

```text
src/app/                 Page, layout, global styles, SEO routes, 404
src/components/          Landing page, radar illustration, interactive dashboard
src/data/security.ts     Typed scenarios, alerts, time series, plans, FAQs
src/lib/validation.ts    Demo form validation
public/images/           Original social preview artwork and portfolio screenshots
docs/                    Case study and verification notes
PROJECT_ROADMAP.md       Project plan and delivery status
```

## Privacy and responsible presentation

The form has no remote delivery provider and performs no network request. Its input is kept only in the current React form state and reset on preview completion. There is no local storage, analytics, account system, or tracking cookie. Host-level request processing or access gates are separate from the website. Dashboard values are explicitly labeled **Simulated data**. No customer logos, testimonials, certifications, or security guarantees are fabricated.

## Portfolio materials

See [the case study](docs/CASE_STUDY.md) for the project story and [verification notes](docs/VERIFICATION.md) for the tested behavior and limitations.
