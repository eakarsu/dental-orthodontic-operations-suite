export type FeatureSurfaceRow = { id: string; item: string; status: string; owner: string; nextStep: string };
export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['records', 'Patients', 'Patients operating queue', 'Healthcare Lead', 'Review and assign next action'],
  ['appointments', 'Appointments', 'Appointments operating queue', 'Healthcare Lead', 'Review and assign next action'],
  ['cases', 'Cases', 'Cases operating queue', 'Healthcare Lead', 'Review and assign next action'],
  ['care-plans', 'Care Plans', 'Care Plans operating queue', 'Healthcare Lead', 'Review and assign next action'],
  ['authorizations', 'Authorizations', 'Authorizations operating queue', 'Operations Lead', 'Review and assign next action'],
  ['resources', 'Resources', 'Resources operating queue', 'Operations Lead', 'Review and assign next action'],
  ['approvals', 'Approvals', 'Approvals operating queue', 'Operations Lead', 'Review and assign next action'],
  ['exceptions', 'Exceptions', 'Exceptions operating queue', 'Operations Lead', 'Review and assign next action'],
  ['compliance', 'Compliance', 'Compliance operating queue', 'Governance Lead', 'Review and assign next action'],
  ['outcomes', 'Outcomes', 'Outcomes operating queue', 'Governance Lead', 'Review and assign next action'],
  ['analytics', 'Analytics', 'Analytics operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['reports', 'Reports', 'Reports operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ["lab-case-intake","Lab Case Intake","Lab Case Intake review queue","Dental Lab Case","Review source context and assign owner"],
  ["appliance-tracking","Appliance Tracking","Appliance Tracking review queue","Dental Lab Case","Confirm next action and update evidence"],
  ["case-quality-review","Case Quality Review","Case Quality Review review queue","Dental Lab Case","Confirm next action and update evidence"],
  ["shade-material-review","Shade & Material Review","Shade & Material Review workspace","Dental Lab Deep Workflows","Review source evidence and assign owner"],
  ["scan-file-intake","Scan File Intake","Scan File Intake workspace","Dental Lab Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["remake-risk-review","Remake Risk Review","Remake Risk Review workspace","Dental Lab Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["clinician-lab-messages","Clinician Lab Messages","Clinician Lab Messages workspace","Dental Lab Deep Workflows","Confirm findings, next action, and audit evidence"],
  ['documents', 'Documents', 'Documents operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['notifications', 'Notifications', 'Notifications operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['integrations', 'Integrations', 'Integrations operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['profiles', 'Profiles', 'Profiles operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['ai-assistant', 'AI Assistant', 'AI Assistant operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['ai-tools', 'AI Tools', 'AI Tools operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title, item, owner, nextStep]) => [slug, buildSurface(slug, title, item, owner, nextStep)]));
export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]));
