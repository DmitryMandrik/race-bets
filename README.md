# Race Bets Protractor Framework

## What is Protractor

Please see http://www.protractortest.org/#/ to find our more about Protractor.

## Environment  - OSX/Linux

In order to run the Protractor you will need to install nodejs, Chrome.

* OSX - `brew install node` 
* linux - `apt-get install node`

Clone the repository, `cd` in to it, and install the required nodes:

    `cd test-automation`
    `npm install` - install the dependencies in the local node_modules folder

## How to use

`protractor conf.js` - will run default specs from conf.js file:

```
specs: ["spec/regression_scope/sign_up/step1/*.js"],
```

To run a test suite add it to suites in conf.js file:

```
suites: {
    smoke: [ 
        "spec1.js",
        "spec2.js",
        "spec3.js"
    ],

    regression: [
        "spec4.js",
        "spec5.js",
    ],
}
```

and run it by:

```
protractor conf.js --suite regression
protractor conf.js --suite smoke,regression
```

To run using specific browsers add it to capabilities in conf.js file:

```
capabilities: {
        'browserName': 'chrome'
    }
```

## Running Tests in Parallel

To run in parralel need to add `multiCapabilities` in conf.js

```
multiCapabilities: [{
        'browserName': 'chrome',

        // allows different specs to run in parallel.
        // If this is set to be true, specs will be sharded by file
        // (i.e. all files to be run by this set of capabilities will run in parallel).
        // Default is false.
        'shardTestFiles: true',

        // Maximum number of browser instances that can run in parallel for this
        // set of capabilities. This is only needed if shardTestFiles is true.
        // Default is 1.
        'maxInstances': 2
    }]
```

