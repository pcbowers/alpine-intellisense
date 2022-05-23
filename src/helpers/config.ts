import { workspace } from "vscode"

export type ExtensionSettings = {
  languageScopes: string
}

export const config = () =>
  workspace.getConfiguration(
    "alpinejs.settings"
  ) as unknown as ExtensionSettings

export default config
