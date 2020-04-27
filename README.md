# Brainy Sight Words Web App
Brainy Sight Words is a React-based web application that aims to teach children from pre-K to second grade how to sight words. This project was developed for Dr. Walter Evans, an English professor at Augusta University, over the Fall 2019 and Spring 2020 semesters at Georgia Tech by Jason Au, Tu Nguyen, Luan Nguyen, Duc Le, and Advaith Sekharan. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Release Notes
*April 20, 2020*

### New Features
Added Reward System 

Added Learning Modules

Added Quiz Modules
 
### Bug Fixes
Displaying examples for each word consecutively.
Correcting sound indication for getting the correct answer.
 
### Known Bugs
No persistence method for Reward System

Star display not yet implemented

Space between images are rather large in the current version.
 
## Installation
 
### Prerequisites
You must have Node.js installed. If not, you can download from https://nodejs.org/en/download/
 
### Dependencies
Download and Install bootstrap 4.3.1

Download and Install react

Download and Install redux

Download and Install redux-thunk

Download and Install responsive carousel

Download and Install slideshow-image

You may install all dependencies (for example, React Router) with `npm `:

### `npm install --save react-router-dom`
Alternatively you may use `yarn`:
### `yarn add react-router-dom`
**Note: This works for any library, not only `react-router-dom`.**

### Download
https://github.com/advaith101/BrainySightWordsWeb
 
### Build
### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you are not satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
 
### Run
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Troubleshooting
Below are the common errors that occur during the installation of the applcaition and how to fix them:
1. `npm install` not working - this usually occurs when you are not in the correct directory, make sure that you `cd <pathtodirectory>`  to the right directory before trying `npm install`.
2. `npm start` not working - this is probably because you do not have all the dependencies installed. If you do not have all the required dependencies, type `npm install --save react-router-dom` in the terminal to install before launching the application. Then, simply type `npm install` (make sure that you are in the project directory, and then type `npm start` in terminal to launch the application.
3. "Cannot find module" error - this occurs because you don't have all the dependencies installed. Type `npm install` in terminal of project directory and try running again.

## License
[MIT](https://choosealicense.com/licenses/mit/)
