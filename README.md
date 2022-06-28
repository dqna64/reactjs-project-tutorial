# CSESoc ReactJS Project Tutorial 2022

This repository has the starter code for the CSESoc ReactJS Project Tutorial, a written set of exercises that teaches the fundamentals of the ReactJS front-end library by walking through the process of building a simple React application locally.

<p align="center">
<img src="https://imgur.com/sfHTEm4.png" alt="This tutorial walks you through building an app to track your favourite restaurants and cafes" width="60%" />
</p>

The default (main) branch of this repository has a starter template. Clone this repository to your system and follow the tutorials starting at [https://learn.csesoc.org.au/articles/reactjs-tut-0](https://learn.csesoc.org.au/articles/reactjs-tut-0) or [here](https://learning-platform-six.vercel.app/articles/reactjs-tut-0)

A full reference solution is available on the [`full-walkthrough`](https://github.com/dqna64/reactjs-project-tutorial/tree/full-walkthrough) branch of this repository.

To download this repository:

```bash
$ git clone https://github.com/dqna64/reactjs-project-tutorial.git
```

## Local Development

First, install all dependencies:

```bash
$ npm install
```

Then to start a development server,:

```bash
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

# Sources

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Additional modifications:

- removed testing framework from create-react-app setup
- create styles and components folders within src folder
- created jsconfig.json file to set baseUrl for absolute imports e.g. `import "styles/index.css"`

