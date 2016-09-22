# ShiftLeft Runner Web Showcase


## Install
=======

* Install [Node.js >= v4.2.3 and npm](http://nodejs.org/)
* Open cmd line on your Mac or Windows, clone this repo and install npm package dependencies:
```bash
# install node package dependencies
$ npm install
```

## Run tests

### on Mac
```
# Run single test suite with Chrome
./node_modules/.bin/shiftleft-runner --test tests/google-express-search.js --config conf/shift_conf.json --browsers chrome --testers 1
```

```
# Run single test suite with Chrome and Firefox
./node_modules/.bin/shiftleft-runner --test tests/google-express-search.js --config conf/shift_conf.json --browsers chrome,firefox --testers 2
```

```
# Run single test suite with Chrome and tag
./node_modules/.bin/shiftleft-runner --test tests/google-express-search.js --config conf/shift_conf.json --browsers chrome --testers 1 --tags smoke
```

## Running Tests on safari

  For running tests on safari browser install [safaridriver](http://selenium-release.storage.googleapis.com/2.48/SafariDriver.safariextz) extension and make sure it's enabled. To enable it please follow the below steps:

  1. open `Safari`
  2. go to `Preferences`
  3. click on the `Extensions` tab
  4. Make sure `Enable WebDriver` is checked
  5. Close `Safari`
