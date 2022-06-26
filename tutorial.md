
### Tutorial steps
1. createRoot and render functions
1. Display a single place in the top-level component
1. Turn place element into a component and pass in props.
    - Fragment to deal with returning multiple elements side by side
1. add place form
    - Keep state of place info
    - form, input and types, label
    - create modal
1. Event handler to change state of place visited count
1. Render a list of places
1. Sort by rating and visited, filter by tags, partially left as exercise to reader
1. Lifecycle methods (useEffect)
    - When sort options selected and we add a new place, sorted arrays should be resorted

The following can be covered in other tutorials with more suitable sample projects

1. Component composition
    - Motivation: Reduce repeated layout formatting for both `App.js` and `Place.js`
    - Create `src/Layout.js` component
    - "Components can be reused as a parent of different sub-components by passing those sub-components as props to the parent component. In React, each component has a special `children` prop that can be used to access sub-components which it wraps around.
1. Routing
    - Install react-router-dom, notice package.json (already installed with npm install)
    - Create pages folder and add page "Place"
    - Add routing in `src/index.js`
    - Dynamic routes to each place page, place id as url parameter
    - Create `src/Place.js` page, `useParams`, show routing working
    - Build navigation bar component and add to `src/App.js`
    - Show no navigation bar in `src/Place.js` so add navbar component to it
    - Make cards clickable to link to place page and place page button to go back
1. React Context
    - AllPlaces, Favourites, Frequent -> CardsList -> Card
    - prop drilling becomes an issue, places state and updatePlaces method
    - Different pages need to share data
    - Use a react context to store the places data and provide update methods
1. CSS modules
1. google map

### Todo

- [ ] Nav bar with logo and `Add Place` button which opens modal for adding new place
- [ ] Style add place modal
    - star select and visits counter
- [ ] Style place cards
- [ ] Stuff in ###Features
- [ ] Footer
- [ ] Star input thing
- [ ] When new place created, scroll to new place card
- [ ] icons for location and website

tutorials
- [ ] install git and git clone project
- [ ] code blocks filenames

### Features
Pages
    - Home
    - All: shows all places the user has added to the addressbook
    - ??Favorites: Shows places in order of most highly rated~~
    - ??Frequent: Shows places in order of most frequently visited~~
    - Could just use filtering and sorting for the above two instead? Actually having these as pages could be good for demoing jsx, state and list rendering before making routes to multiple pages that follow a similar pattern (just sorting the list by fn)
    - ???Add: Add a new place to the addressbook [could jsut be a modal]
    - ??Place page: A page displaying a place, with edit mode
    - tbh a modal makes more sense for editing and adding new place.
    - Question: What new pages do we make to demo routing? Has to be something that comes after teaching state, lifecycle, event handling etc bc it has to come after routing

### Restaurant schema
Types of the places array data structure in TypeScript format
```ts
type place = [
    {
        placeId: number, // A unique identifier for the place
        name: string, // Name of restaurant
        tags: string[], // A few keywords describing the type of restaurant
        location: string, // Be as specific or unspecific as you want
        website?: string, // Should be real website of the establishment
        notes?: string, // User's personal notes on the restaurant
        visits: string[], // Array of UNIX timestamps
        rating?: number, // 0-5, 0 means not yet rated

    },
    ...
]
```

# Other

- SHow resources for html, css, js. Preferably small articles so its not too overwhelming

# Intro

- What you'll learn in this tutorial
- What you'll do in this tutorial
- Prereqs
    - Don't need to understand css. Past HTML experience helpful but you'll pick it up very quickly through this tutorial.

# Part 1: Setup

To set ourselves up for building a React application in this tutorial, we first need to install a few tools.

## NodeJS

NodeJS is a version of the popular JavaScript programming language that can run on your computer. We need it to power the development server which we will be running on our computer to develop our application.

