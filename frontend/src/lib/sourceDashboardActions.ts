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
