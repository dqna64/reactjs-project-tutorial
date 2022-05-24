import placesInfo from './assets/data.json'
import { useEffect, useState } from 'react'
import logo from './assets/logo512.png'
import './styles/App.css'
import Card from './components/Card'

const AllPlaces = () => {
  const [places, setPlaces] = useState(placesInfo)
  const addPlace = (newPlaceInfo) => {
    const newPlaces = [...places] // Make copy of places array
    newPlaceInfo.placeId = newPlaces.length // Assign unique placeId to new place
    newPlaces.push(newPlaceInfo) // Add new place to the end of the new places array
    setPlaces(newPlaces) // Set state to the new places array
  }

  return (
    <>
      <header>
        <nav>
            Food
            <img src={logo} alt="logo" />
            Places
        </nav>
      </header>
      <main>
        <h1>All Places</h1>
        <p>
          Here is a list of all the restaurants, cafes, dessert bars and other eateries that I want
          to keep a record of either because I like them, dislike them, or would like to find out.
        </p>
        {places.map((place) => (<Card key={place.placeId} info={place} />))}
      </main>
    </>
  )
}

export default AllPlaces
