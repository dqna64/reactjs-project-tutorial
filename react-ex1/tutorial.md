
### Tutorial steps
1. Display a single place in the top-level component
1. Turn place element into a component and pass in props.
    - Fragment to deal with returning multiple elements side by side
1. Keep state of place info
1. Event handler to change state of place visited count
1. Render a list of places
1. Routing
    - Install react-router-dom, notice package.json (already installed with npm install)
    - Create pages folder and add pages "All", "Favourites", "Frequent", "Add"
    - Add routing in `src/index.js` and `Outlet` in `App.js`
    - Create `src/AddPlace.js` page, show routing working
    - Build navigation bar component and add to `src/App.js`
    - Show no navigation bar in `src/AddPlace.js` so add navbar component to it
    - Dynamic routes to each place page
1. Child components
    - Motivation: Reduce repeated layout formatting for both `App.js` and `AddPlace.js`
    - Create `src/Layout.js` component
    - "Components can be reused as a parent of different sub-components by passing those sub-components as props to the parent component. In React, each component has a special `children` prop that can be used to access sub-components which it wraps around.

### Features
Pages
    - Home
    - All: shows all places the user has added to the addressbook
    - Favorites: Shows places in order of most highly rated
    - Frequent: Shows places in order of most frequently visited
    - Add: Add a new place to the addressbook

### Restaurant schema
Types of the places array data structure in TypeScript format
```ts
type place = [
    {
        id: number, // A unique identifier for the place
        name: string, // Name of restaurant
        tags: string[], // A few keywords describing the type of restaurant
        address: string, // Should real address indexed by Google Maps
        notes?: string, // User's personal notes on the restaurant
        visits: string[], // Array of UNIX timestamps
        rating?: number, // 0-5, 0 means not yet rated

    },
    ...
]
```