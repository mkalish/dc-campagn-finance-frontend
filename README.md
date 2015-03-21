# dc-campaign-finance-watch
Front end site that is powered by the DC Campaign Finance Backend project
https://github.com/mkalish/dc-campaign-finance-backend

## Prerequisites

1. Install [Node.js](http://nodejs.org) 
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally

    ```bash
    npm install -g bower gulp nodemon`
    ```

    >Refer to these [instructions on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)

## Running the Frontend

### Linting
 - Run code analysis using `gulp analyze`. This runs jshint, jscs, and plato.

### Tests
 - Run the unit tests using `gulp test` (via karma, mocha, sinon).

### Running in dev mode
 - Run the project with `gulp serve-dev --sync`

 - `--sync` opens it in a browser and updates the browser with any files changes.

### Building the project
 - Build the optimized project using `gulp build`
 - This create the optimized code for the project and puts it in the build folder

### Running the optimized code
 - Run the optimize project from the build folder with `gulp serve-build`


### Structure
The structure also contains a gulpfile.js and a server folder. The server is there just so we can serve the app using node. Feel free to use any server you wish.

	/src
		/client
			/app
			/content
	
### Installing Packages
When you generate the project it should run these commands, but if you notice missing pavkages, run these again:

 - `npm install`
 - `bower install`

Generated from HotTowel Angular

Opinionated AngularJS style guide for teams by @john_papa

More details about the styles and patterns used in this app can be found in my AngularJS Style Guide and my AngularJS Patterns: Clean Code course at Pluralsight and working in teams.
