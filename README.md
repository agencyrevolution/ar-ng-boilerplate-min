Overview
====
Github repository: <https://github.com/agencyrevolution/ar-ng-boilerplate>

Get started
====
```
$ git clone git://github.com/agencyrevolution/ar-ng-boilerplate <your_project_name>

$ cd <your_project_name>

// install tools
$ sudo npm -g install grunt-cli karma bower

// install node modules
$ npm install

// install dependencies
$ bower install

// build project and run express app
$ npm start
```

Structure
====

This project contains 2 parts

### 1. Frontend

```
src
  | app
    | state1
      | state1.substate1
      | state1.substate2
    | state2
    | ...
  | assets
  | common
    | feature1
      | feature1.js
      | feature1.tpl.html
      | feature1.spec.js
      | feature1.less
    | feature2
    | ...
  | less
    | main.less
    | variables.less
  index.html
vendor
  | ...
build
release
```

`app` contains all state structure, each state might have many views and many sub-states

`assets` folder contains images
  
`common` folder contains all common features here such as directives, API services

`less` folder contains less files

`index.html` loads all necessary JS, CSS files. This is single page application.

`vendor` folder is to store all bower components after you run `bower install`

`build` folder will be created after you run `grunt build`

`release` folder will be created after you run `grunt compile`

### 2. Backend (return dummy data)

```
app.js
routes
  | agencyLocationProperties.js
  | agencyLocations.js
  | ...
```

`app.js`: is the starting file. It loads all required node modules, link to `build` folder to get starting HTML file, define middlewares for REST API.

Files under `routes` folder are middlewares for REST API (you just need to return dummy JSON data)

References
====

###<a href="http://nodejs.org" target="_blank">NodeJS</a>

This is a NodeJS project, so you need to understand how NodeJS work.

<a href="http://expressjs.com/" target="_blank">ExpressJS - Nodejs web application framework</a>

We use expressjs to build fake backend api.

###<a href="http://angularjs.org" target="_blank">AngularJS - Superheroic JavaScript MVW Framework</a>

AngularJS is really an awesome JavaScript framework. It allows you to extend HTML vocabulary, easily reusable and many powerful features.

###<a href="https://github.com/angular-ui/ui-router" target="_blank">AngularUI Router - A solution for flexible routing with nested views</a>

Understand single page application, state structure, nested views

###<a href="http://gruntjs.com/" target="_blank">GruntJS - The JavaScript Task Runner</a>

We configure tasks and grunt helps run them automatically. Really awesome too!

###<a href="http://karma-runner.github.io/" target="_blank">Karma - Spectaculate Test Runner for JavaScript</a>

Run tests automatically.

###<a href="http://joshdmiller.github.com/ng-boilerplate" target="_blank">ngBoilerplate</a>

We follow ngBoilerplate to structure frontend folders & files.
