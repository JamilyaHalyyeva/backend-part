import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export function readData() {
  //Convert the URL of the current module to a file path
  const __filename = fileURLToPath(import.meta.url);

  //Get the directore name from the file path
  const __dirname = path.dirname(__filename);

  //Construct the file path for the data.json file
  const filePtah = path.join(__dirname, "data.json");

  const rawData = fs.readFileSync(filePtah, "utf-8");

  return JSON.parse(rawData);
}
//Ezberle ve anlamaya çalış 