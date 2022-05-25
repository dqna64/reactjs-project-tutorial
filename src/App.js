import placesInfo from './assets/data.json'
import { useEffect, useState } from 'react'
import logo from './assets/logo512.png'
import './styles/App.css'
import './styles/Card.css'
import Card from './components/Card'

const AllPlaces = () => {
  const [places, setPlaces] = useState(placesInfo)
  const [addPlaceModal, setAddPlaceModal] = useState(false)

  const [allTags, setAllTags] = useState(['Burgers', 'Sashimi', 'Onigiri'])

  const [name, setName] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [location, setLocation] = useState('')
  const [website, setWebsite] = useState('')
  const [notes, setNotes] = useState('')
  const [rating, setRating] = useState(0)
  const [visits, setVisits] = useState(0)

  const [newTag, setNewTag] = useState('')

  const handleToggleTag = (toggledTag) => {
    if (selectedTags.includes(toggledTag)) {
      const newSelectedTags = [...selectedTags]
      newSelectedTags.splice(newSelectedTags.indexOf(toggledTag), 1)
      setSelectedTags(newSelectedTags)
    } else {
      const newSelectedTags = [...selectedTags, toggledTag]
      setSelectedTags(newSelectedTags)
    }
  }

  const handleAddPlace = (e) => {
    e.preventDefault()
    const newPlaceInfo = {
      placeId: places.length,
      name,
      tags: selectedTags,
      location,
      website,
      notes,
      rating,
      visits,
    }
    setPlaces([...places, newPlaceInfo])
  }

  const handleAddTag = (e) => {
    e.preventDefault()
    if (newTag.length > 0) {
      setAllTags([...allTags, newTag])
      setSelectedTags([...selectedTags, newTag])
      setNewTag("")
    }
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
        {places.map((place) => (
          <Card key={place.placeId} info={place} />
        ))}
        <form onSubmit={handleAddPlace}>
          <h1>Add a new place</h1>
          <p>
            Add a new restaurant, cafe, bar, bakery, patisserie or anything else to my collection of
            food places.
          </p>
          <label>
            Name of place
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Location
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </label>
          <label>
            Website
            <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </label>
          <label>Tags</label>
          <div className="tagButtonsContainer">
            {allTags.map((tag) => (
              <input
                type="button"
                className={`tagButton ${selectedTags.includes(tag) && 'tagButtonSelected'}`}
                value={tag}
                onClick={() => handleToggleTag(tag)}
              />
            ))}
          </div>
          <input
            type="text"
            id="newTagInput"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
          <input id="newTagSubmit" type="button" value="Add Tag" onClick={handleAddTag}/>

          <label>
            Notes
            <textarea type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>
          <input type="submit" value="Add Place" />
        </form>
      </main>
    </>
  )
}

export default AllPlaces
