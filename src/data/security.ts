export type Severity = "Critical" | "High" | "Medium" | "Low";
export type Scenario = "overview" | "cloud" | "identity";
export type Alert = {
  id: string;
  title: string;
  source: string;
  severity: Severity;
  time: string;
  detail: string;
  action: string;
};

export const alerts: Record<Scenario, Alert[]> = {
  overview: [
    { id: "SS-2041", title: "Unusual sign-in location", source: "Identity · auth-gateway", severity: "Critical", time: "2 min ago", detail: "A synthetic user session originated from a location outside the example organization's usual access region. The session also used a new device.", action: "Review the sample session, verify the user's identity, and consider revoking access if the activity is unexpected." },
    { id: "SS-2040", title: "Public storage bucket detected", source: "Cloud · production-assets", severity: "High", time: "8 min ago", detail: "The example production-assets bucket has a publicly readable policy. This fictional finding illustrates how a configuration risk could be surfaced.", action: "Inspect the sample access policy and restrict public access where business requirements allow." },
    { id: "SS-2039", title: "Outdated dependency flagged", source: "Application · customer-api", severity: "Medium", time: "16 min ago", detail: "A synthetic dependency inventory contains a package marked as outdated. No actual vulnerability scan or package assessment has taken place.", action: "Review the dependency's release notes, validate compatibility, and schedule an update." },
    { id: "SS-2038", title: "New device enrolled", source: "Endpoint · design-mbp-04", severity: "Low", time: "24 min ago", detail: "An example endpoint was added to the fictional device inventory and is awaiting a routine baseline review.", action: "Confirm device ownership and compare its configuration against the sample baseline." },
  ],
  cloud: [
    { id: "SS-2052", title: "Public storage bucket detected", source: "Cloud · production-assets", severity: "High", time: "3 min ago", detail: "An illustrative cloud policy allows public read access to an example storage bucket.", action: "Review the policy, inventory public objects, and limit access to the intended audience." },
    { id: "SS-2051", title: "Permissive firewall rule", source: "Cloud · staging-vpc", severity: "High", time: "11 min ago", detail: "A synthetic staging firewall rule permits inbound traffic from any address on an administrative port.", action: "Restrict access to approved source ranges and verify whether the administrative port is needed." },
    { id: "SS-2050", title: "Audit logging paused", source: "Cloud · sandbox-02", severity: "Medium", time: "19 min ago", detail: "Audit logging is disabled in an example sandbox account, creating a fictional gap in event visibility.", action: "Check the sandbox retention policy and restore logging if required by the sample environment." },
    { id: "SS-2049", title: "Resource ownership updated", source: "Cloud · compute-west", severity: "Low", time: "31 min ago", detail: "An example compute resource has been assigned a new owner in the mock inventory.", action: "Confirm the new owner and review associated access permissions." },
  ],
  identity: [
    { id: "SS-2063", title: "Privileged role escalation", source: "Identity · admin-console", severity: "Critical", time: "1 min ago", detail: "A fictional account was granted an administrator role outside the example change window.", action: "Verify the change request, review the granting account, and remove the role if unauthorized." },
    { id: "SS-2062", title: "Repeated failed sign-ins", source: "Identity · workspace-sso", severity: "High", time: "7 min ago", detail: "The sample event history shows repeated unsuccessful authentication attempts against one synthetic user.", action: "Review sign-in context and apply an appropriate authentication challenge in this illustrative workflow." },
    { id: "SS-2061", title: "MFA enrollment incomplete", source: "Identity · example-user-12", severity: "Medium", time: "14 min ago", detail: "An example user has not completed multi-factor authentication enrollment.", action: "Contact the sample account owner and complete the enrollment workflow." },
    { id: "SS-2060", title: "Dormant account found", source: "Identity · service-account-07", severity: "Low", time: "28 min ago", detail: "A fictional service account has no recent activity in the synthetic event history.", action: "Confirm whether the account is still needed and disable unused credentials." },
  ],
};

export const scenarios = {
  overview: { label: "Workspace overview", score: 82, assets: 248, critical: 3, reviewed: 94, offset: 0 },
  cloud: { label: "Cloud environment", score: 76, assets: 126, critical: 2, reviewed: 88, offset: 11 },
  identity: { label: "Identity & access", score: 69, assets: 84, critical: 5, reviewed: 81, offset: 21 },
} satisfies Record<Scenario, { label: string; score: number; assets: number; critical: number; reviewed: number; offset: number }>;

const baseTrend = [24, 31, 27, 44, 38, 51, 33, 29, 46, 42, 61, 35, 28, 40, 32, 25, 38, 34, 20, 29, 24];
export function getTrend(scenario: Scenario, period: "7d" | "30d") {
  const count = period === "7d" ? 7 : 21;
  return baseTrend.slice(0, count).map((n, i) => ({
    day: period === "7d" ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i] : `Day ${Math.round(1 + i * 29 / 20)}`,
    events: n + scenarios[scenario].offset,
    resolved: Math.max(8, n - 13 + Math.round(Math.sin(i) * 5)),
  }));
}

export const plans = [
  { name: "Launch", description: "A clearer view of your first environment.", monthly: 29, annual: 23, scope: "Up to 25 assets", icon: "01", features: ["Unified security overview", "Core alert workflows", "7-day event history", "Weekly summary reports"] },
  { name: "Scale", description: "More context for a growing attack surface.", monthly: 79, annual: 63, scope: "Up to 250 assets", icon: "02", featured: true, features: ["Everything in Launch", "Advanced prioritization", "90-day event history", "Custom reporting views", "Team collaboration concept"] },
  { name: "Enterprise", description: "A security workspace built around your team.", monthly: null, annual: null, scope: "Custom asset coverage", icon: "03", features: ["Everything in Scale", "Custom retention concept", "Role-based access concept", "Illustrative onboarding plan", "Dedicated workspace concept"] },
] as const;

export const faqs = [
  { question: "Is SentinelStack a real security product?", answer: "SentinelStack is a fictional SaaS concept created as a design and development portfolio project. The site demonstrates a security platform experience. It does not monitor networks, scan systems, or provide security services." },
  { question: "Where does the dashboard data come from?", answer: "All metrics, alerts, assets, trends, and event timestamps are synthetic examples stored in the project. Changing a scenario or date range switches between curated sample datasets. Nothing is connected to your systems." },
  { question: "Can I interact with the platform preview?", answer: "Yes. Switch between the workspace, cloud, and identity scenarios; change the chart period; filter alerts by severity; and select an alert to inspect its context and an illustrative next step." },
  { question: "Are the plans and prices available to purchase?", answer: "The pricing is illustrative and exists to demonstrate a complete SaaS marketing experience. There is no checkout, payment processing, or paid subscription. Annual figures show a sample monthly equivalent billed yearly." },
  { question: "What happens when I request a demo?", answer: "The form validates your details locally and displays a clear preview confirmation. No details are stored or sent, and no email or meeting request is created. A real delivery provider can be connected in a future implementation." },
  { question: "How is privacy handled in this concept?", answer: "This implementation has no analytics, tracking cookies, account system, or live security integrations. The preview form stays in your browser. The hosting provider may process standard request information under its own policies." },
];
