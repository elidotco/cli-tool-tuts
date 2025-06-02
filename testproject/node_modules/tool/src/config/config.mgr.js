import { readPackageUp } from "read-package-up";
import { cosmiconfigSync } from "cosmiconfig";
const configLoader = cosmiconfigSync("tool");
import schema from "./schema.json" assert { type: "json" };
import ajv from "ajv";
const ajV = new ajv();

export function getConfig() {
  const pkgPath = configLoader.search(process.cwd());
  console.log(pkgPath);
  if (pkgPath) {
    const isValid = ajV.validate(schema, pkgPath.config);
    if (!isValid) {
      console.log("Invalid config found ");
      console.log(ajv.errors);
      process.exit(1);
    }
    console.log("Found Config");
  } else {
    console.log("could not find config");
    return { port: 1234 };
  }
}
