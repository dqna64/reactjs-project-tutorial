import Card from 'components/Card';
import 'styles/App.css';
import restaurant_data from 'data.json'
import { useState } from 'react';


const AllPlaces = () => {
  const [places, setPlaces] = useState(restaurant_data)
  const updatePlaces = (index, newPlaceDetails) => {
    const newPlaces = [...places]
    newPlaces[index] = newPlaceDetails
    setPlaces(newPlaces)
  }
  return (
<>
      <h1>All Places</h1>
      <p>Here is a list of all the restaurants, cafes, dessert bars and other eateries that I want to keep a record of either because I like them, dislike them, or would like to find out.</p>
      {places.map((place, index) => (<Card index={index} info={place} key={index} onUpdate={updatePlaces}/>))}
    </>
  )
}

export default AllPlaces