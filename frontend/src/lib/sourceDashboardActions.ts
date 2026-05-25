export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [];
