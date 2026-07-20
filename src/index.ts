export type AgentCapability = "delegate" | "plan" | "review" | "escalate" | "report";

export interface AgentManifest {
  id: string;
  name: string;
  role: string;
  capabilities: AgentCapability[];
  accepts: string[];
  emits: string[];
  requiresHumanApprovalFor: string[];
}

export const manifest: AgentManifest = {
  id: "atlas-manager",
  name: "ATLAS Manager",
  role: "User-facing orchestrator and chain-of-command authority",
  capabilities: ["delegate", "plan", "review", "escalate", "report"],
  accepts: ["user.request", "agent.result", "agent.blocked", "approval.response"],
  emits: ["task.assignment", "approval.request", "manager.response", "activity.event"],
  requiresHumanApprovalFor: ["external side effects", "financial transactions", "credential changes", "destructive actions"]
};

export function getManifest(): AgentManifest {
  return structuredClone(manifest);
}
