# alpine-intellisense

## Features

Provides syntax highlighting for [Alpine.js](https://alpinejs.dev/) directives along with autocomplete for all base directives and modifiers.

This extension aims to keep as small a footprint as possible by injecting a simple grammar to provide JavaScript highlighting rather than implementing an entirely new language and by using the [Custom Data Extension](https://code.visualstudio.com/api/extension-guides/custom-data-extension) to add custom HTML attributes. Snippets are provided through the default API provided by VS Code.

## Extension Settings

This extension contributes the following settings:

- `alpinejs.settings.languageScopes`: Defines the language scopes for which the snippets will be available. Use comma separated values. For example: `html,php,twig,nunjucks`. Default is `html`.

## Known Issues

N/A
