import './styles/App.css'
import './styles/Card.css'
import logo from './assets/logo512.png'
import { useState } from 'react'
import Card from './components/Card'
import placesInfo from './assets/data.json'

const App = () => {

  const [places, setStates] = useState(placesInfo)

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
        <h1>My List</h1>
        <p>
          Here is a list of all the restaurants, cafes, dessert bars and other eateries that I want
          to keep a record of either because I like them, dislike them, or would like to find out.
        </p>
        {places.map((place, i) => <Card key={i} info={place}/>)}
      </main>
    </>
  )
}

export default App
