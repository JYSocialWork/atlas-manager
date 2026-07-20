# ATLAS Manager Agent

The user-facing command authority for ATLAS. It converts user intent into plans, delegates work to specialist agents, reviews returned evidence, and escalates protected actions through human approval.

## Responsibilities

- Maintain the chain of command from user to manager to specialist agent.
- Select agents and environments based on capability, policy, availability, and task constraints.
- Request approval before protected external side effects.
- Consolidate agent results into a clear response and activity record.

## Package

```bash
npm install
npm run typecheck
npm run build
```

`src/index.ts` exports the initial agent manifest. Runtime adapters, transport, persistence, and model-provider wiring remain integration concerns of the ATLAS hub.
