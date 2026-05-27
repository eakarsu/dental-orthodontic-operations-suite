import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'records',
    title: 'Patients',
    href: '/records',
    category: 'Healthcare',
    icon: BriefcaseBusiness,
    summary: 'Patients workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Patients queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Patients', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'appointments',
    title: 'Appointments',
    href: '/appointments',
    category: 'Healthcare',
    icon: Users,
    summary: 'Appointments workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Appointments queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Appointments', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'cases',
    title: 'Cases',
    href: '/cases',
    category: 'Healthcare',
    icon: ClipboardList,
    summary: 'Cases workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Cases queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Cases', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'care-plans',
    title: 'Care Plans',
    href: '/care-plans',
    category: 'Healthcare',
    icon: CalendarCheck,
    summary: 'Care Plans workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Care Plans queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Care Plans', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'authorizations',
    title: 'Authorizations',
    href: '/authorizations',
    category: 'Operations',
    icon: Activity,
    summary: 'Authorizations workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Authorizations queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Authorizations', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'resources',
    title: 'Resources',
    href: '/resources',
    category: 'Operations',
    icon: Workflow,
    summary: 'Resources workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Resources queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Resources', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'approvals',
    title: 'Approvals',
    href: '/approvals',
    category: 'Operations',
    icon: FileText,
    summary: 'Approvals workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Approvals queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Approvals', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'exceptions',
    title: 'Exceptions',
    href: '/exceptions',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Exceptions workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Exceptions queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Exceptions', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'compliance',
    title: 'Compliance',
    href: '/compliance',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Compliance workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Compliance queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Compliance', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'outcomes',
    title: 'Outcomes',
    href: '/outcomes',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Outcomes workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Outcomes queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Outcomes', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'analytics',
    title: 'Analytics',
    href: '/analytics',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Analytics workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Analytics queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Analytics', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Dental Orthodontic Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "lab-case-intake",
    title: "Lab Case Intake",
    href: "/lab-case-intake",
    category: "Dental Lab Case",
    icon: Workflow,
    summary: "Dental lab case details, prescription, scans, due date, and missing items.",
    bullets: ["Lab Case Intake queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Lab Case Intake", value: "28", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "appliance-tracking",
    title: "Appliance Tracking",
    href: "/appliance-tracking",
    category: "Dental Lab Case",
    icon: Workflow,
    summary: "Crown, bridge, aligner, or appliance production steps and status.",
    bullets: ["Appliance Tracking queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Appliance Tracking", value: "39", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "case-quality-review",
    title: "Case Quality Review",
    href: "/case-quality-review",
    category: "Dental Lab Case",
    icon: Workflow,
    summary: "Fit, material, shade, remake risk, and clinician communication.",
    bullets: ["Case Quality Review queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Case Quality Review", value: "50", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Dental Orthodontic Operations documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Dental Orthodontic Operations alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Dental Orthodontic Operations source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Dental Orthodontic Operations users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Dental Orthodontic Operations assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Healthcare', features: ['Patients', 'Appointments', 'Cases', 'Care Plans'] },
  { name: 'Operations', features: ['Authorizations', 'Resources', 'Approvals', 'Exceptions'] },
  { name: 'Governance', features: ['Compliance', 'Outcomes'] },
  { name: 'Dental Lab Case', features: ["Lab Case Intake","Appliance Tracking","Case Quality Review"] },
  { name: 'Intelligence Layer', features: ['Analytics', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AIDentalOrthodonticOperationsAssistant', 'AIDentalOrthodonticOperationsOperations where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);
