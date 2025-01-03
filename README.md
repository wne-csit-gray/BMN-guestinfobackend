# Guest Info System Backend Server Overview

The GuestInfoBackend provides a REST API server that implements an OpenAPI specification and is called by the GuestInfoFrontend. The developers
of GuestInfoFrontend are the clients of GuestInfoBackend.

## Status

The system backend is currently in active development. The database is active and the backend has functioning APIs. The database can take in new data, modify or delete data, or export data. The test suite is fully functional.

## Development Container and GuestInfoBackend setup

1. Download and install [Visual Studio Code](https://code.visualstudio.com) and [Docker Desktop](https://www.docker.com). Follow the instructions in the setup wizards after running the installer for each software.
2. Once on the GuestInfoBackend project page located [here](https://gitlab.com/LibreFoodPantry/client-solutions/bear-necessities-market/guestinfosystem/guestinfobackend/-/tree/main?ref_type=heads), select the "Visual Studio Code (HTTPS)" button. This will open file explorer and prompt you to select a file location and then open Visual Studio Code. If Visual Studio Code is already open then the file location will be chosen from the tool bar at the top of the screen. 
3. There will then be an option to reopen in a dev container in the bottom right of the screen. Selecting this will open GuestInfoBackend in a dev container after some setup. To run GuestInfoBackend within the dev container follow the instructions in the Build & Run section below.

## Build & Run 

Make sure docker is up and running. 

1. cd testing/automatic/build.sh
2. (open new terminal)
3. cd testing/automatic
4. sh test.sh

## Usage Instructions

The API implemented by this server is in [lib/openapi.yaml](lib/openapi.yaml). The API can be viewed:

* Using the [Swagger Viewer extension for VS Code](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) which is installed in the Dev Container for this project.
* Directly in the [GitLab repository for this project](https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry/guestinfosystem/guestinfobackend).

The [source for the GuestInfoAPI](https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry/guestinfosystem/guestinfoapi) is where development of the API takes place.

## Folder Information

**.devcontainer**

This folder contains the files needed to run the GuestInfoBackend in a dev container.

**.gitlab/merge_request_templates**

This contains information how to properly commit and merge into the GuestInfoBackend.

**commands**

This folder contains scripts to streamline the running and development of GuestInfoBackend.

**docs/developer**

This folder contains information about various aspects of GuestInfoBackend that will help developers work on the project.

**lib**

This folder has information on how to communicate with the api and the possible causes for errors returned from the api.

**src**

The code for GuestInfoBackend is saved here.

**testing**

The tests for the GuestInfoBackend are stored here and able to run to tested added features.

## Tools

**Developer Guide**

1. Read [LibreFoodPantry.org](https://librefoodpantry.org/)
    and join its Discord server.
2. [lib/openapi.yaml](lib/openapi.yaml) contains the API specification that the server implements. **This file should not be edited**. If changes are needed in the API, development happens in the [source for the GuestInfoAPI](https://gitlab.com/LibreFoodPantry/client-solutions/theas-pantry/guestinfosystem/guestinfoapi).
3. Familiarize yourself with the systems used by this project
  (see Development Infrastructure below).
4. See [the developer cheat-sheet](docs/developer/cheat-sheet.md) for common
  commands you'll likely use.

**Development Infrastructure**

* [Automated Testing](docs/developer/automated-testing.md)
* [Build System](docs/developer/build-system.md)
* [Continuous Integration](docs/developer/continuous-integration.md)
* [Dependency Management](docs/developer/dependency-management.md)
* [Development Environment](docs/developer/development-environment.md)
* [Documentation System](docs/developer/documentation-system.md)
* [Version Control System](docs/developer/version-control-system.md)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Docker Desktop](https://code.visualstudio.com/)

## License

By submitting this issue or commenting on this issue, or contributing any content to this issue, you certify under the Developer Certificate of Origin that the content you post may be licensed under GPLv3 (for code) or CC-BY-SA 4.0 International (for non-code content).

Last updated: November 11th, 2024
