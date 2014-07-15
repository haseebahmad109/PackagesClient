# Packages

## Installation

```npm install```

## Run in browser

Run 'gulp build' to build app into packages/www folder.

Then go into the packages/www dir and run python -m SimpleHTTPServer 8000.
This will run a small http server on the current dir
Now you can type localhost:8000 to begin

## Run on device or emulator

``` gulp build && go to packages dir && cordova build [android|ios] && cordova run [android|ios] ```

## Requirements

* [Node](http://nodejs.org/)
* [Cordova](https://www.npmjs.org/package/cordova) >= 3.5.0 (Only to run on device or device emulator)