# CSESoc ReactJS Project Tutorial 2022

This repository has the starter code for the CSESoc ReactJS Project Tutorial, a written set of exercises that teaches the fundamentals of the ReactJS front-end library by walking through the process of building a simple React application locally.

The default (main) branch of this repository has a starter template. Download this repository and follow the tutorials at [https://learning-platform-six.vercel.app/articles/reactjs-tut-0](https://learning-platform-six.vercel.app/articles/reactjs-tut-0).

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
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Source of Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Additional modifications:

- removed testing framework from create-react-app setup
- create styles and components folders within src folder
- created jsconfig.json file to set baseUrl for absolute imports e.g. `import "styles/index.css"`

