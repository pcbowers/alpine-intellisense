import { ConfigurationChangeEvent, commands, window, workspace } from "vscode"

import { existsSync, writeFile } from "fs"
import { config } from "./helpers/config"
import snippets from "./helpers/snippets"

const generateSnippets = () =>
  new Promise((resolve) => {
    console.info("alpine-intellisense: generating new snippets")

    const newSnippets: Record<any, any> = {}
    const scope = config().languageScopes

    console.info("alpine-intellisense: generating with the scope, " + scope)

    for (let [key, snippet] of Object.entries(snippets)) {
      newSnippets[key] = { ...snippet, scope }
    }

    const file = __dirname + "/../snippets/snippets.code-snippets"

    console.info("alpine.intellisense: writing to file, " + file)

    writeFile(file, JSON.stringify(newSnippets, null, 2), (error) => {
      if (error) {
        console.error(error)
      }
      return resolve(true)
    })
  })

const showRestartMessage = async ({
  affectsConfiguration
}: ConfigurationChangeEvent) => {
  if (affectsConfiguration("alpine-intellisense")) {
    console.info(
      "alpine-intellisense: triggered refresh by changing extension configuration"
    )

    await generateSnippets()

    setTimeout(() => {
      window
        .showWarningMessage(
          "Alpine.js IntelliSense: Please restart VS Code to apply any configuration changes.",
          "Restart VS Code",
          "Ignore"
        )
        .then((action?: string) => {
          if (action === "Restart VS Code") {
            console.info("alpine-intellisense: reloading VS Code...")

            commands.executeCommand("workbench.action.reloadWindow")
          }
        })
    }, 1000)
  }
}

export function activate() {
  console.info("alpine-intellisense: beginning activation...")

  workspace.onDidChangeConfiguration(showRestartMessage)

  try {
    if (!existsSync(__dirname + "/../snippets/snippets.code-snippets")) {
      generateSnippets()
    }
  } catch (err) {
    console.error(err)
  }
}

export function deactivate() {}
