
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

# Intro

- What you'll learn in this tutorial
- What you'll do in this tutorial
- Prereqs

# Part 1: Setup

To set ourselves up for building a React application in this tutorial, we first need to install a few tools.

## NodeJS

NodeJS is a version of the popular JavaScript programming language that can run on your computer. We need it to power the development server which we will be running on our computer to develop our application.

To install NodeJS, go to to [nodejs.org](https://nodejs.org/en/) and install the version for your operating system.

## Code Editor

To write code, we need a code editor. Visual Studio Code is a popular code editor created and maintained by MicroSoft, and is recommended for this tutorial.

Go to [code.visualstudio.com](https://code.visualstudio.com/) to install a version of VSCode for your computer.

## Shell

To start a development server for building our application, we need to use a *shell* or command line.

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

The final thing we need is a package from npm called *Create React App* which sets up a React application for you to start building quickly.

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

Now let's use create-react-app to create a React app for us. We'll use npx, a package runner that also comes with NodeJS to run the create-react-app program, which will create the app in a new folder we call *my-react-app* (or any name you like).

```bash
npx create-react-app my-react-app
```

This will take a minute or two to download required packages and set up the project. Once it's done, go into the folder of the project.

```bash
cd my-react-app
```

Also open up the project in VSCode by opening up the VSCode open and opening the folder *my-react-app*.

![Open VSCode and open a folder](https://imgur.com/T6kP1ov)

![Select the my-react-app folder](https://imgur.com/8Zm3dEk)

You should now be able to see the source code of your new React app in your code editor!

![Your React source code app in VSCode](https://imgur.com/XzOhc6u)

In the next part we'll explore all the different parts of the code that create-react-app has given to us.
