let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    spec: {
        "spec/regression_scope/sign_up/step1/*.js"
    },
    suites: {
        regression: [
            "spec/regression_scope/sign_up/step1/*.js",
            // "spec/regression_scope/sign_up/step2/*.js",
        ],
        smoke: [
            "spec/smoke_scope/",
        ],
        happypath: [
            "spec/happypath_scope/",
        ]
    },
    framework: 'jasmine',

    getPageTimeout: 140000,   // How long to wait for a page to load
    allScriptsTimeout: 150000,  // The timeout in milliseconds for each script run on the browser.
    // This should be longer than the maximum time your application needs to stabilize between tasks.

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        defaultTimeoutInterval: 120000
    },
    onPrepare: function(){
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    }
    // angular.getTestability(angular.element('[ng-app]')).isStable(); - does not work?
};



