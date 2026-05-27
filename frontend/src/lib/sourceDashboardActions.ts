export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "dental-lab-deep-workflows",
    "label": "Dental Lab Deep Workflows",
    "description": "Open deeper Dental Lab Deep Workflows workflows elevated from AIDentalLabCaseManager.",
    "href": "/shade-material-review",
    "sourceProjects": [
      "AIDentalLabCaseManager"
    ],
    "examples": [
      "Shade & Material Review",
      "Scan File Intake",
      "Remake Risk Review",
      "Clinician Lab Messages"
    ],
    "count": 1
  },
  {
    "id": "dental-lab-case",
    "label": "Dental Lab Case",
    "description": "Open Dental Lab Case workflows elevated from AIDentalLabCaseManager.",
    "href": "/lab-case-intake",
    "sourceProjects": [
      "AIDentalLabCaseManager"
    ],
    "examples": [
      "Lab Case Intake",
      "Appliance Tracking",
      "Case Quality Review"
    ],
    "count": 1
  }
];
