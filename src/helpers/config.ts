import { workspace } from "vscode"

export type ExtensionSettings = {
  languageScopes: string
}

export const config = () =>
  workspace.getConfiguration(
    "alpine-intellisense.settings"
  ) as unknown as ExtensionSettings

export default config
