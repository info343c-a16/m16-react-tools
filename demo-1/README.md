# Demo-1
The purpose of this demo is to show how to import/export your own functions. To run this demo, you'll have to do the following:

- Fork/clone the repository
- Change your directory to this demo (`cd demo-1`), then run `npm install` to install the node modules
- Start the demo by running `npm-start`

Then, you can see a simple feet to meters converter app. The function `feetToMeters` was written in the `src/Utility.js` file, and then **imported** into the `app.js` file. It leverages **named exports**, so are exported as follows:

```javascript
// Export both named functions, in `src/Utility.js`
export {feetToMeters, metersToFeet} // named exports

```
These functions are then _imported_ into `src/App.js` as follows:

```javascript
// Import each named functions from Utility.js, in `src/App.js`
import {feetToMeters, metersToFeet} from './Utility'
```

Alternatively, if we wanted to have a prefix for each _exported named function_, we could have used this syntax:

```javascript
// Import our own components
import * as Utilities from './Utility';

// Then to use them -----
var meters = Utilities.feetToMeters(value);
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
