import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const buildDirectory = resolve("dist");
copyFileSync(
    resolve(buildDirectory, "index.html"),
    resolve(buildDirectory, "404.html"),
);
