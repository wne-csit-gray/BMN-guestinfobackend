# Automated Testing

Automated testing is implemented using
[mocha](https://github.com/mochajs/mocha),
[chai](https://github.com/chaijs/chai)
and
[chai-http](https://www.chaijs.com/plugins/chai-http/),
which are JavaScript testing, assertion and HTTP assertion libraries respectively.
Test code can be found in `src/test`, and automatically test the GuestInfoBackend endpoints through 
HTTP requests.

## Automated Testing Instructions

Follow these steps to run the entire test suite:

### 1. Navigate to the Automated Testing Folder

Ensure that you are in the testing/automatic folder.

### 2. Initialize Dependencies

Use the command `sh build.sh` to install dependencies and start build.

### 3. Run tests

Use the command `sh test.sh` to run tests.
