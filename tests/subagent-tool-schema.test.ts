import { describe, it, expect, vi } from "vitest";

vi.mock("../lib/i18n.ts", () => ({ t: (k: string) => k, getLocale: () => "en" }));

async function loadSubagentToolDef() {
  const mod = await import("../lib/tools/subagent-tool.ts");
  const tool = (mod as any).createSubagentTool({
    currentAgentId: "test",
    getParentCwd: () => "/tmp",
    executeIsolated: async () => {},
  });
  return tool;
}

describe("subagent tool schema", () => {
  it("does not duplicate generic background task polling rules", async () => {
    const tool = await loadSubagentToolDef();
    expect(tool.description).not.toContain("check_pending_tasks");
    expect(tool.description).not.toContain("Check at most");
    expect(tool.description).not.toContain("<hana-background-result>");
  });

  it("includes context protection guidance", async () => {
    const tool = await loadSubagentToolDef();
    expect(tool.description).toContain("direct tool");
    expect(tool.description).toContain("protecting the main context window");
  });

  it("has correct parameter descriptions", async () => {
    const schema = await loadSubagentToolDef();
    const props = schema.parameters?.properties;
    expect(props?.agent?.description).toMatch(/backticks/);
    expect(props?.agent?.description).toMatch(/persona/);
    expect(props?.agent?.description).toMatch(/model/);
    expect(props?.label?.description).toMatch(/display/i);
    expect(props?.label?.description).toMatch(/threadId|subagent_reply/);
    expect(props?.instance?.description).toMatch(/[Ll]egacy/);
    expect(props?.model?.description).toMatch(/chat model/);
  });
});
