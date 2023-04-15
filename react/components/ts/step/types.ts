export type StepList = {
  name: string;
  description?: string;
  status: StepStatus;
  type?: string;
};

export type StepStatus = "complete" | "current" | "upcoming";

export type StepComponentProp = {
  steps: Array<StepList>;
};
