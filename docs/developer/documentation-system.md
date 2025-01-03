
# Documentation System

## OpenAPI Specification

- [The Swagger Viewer extension for VS Code](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) renders the specification locally, which helps developers view the OpenAPI specification directly in VS Code.
- [Swagger Documentation](https://swagger.io/docs/) provides detailed information on using Swagger tools, including the Swagger Editor, Swagger UI, and Swagger Codegen.
- GitLab will provide a rendered view of the specification if the file is named `openapi.yaml`.

## Client and Developer Guides

- Documentation is written in [Markdown](https://www.markdownguide.org/basic-syntax/) and browsed in GitLab, making it easy to render and read.
- **Automated Testing Tools**:
  - [markdown-link-check](https://github.com/tcort/markdown-link-check#readme): Checks for valid links within markdown files.
  - [markdownlint](https://github.com/DavidAnson/markdownlint): Lints markdown files to ensure they follow best practices.
  - [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2): Command-line interface for `markdownlint`.
  - [swagger-cli](https://www.npmjs.com/package/swagger-cli): Validates and bundles the OpenAPI specification.
