import placesInfo from './assets/data.json'
import { useEffect, useState } from 'react'
import logo from './assets/logo512.png'
import './styles/App.css'
import './styles/Card.css'
import Card from './components/Card'

const AllPlaces = () => {
  const [places, setPlaces] = useState(placesInfo)
  const addPlace = (newPlaceInfo) => {
    const newPlaces = [...places] // Make copy of places array
    newPlaceInfo.placeId = newPlaces.length // Assign unique placeId to new place
    newPlaces.push(newPlaceInfo) // Add new place to the end of the new places array
    setPlaces(newPlaces) // Set state to the new places array
  }

  const [allTags, setAllTags] = useState(['Burgers', 'Sashimi', 'Onigiri'])

  const [name, setName] = useState('')
  const [tags, setTags] = useState(['Burgers'])
  const [address, setAddress] = useState('')
  const [website, setWebsite] = useState('')
  const [notes, setNotes] = useState('')
  const [rating, setRating] = useState(0)
  const [visits, setVisits] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPlaceInfo = {
      placeId: places.length, name, tags, address, website, notes, rating, visits}
    setPlaces([...places, newPlaceInfo])
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
        <div className="card">fjdkslafjdl</div>
        <form onSubmit={handleSubmit}>
          <label>
            Name of place:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Tags:
            <select
            style={{ width: '100%' }}
              multiple
              defaultValue={tags}
            >
              {allTags.map((tag) => (
                <option key={tag} value={tag} onClick={
                (e)=>{const newVal = e.target.value
                tags.includes(newVal)
                  ? setTags([...tags].splice(tags.indexOf(newVal), 1))
                  : setTags([...tags, newVal])}}>
                  {tag + " " + (tags.includes(tag) ? 'selected' : 'unselected')}
                </option>
              ))}
            </select>
            <div>{tags}</div>
          </label>
          <label>
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <label>
            Website:
            <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </label>
          <label>
            Notes:
            <textarea type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>
          <input type="submit" value="Add place" />
        </form>
      </main>
    </>
  )
}

export default AllPlaces
