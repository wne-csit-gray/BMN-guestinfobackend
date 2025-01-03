# Dependency Management

This document outlines the dependency management practices for our project, focusing on tools and best practices to ensure consistent and reliable development environments. It covers managing dependencies for both JavaScript packages using npm and containerized components using Docker. Proper dependency management enables reproducibility, security, and easier maintenance by tracking and controlling the versions of tools and libraries used.

Most of the tools/components of this project are packaged into separate
Docker images. So we can manage the dependencies of each tool/component
separately. Many of the tools also use NodeJS and its npm package manager
to manage the dependencies of node modules that are installed into their
containers. So managing dependencies in this project requires an
understanding of concepts related to both Docker and Node/npm. We describe
these briefly below and provide links to help you get started.

## Development dependencies vs application dependencies

Before you start managing dependencies, you'll need to distinguish between
an application dependency and a development dependency.

See [Differences Between Dependencies, Devdependencies, and Peerdependencies](https://www.geeksforgeeks.org/difference-between-dependencies-devdependencies-and-peerdependencies/)

## npm - Managing dependencies

[npm](https://www.npmjs.com/) is used to manage JavaScript dependencies.

### npm - How we created the initial package.json file

[npm init](https://docs.npmjs.com/creating-a-package-json-file#creating-a-new-packagejson-file)

### npm - Installing dependencies

To install the latest version of `awesomePackage`

```bash
npm install awesomePackage
```

To install a development dependency, add `--save-dev` to the command.

```bash
npm install awesomePackage --save-dev
```

Test it. If it doesn't work, you may need to install a specific version.
For example,

``` bash
npm install awesomePackage@^3.2.1
```

The caret (^) in front of the version number gives npm some flexibility
in which specific version it may install.

### npm - Updating dependencies

Checking for outdated dependencies must be performed manually for now.
Automatic dependency updating will be added at a later time. (16 June 2022)

Dependencies often use semantic versioning to clarify what kind of
update you will receive when you update to the latest version.

* [About Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning).

## Docker - Managing dependencies

Docker does not come with any automated dependency management tool.
We install dependencies in Dockerfile using common Linux package managers.
These can be used to install specific package versions. Whenever possible
you should specify a specific package version (this is called pinning the
version). The version number of the base image for a Docker file should also
pinned. The article below describes the basics of pinning dependencies in
Dockerfiles.

* [Our Dockerfile Tips & Tricks](https://www.balena.io/blog/our-dockerfile-tips-tricks/)
