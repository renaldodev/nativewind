import { postCSSSerializer } from "../utils/serialize-styles";
import { ExtractedValues } from "./plugin";

export function outputFormatter(
  values: ExtractedValues,
  platform?: string
): string {
  const { styles, atRules, masks, topics } = postCSSSerializer(values);

  return `// This file was generated by tailwindcss-react-native. Do not edit!
const { StyleSheet } = require("react-native")
module.exports = { ${platform ? `\nplatform: '${platform},` : ""}
  styles: ${styles},
  atRules: ${atRules},
  masks: ${masks},
  topics: ${topics},
}`;
}
