# Module 16: React Tools

## Overview
React and other modern JavaScript development approaches require leveraging a variety of external libraries, and often require other compilation steps such as **transpiling** to ES5, or bundling your JavaScript into a single file. There are a variety of tools available to make these steps easier, some of which we'll introduce here.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Resources
- [Getting Started with WebPack](https://webpack.github.io/docs/tutorials/getting-started/)
- [Node Package Manage (NPM) Documentation](https://docs.npmjs.com/)
- [React Create App](https://github.com/facebookincubator/create-react-app)
- [Node Download Page](https://nodejs.org/en/download/)
- [Using a Package.json File](https://docs.npmjs.com/getting-started/using-a-package.json)
- [An Intro to ES6 and NPM](http://wesbos.com/javascript-modules/)
- [Export Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [Import Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

## Importing and Exporting in ES6
One of the most powerful features of ES6 is the ability to import and export functions from files. This allows you to create reusable blocks of code that are easily integrated to multiple projects. Moreover, it means that you don't need to include an entire library -- you can just import the functions you want, and leave out the rest. This will help prevent namespace collisions and limit the file-size of your project.

This [article](http://wesbos.com/javascript-modules/) provides us with a working definition of _JavaScript Modules_:

>JavaScript modules allow us to chunk our code into separate files inside our project or to use open source modules that we can install via npm. Writing your code in modules helps with organization, maintenance, testing, and most importantly, dependency management.

We'll begin by writing a simple function that we can _export_ -- this will make the functions available to other scripts that _import_ them:

```javascript
// In our utility.js file, write a function that converts feet to meters
var feetToMeters = function(feet) {
    return feet / 3.28084
}

// Write another function metersToFeet
var metersToFeet = function(meters) {
    return meters * 3.28084
}

// Export each named function
export {feetToMeters, metersToFeet} // named exports

```

If we then wish to use `feetToMeters` in another function, we can simply import it:

```javascript
// In our main.js file, import the feetToMeters function
import {feetToMeters} from './utility' // assuming we're in the same directory

```

### Named v.s. default exports
The above example demonstrates the use of _named_ exports, in which we explicitly name each object we wish to export, and then explicitly name it to import it.


```javascript
// Utility.js ----------
// Write a function that converts feet to meters
var feetToMeters = function(feet) {
    return feet / 3.28084
}

// Export each named function
export {feetToMeters} // named exports

```

There are then three syntax options for importing **named exports**:

```javascript
// Importing options for a named export (see above)

// Option 1 -------- import named exports by name
import {feetToMeters, metersToFeet} from './Utility';
var meters = feetToMeters(30); // use function


// Option 2 -------- import named exports by name AS a shorter name
import feetToMeters as f2m from './Utility'
var meters = f2m(30); // use function


// Option 3 -------- import all named exports with a prefix
// Import our own components
import * as Utilities from './Utility';
var meters = Utilities.feetToMeters(30); // use function
```

Alternatively, you can export a **single default object** from a module:


```javascript
// Utility.js ----------
// Write a function that converts feet to meters
var feetToMeters = function(feet) {
    return feet / 3.28084;
};

// Export a single default module
export default feetToMeters; // single default export

```

Then, to import the **default export**, you can simply use the following syntax:

```javascript
import feetToMeters from './Utility.js'
```

To see a demo of importing/exporting, see [demo-1](demo-1).

## Node Package Manager (NPM)
Keeping track of all of the packages you need in a project is a cumbersome task. It requires that you have dozens of `<script>` tags in your HTML file, and it's easy to loose track of which versions of which libraries you're using. The _Node Package Manager_ (**NPM**) simplifies this process, and helps ensure that you have the files you need for your project. NPM is a command-line utility that you'll use to install the desired packages for your project.

As you may have guessed, NPM is a _Node_ application. Node is a server-side JavaScript engine for running JavaScript on your browser. Node is a _very_ powerful application that allows you to structure your client and server in the same language! However, because this is a _client-side_ development course, we'll only be using Node's NPM utility to install the packages we need for development.

### Set up
In order to use NPM, you first need to download and install Node, which you can do [here](https://nodejs.org/en/download/). Node **comes with NPM installed**, though you'll want to ensure that you have the latest version of NPM by running this command in the terminal (more [info](https://docs.npmjs.com/getting-started/installing-node)):

```bash
# Globally install the latest version on NPM on your machine
npm install npm@latest -g
```
You should now be able to use the NPM command-line utility to install packages (i.e., download files) for your projects.

### Installing Packages
The primary use of NPM in this course will be to install packages. You can do this directly on the command line by using the `npm install` command:

```bash
# Install the jQuery package
npm install jquery
```
The above line of code will download the necessary jQuery files into a new folder called `node_modules`. However, this can be cumbersome, so we can store all of the packages we want to download in a file.

You've likely encountered projects online that have a `package.json` file. This is a simple `.json` file that describes the packages necessary for development of the project, and should be kept in the **root** of your project. For example:

```javascript
{
  "name": "my-project",
  "version": "0.1.0",
  "dependencies": {
    "jquery": "*",  // Any version of jQuery
    "d3":">4.0" // Version 4 of great
  }
}

```

At a minimum, you must include a `name` and a `version` of your project. Then, you can include a list of packages you want to install as _dependencies_ for your project. For more information on declaring package version, see [here](https://docs.npmjs.com/files/package.json#dependencies). After you create a `package.json` file, you can install **all of your dependencies** by running this simple line of code:

```bash
# Install all dependencies in the package.json file
npm install
```

If you want to download another dependency, you can install the file _and_ save it to your `package.json` file if you include the `--save` flag:

```bash
# Install the latest version of material-ui, and update your package.json file:
npm install material-ui@latest --save
```

Moving forward, you can use this as a starting point for a `package.json` file, or run the `npm init` command _inside your project_ to create a new file. Now that we know how to install packages with NPM, we need to know how to integrate them into a project.

### .gitignore
Importantly, **you do not want to track your node_modules on GitHub**. It will slow down your process, and largely eliminates the point of using `npm`. So, you can create a file **in the root** of your project with the filename `.gitignore` that specifies files for git to ignore. To ignore your `node_modules` directory, you can simply include this code:

```bash
# .gitignore file

# Ignore node modules
node_modules/*
```

That will ignore **all directories** with the name `node_modules`. Then, if you want to start working on that project on another machine, simply clone the project and run `npm install` to install the libraries. Note, because a `.gitignore` file is _hidden_ (it begins with a `.`), you'll need to list _all_ files to see it (i.e., `ls -la`).

## Create-React-App
In order to leverage a more complex structure for our code (such as importing and exporting functions), we need to **compile our JavaScript** before loading it into the browser. There are a variety of tools that people use to do this such as [Gulp](http://gulpjs.com/), [Browserify](http://browserify.org/), and [Webpack](https://webpack.github.io/). These tools are great for configuring a build system for your project, but they can be time-consuming to configure (especially if you don't have any custom specifications that you're trying to make).

So, the folks over at React built an amazing tool called [create-react-app](https://github.com/facebookincubator/create-react-app), which combines multiple tools (including Webpack) to compile your code for you. It's super easy to get started:


```bash
# Globally install the create-react-app command-line utility: only do this once!
npm install -g create-react-app

# Create a project called my-app (in your current directory)
create-react-app my-app

# Change your directory to my-app
cd my-app/

# Start running a local server with your project: visible at localhost:3000
npm start
```

Create React App is somewhat opinionated about the structure of your code, but comes with a number of advantages. For example, it will display **errors in your browser** window, will **automatically reload** when your JavaScript changes, and will **inject CSS changes** without reloading your page. When you create a new project, the following files will be created:


```bash
my-app/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    favicon.ico
    index.html
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

From there, you can begin editing your `App.js` file. Your `<App/>` component is rendered on the page, so you should augment it as you see fit.
