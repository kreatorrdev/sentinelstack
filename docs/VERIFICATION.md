# Verification

Checked on 19 October 2026. This document distinguishes observed checks from unperformed audits.

## Build and code

- Production static export: passed with Next.js 16.4.2.
- TypeScript: passed with `tsc --noEmit` and during production compilation.
- ESLint: passed with no errors or warnings after the PostCSS export correction.
- All internal section anchors resolve to existing IDs.
- Static output includes the page, custom 404, favicon, robots.txt, sitemap.xml, original social card, and self-hosted fonts.

## Browser behavior

Tested against the production export in the in-app browser:

- Workspace, cloud, and identity scenarios update the title, metrics, chart, and findings.
- Switching a scenario resets the severity filter and selected finding.
- Seven- and thirty-day periods change the sample series and summary.
- Cloud scenario + High severity displays two findings.
- A finding opens its detail, synthetic context, and illustrative next action.
- Export produces a downloadable text file and a visible simulated-data notice.
- Capability tabs switch explanatory content. End-key navigation selects the final tab.
- Workflow tabs switch terminal examples. ArrowDown selects the next step.
- Annual billing displays $23/month ($276/year) and $63/month ($756/year).
- FAQ controls expose the correct expanded state and corresponding answer.
- Empty form submission creates three associated validation errors.
- Valid fictional form details show the explicit “nothing was sent or stored” confirmation.
- Privacy opens a named native dialog. Escape closes it.
- Mobile navigation opens, navigates to a section, and closes after the exit transition.
- No site warnings or errors appeared in the captured browser console.

## Responsive checks

Viewport widths checked: **320, 390, 615, 768, 1024, and 1440 pixels**. No horizontal document overflow was observed. The hero uses a stacked layout on narrower devices and two columns on larger screens. The headline retains its two-line hierarchy at the checked widths. Dashboard metrics and charts rearrange for mobile.

Screenshots are saved in `public/images/screenshots/`.

## Accessibility implementation

Semantic landmarks and heading order; skip link; visible focus; named buttons; associated labels and errors; required input attributes; keyboard-operated tabs; FAQ expanded states; native dialog focus behavior; textual chart summaries; severity names alongside colors; reduced-motion CSS and Motion preferences.

Keyboard behavior was tested as described above. A full screen-reader audit, reduced-motion emulation, and a formal Lighthouse/WCAG audit have **not** been completed. These are not implied by passing lint or manual checks.

## Dependency review

- `npm audit --omit=dev`: **0 reported vulnerabilities**.
- The full development audit reports **5 high-severity dependency entries arising from one unpatched transitive `braces` advisory**, through `micromatch → fast-glob → @next/eslint-plugin-next → eslint-config-next`.
- At the time of review the registry's latest `braces` is 3.0.3 and is covered by the advisory. The suggested automatic change downgrades `eslint-config-next` to a different major; it was not applied because it would mismatch the project's framework tooling.
- This dependency path is used by local lint tooling, not by the exported production site. The finding remains documented for a future upstream update. No claim is made that the full development audit is clean.

## Hosting status

Production deployment succeeded on 19 October 2026.

- Public URL: https://sentinelstack.vercel.app
- Vercel project: kreatorrdev/sentinelstack
- Deployment: dpl_9TG4efg48D1XHyiBQzXHs1xR6NyS
- Vercel ready state: READY (production).
- Anonymous HTTP check: 200, with the correct page title and canonical URL.
- robots.txt, sitemap.xml, and the social preview PNG: HTTP 200 and the production origin.
- Missing page: HTTP 404 with the custom page.
- Security headers verified: nosniff, strict-origin-when-cross-origin, and frame denial.
- Production browser checks: cloud scenario and High severity return two findings; annual pricing totals match the sample plans; no console errors.
- A production screenshot is saved as `public/images/screenshots/live-desktop.jpg`.

The first deployment attempt exposed an incorrect Vercel output-directory setting. It was corrected to `.next` for the Next.js framework builder, and the verified production deployment uses that correction.

## GitHub integration — 20 October 2026

- Repository: https://github.com/kreatorrdev/sentinelstack (private).
- Branch: `main`.
- The complete source, documentation, dependency lockfile, and portfolio screenshots are included.
- Local credentials, provider state, build output, dependencies, and QA authorization screenshots are excluded.
- Vercel confirms that the repository is connected to the existing SentinelStack project. Updates on `main` use its production deployment workflow.
