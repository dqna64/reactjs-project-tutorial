import Layout from "components/Layout"
import Card from 'components/Card'
import placesInfo from 'data.json'
import { useState } from "react"

const Favourites = () => {
  const [places, setPlaces] = useState(placesInfo)
  return (<Layout>
    <h1>Favourite Places</h1>
    <p>Places I rate most highly.</p>
    {/* TODO: Add filter for places based on ratings */}
    {places.map((place, index) => (<Card index={index} info={place} key={index} />))}
  </Layout>)
}

export default Favourites