To install NodeJS, go to to [nodejs.org](https://nodejs.org/en/) and install the version for your operating system.

## Code Editor

To write code, we need a code editor. Visual Studio Code is a popular code editor created and maintained by MicroSoft, and is recommended for this tutorial.

Go to [code.visualstudio.com](https://code.visualstudio.com/) to install a version of VSCode for your computer.

## Shell

To start a development server for building our application, we need to use a **shell** or command line.

On Mac you can use your built-in Terminal app.

On Windows you can use the Command Prompt app.

The shell allows us to use some of the tools we have installed. Open your command line and type:

```bash
node -v
```

and press enter. This tests whether you have installed NodeJS correctly. If you have, it should print the version of NodeJS which you have installed, such as `16.15.0`.

Installing NodeJS also automatically installs NPM (Node Package Manager) which manages JavaScript packages for your projects. To check that it has installed properly, type into your command line:

```bash
npm -v
```

If installed properly it will show its version, such as `8.5.5`.

## Create React App

The final thing we need is a package from npm called **Create React App** which sets up a React application for you to start building quickly.

To install the Create React App package, run the following on your command line:

MacOS:

```bash
sudo npm install --global create-react-app
```

Windows:
```bash
npm install --global create-react-app
```

In MacOS you may need the `sudo` command in order to run the line with elevated privileges. It may prompt you to enter your Mac user password.

Now let's use create-react-app to create a React app for us. We'll use npx, a package runner that also comes with NodeJS to run the create-react-app program, which will create the app in a new folder we call **my-react-app** (or any name you like).

```bash
npx create-react-app my-react-app
```

This will take a minute or two to download required packages and set up the project. Once it's done, go into the folder of the project.

```bash
cd my-react-app
```

Also open up the project in VSCode by opening up the VSCode open and opening the folder **my-react-app**.

![Open VSCode and open a folder](https://imgur.com/T6kP1ov)

![Select the my-react-app folder](https://imgur.com/8Zm3dEk)

You should now be able to see the source code of your new React app in your code editor!

![Your React source code app in VSCode](https://imgur.com/XzOhc6u)

In the next tutorial we'll explore all the different parts of the code that create-react-app has given to us.


# Part 2: The React App

In the last tutorial you installed all the tools we'll need to create a React app, and opened the source code in your code editor. create-react-app has given us a lot of files in the starter project so in this tutorial we'll walk through each file and see what they do.

![React app files](https://imgur.com/tv27w5k)

> The pretty icons you see next to the files in this screenshot come from an extension from the VSCode extensions marketplace. To get the same icons, go to *Extensions* tab on the VSCode sidebar and search for *Material Icon theme* and install it.

For the purposes of this tutorial, a lot of the files created for us are unnecessary. Before we continue, let's declutter our workspace by deleting these files which we won't need:

- 

The **README.md** file at the bottom has some instructions for how to use this project and some links to React resources. The .md extension stands for *markdown*, a common text editing syntax to format text. It is not code; markdown is to make text readable for humans.

In general you should use a **README.md** in a project to give an overview of what your project does, how to use it, and any other information you think would be useful for people interested in your code.

The **package.json** file records all the packages that this project depends on i.e. *dependencies*. It is what npm uses to manage versions of these dependencies which your project depends on and download them when other people try to run your app on their computers.

**package-lock.json** also tracks dependencies but in greater depth (dependencies of dependencies etc).

![package.json](https://imgur.com/qxGaZQZ)

The **.gitignore** file specifies files and directories (folders) that should be ignored by the git version control system. We'll talk more about it later.

The **node_modules** folder is a very big folder containing the actual code of the packages that your project uses i.e. dependencies. You usually won't need to look into it, but when you import packages into your project's code, here is where the packages are stored.

The **public** folder contains static **assets** like images, icons and html for your web app. The most important one is **index.html**. This is the html file that will begin rendering your web app in a browser. Open this file and find the following tag:

```jsx
<div id="root"></div>
```

This is called the "root" DOM node of your app which is where your React app will render. DOM stands for "Document Object Model" and keeps track of all the elements (e.g. `<div></div>`) that your HTML page wants to render in your browser.

Most of your time building a React app will be spent on files in the **src** folder (source code). Let's open this folder and go through the contents.

The **src/assets/** folder contains some images, svg icons and dummy data that we'll use for this tutorial's project.

The **src/styles/** folder contains some stylesheets (.css files) made for this project which we'll use to enhance the appearance of the components we'll be making. You won't need to understand the css to work through this tutorial series.

**src/index.js** creates a root ReactDOM node linked to the root DOM node we saw in **public/index.html**.

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
```

You won't need to understand the details behind ReactDOM and how it interacts with DOM; its whole purpose is to handle the transformation of React code to HTML elements so you don't have to. Just understand that this `root` node `render`s the `App` component, which is the one part of all this starter source code that we actually care about in this tutorial.

Notice how the `App` component is imported from the `./App`. `./App` is a pathname where `.` means "same directory as this file" and `App` refers to the file called **App.jsx**.

In the next tutorial we will start working in **src/App.jsx** on real React code!

# Part 3

Your web browser renders HTML pages which usually contain something like this:

```html
<div>
    <h1>Hello HTML</h1>
    <p>Some text wrapped in HTML p tags</p>
    <div>
        <div>Some text inside a div inside a div</div>
        <img src="path/to/image.png" alt="An image" />
    </div>
</div>
```

Your HTML page is composed of HTML elements like `<h1>Title</h1>`.

ReactJS has a similar syntax for rendering HTML elements. In fact, the above HTML code looks the same when translated into React. This is because React elements are created using a language which was developed specifically for React called JSX. JSX is a JavaScript syntax extension which looks very similar to HTML.

```js
const reactElement = <h1>Hello React</h1>
```

The above example shows a JavaScript constant variable being assigned to the return value of some JSX `<h1>Hello React</h1>`. The return value is a ReactDOM element, which the React DOM will eventually transform into the actual HTML element `<h1>Hello React</h1>` to be rendered in the browser.

Let's open up **src/App.jsx**. The file has the .jsx extension which means the file contains jsx code.

```jsx
const App = () => {
  return (
    <h1>Hello React</h1>
  )
}

export default App
```

The file has a JavaScript arrow function called `App` which returns the React element `<h1>Hello React</h1>`. JavaScript arrows functions look a bit strange, but it's works pretty much the same as functions in any other language as far as we are concerned. Here are some examples of how JS arrow functions are very similar to what you might be familiar with in other languages.

An arrow function in JavaScript:
```js
const add = (a, b) => {
    return a + b
}
```

works the same as a regular function in JavaScript:
```js
function add(a, b) {
    return a + b
}
```

works the same as a function in Python:
```python
def add(a, b):
    return a + b
```

works the same as a function in C:
```c
int add(int a, int b) {
    return a + b;
}
```

The last line of **src/App.jsx**:

```jsx
export default App
```

simply makes the `App` function available to be imported into other files. In the case of this project it is imported in **src/index.js** as we saw in the last tutorial.

---

A React project is mainly made up of "components" which you can think of a separate blocks of HTML elements which are each responsible for their own state and functionality. A component is made using a function such as the `App` function we have in **src/App.jsx**.

With the starting code we have at the moment, **src/index.js** imports the `App` component and renders it using the root React element. This is enough to work as a basic React app, so let's try to run it!

If you open **package.json** you will see some "dependencies" including "react", "react-dom" and "react-scripts". We need to install these dependencies for our project to work. Open your shell and go into this project's directory. Then run this command:

```bash
npm install
```

This will download and install all the packages that this project depends on, listed in **package.json**.

In **package.json** you will also see some "scripts" which maps some keywords like `"start"` to commands like `"react-scripts start"`. To start a development server for working on our project, run this command:

```bash
npm start
```

Your React app will then open in the browser at a url like *[http://localhost:3000](http://localhost:3000)*.

![Your React app in the browser at localhost:3000](https://imgur.com/QlQHBQ3)

In the next tutorial we will start coding in the `App` component to get some more elements showing on the app.

