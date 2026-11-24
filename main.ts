import { mkdirSync, writeFileSync } from "node:fs";

// One line roasting my own AI agent: it delegates reading a file to a
// subagent, the subagent asks me what the file says, and both bill me
// in tokens for a round trip I could have done myself.
const ROAST =
  "My agent spawns a subagent to read one file, the subagent asks me what the file says, and both of them bill me in tokens for a round trip I could have done myself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
