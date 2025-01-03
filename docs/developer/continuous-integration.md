# Continuous Integration (CI)

### Purpose

This CI configuration file documents the building, linting, and testing for the `GuestInfoSystemBackend`.

### CI Tasks
- **Building**: Compiles the application to catch syntax errors and verify dependencies.
- **Linting**: Ensures code adheres to style guidelines to maintain code consistency.
- **Testing**: Runs unit and integration tests to validate functionality.

### CI Process Flow
1. **Build Stage**: Compiles code and checks dependencies.
2. **Lint Stage**: Enforces coding standards.
3. **Test Stage**: Runs unit and integration tests.

### Best Practices
- **Commit Frequently**: Small, modular commits make troubleshooting easier.
- **Run Tests Locally**: Run tests locally before pushing to avoid blocking the pipeline.
- **Resolve CI Failures Promptly**: Fix failed builds or tests promptly to keep the CI pipeline functional.


## Related Files

* [.gitlab-ci.yml](../../.gitlab-ci.yml) includes files from the tools/
  that run in the CI/CD pipeline. For more information individual tools,
  see their README.md.

## Official Documentation

* [Keyword Reference](https://docs.gitlab.com/ee/ci/yaml/)
