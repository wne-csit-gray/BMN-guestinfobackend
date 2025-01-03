# linters

We use the following tools to lint the parent project's source files:

- [lint-commit-messages](https://gitlab.com/LibreFoodPantry/common-services/tools/linters/lint-commit-messages)

- [shellcheck](https://www.shellcheck.net/#)

- [hadolint](https://github.com/hadolint/hadolint)

- [eslint](https://eslint.org/docs/latest/use/getting-started)

- [jsonlint](https://jsonlint.com/)

- [yamllint](https://www.yamllint.com/)

- [lint-package-json](https://gitlab.com/LibreFoodPantry/common-services/tools/linters/lint-package-json)

- [markdownlint](https://gitlab.com/pipeline-components/markdownlint-cli2)

- [spectral](https://stoplight.io/open-source/spectral)

- [cspell](https://cspell.org/)

- [markdown-link-check](https://github.com/tcort/markdown-link-check)

- [htmlhint](https://htmlhint.com/)

- [stylelint](https://stylelint.io/)

- [alexjs](https://alexjs.com/)
We use multiple tools to lint the parent project's source files.

## Requirements

Docker

## Local Usage

The commands can be run from anywhere. They are shown as running from the
root of the project:

```bash
bin/test.sh
```

## CI Usage

These linters are part of our pipeline. You can see more at [.gitlab-ci.yml](../../.gitlab-ci.yml).
