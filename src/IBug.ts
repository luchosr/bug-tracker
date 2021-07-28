export interface IBug {
  id: string;
  description: string;
  priority: BugPriority;
}

export enum BugPriority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGHT = "Hight",
}
