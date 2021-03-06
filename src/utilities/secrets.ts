import * as dotenv from "dotenv";
import * as _ from "lodash";
import * as path from "path";

dotenv.config({ path: ".env" });

export const ENVIRONMENT = _.defaultTo(process.env.APP_ENV, "dev");
export const IS_PRODUCTION = ENVIRONMENT === "production";
export const APP_PORT = _.defaultTo(parseInt(process.env.APP_PORT), 3000);
export const LOG_DIRECTORY = _.defaultTo(
  process.env.LOG_DIRECTORY,
  path.resolve("logs")
);
