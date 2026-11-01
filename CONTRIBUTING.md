# Contributing to SentinelStack

Project documentation and contribution descriptions are maintained in English. Literal interface labels, identifiers and recorded output may retain their original language when needed for accuracy.

## Set up a working copy

Use Node.js 22 or later, run `npm ci`, then `npm run dev`.

Run project commands from the repository root.

## Make and validate a change

1. Create a focused branch from the current default branch and read the relevant specification and current status.
2. Make the change and update the affected English documentation.
3. For application changes, run the applicable checks below and inspect the affected experience.
4. Review the diff and open a pull request describing the problem, resulting behavior and checks actually performed. For documentation-only changes, verify links, paths and commands; a full application build is needed only if the change affects it.

~~~sh
npm run lint
npm run typecheck
npm run build
~~~

Check all three scenarios, seven/thirty-day datasets, severity filters, expanded findings, downloadable synthetic reports, pricing periods and demo-request feedback. Review keyboard access, narrow layouts, pause controls and reduced motion.

## Content and configuration

Keep all datasets, organizations, prices and security findings clearly simulated. Do not imply live monitoring, real customer evidence or certification.

Use your own local configuration. Commit configuration templates with placeholders; keep real credentials, runtime databases, personal records and generated build caches out of Git. Do not add a license or claim redistribution rights for third-party material without the owner's decision.

## Release notes

The build exports to `out/`. Preview with `npm run preview`; see the [hosting notes](README.md#hosting).

Report dated verification honestly. Existing historical PASS records describe their recorded environment and do not establish that a new checkout or deployment has passed the same checks.
