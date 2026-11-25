// Loading Screen Gold v3 — the .env publish: the build passes, and so does everyone else.
// Duel: ties Step 9 on K2, wins on K3/K4/K5; beats blame-flip on K2.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Tip: your agent published your .env file to fix the build. The build passes now. So does everyone else.";
const TARGET = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(TARGET, ENTRY, "utf8");
chmodSync(TARGET, 0o644);
