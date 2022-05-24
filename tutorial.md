
### Tutorial steps
1. createRoot and render functions
1. jsconfig.json (explain as an aside) https://create-react-app.dev/docs/importing-a-component/#absolute-imports
1. Display a single place in the top-level component
1. Turn place element into a component and pass in props.
    - Fragment to deal with returning multiple elements side by side
1. Keep state of place info
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


### Todo

- [ ] Nav bar with logo and `Add Place` button which opens modal for adding new place
- [ ] Dynamic routing for place page??? maybe don't need
- [ ] Stuff in ###Features
- [ ] Footer
- [ ] Star input thing
- [ ] When new place created, scroll to new place card

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
        address: string, // Should real address indexed by Google Maps
        notes?: string, // User's personal notes on the restaurant
        visits: string[], // Array of UNIX timestamps
        rating?: number, // 0-5, 0 means not yet rated

    },
    ...
]
```