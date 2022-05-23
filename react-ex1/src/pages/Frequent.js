import Layout from "components/Layout"
import Card from 'components/Card'
import placesInfo from 'data.json'
import { useState } from "react"

const Frequent = () => {
  const [places, setPlaces] = useState(placesInfo)
  return (<Layout>
    <h1>Frequent Places</h1>
    <p>Places I visit most frequently.</p>
    {places.map((place, index) => (<Card index={index} info={place} key={index} />))}
  </Layout>)
}

export default Frequent