
### Tutorial steps
1. Display a single restaurant in the top-level component
1. Turn restaurant element into a component and pass in props.
1. Keep state of restaurant info
1. Event handler to change state of restaurant visited count
1. Render a list of restaurants

### Restaurant schema
Types of the restaurants array data structure in TypeScript format
```ts
type restaurant = [
    {
        name: string, // Name of restaurant
        tags: string[], // A few keywords describing the type of restaurant
        address: string, // Should real address indexed by Google Maps
        notes?: string, // User's personal notes on the restaurant
        visits: number, // 0 or more
        rating?: number, // 0-5, 0 means not yet rated

    }
]
```