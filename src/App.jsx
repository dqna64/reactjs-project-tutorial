import './styles/App.css'
import './styles/Card.css'
import logo from './assets/logo512.png'
import { ReactComponent as Star } from './assets/star.svg'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState("Machiavelli Ristorante Italiano")
  const [tags, setTags] = useState(["Pizza", "Pasta"])
  const [address, setAddress] = useState("123 Clarence St, Sydney NSW 2000")
  const [website, setWebsite] = useState("https://www.machiavelli.com.au")
  const [notes, setNotes] = useState("Authentic Italian restaurant serving a traditional Neapolitan cuisine. The Linguine Gamberi was good value but a little bland in flavour.")
  const [rating, setRating] = useState(4)
  const [visits, setVisits] = useState(["2022-03-19", "2022-05-15", "2022-05-20"])

  const renderStars = (numStars) => {
    let stars = []
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <Star className='starIcon' />
      )
    }
    return stars
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
        <h1>My List</h1>
        <p>
          Here is a list of all the restaurants, cafes, dessert bars and other eateries that I want
          to keep a record of either because I like them, dislike them, or would like to find out.
        </p>
        <div className="card">
          <h3>{name}</h3>
          <h4>{tags.join(" • ")}</h4>
          <h4>{address}</h4>
          <h4>
            <a href={website} target="blank">
              {website}
            </a>
          </h4>
          <p>{notes}</p>
          <div className="metricsContainer">
            <div className="ratingContainer">
              Rating {rating}/5
              {renderStars(rating)}
            </div>
            <div className="visitsContainer">Visited {visits.length} times</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
