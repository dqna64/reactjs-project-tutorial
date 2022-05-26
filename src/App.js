import placesInfo from './assets/data.json'
import { useEffect, useState } from 'react'
import logo from './assets/logo512.png'
import plusIcon from './assets/plus.svg'
import './styles/App.css'
import './styles/Card.css'
import Card from './components/Card'
import AddPlaceModal from './components/AddPlaceModal'

const AllPlaces = () => {
  const [places, setPlaces] = useState(placesInfo)
  const [showModal, setShowModal] = useState(false)

  const [allTags, setAllTags] = useState(['Burgers', 'Sashimi', 'Onigiri'])

  const handleUpsertPlace = (placeInfo) => {
    setShowModal(false)
    const newPlaces = [...places]
    if (placeInfo.id) {
      for (let i = 0; i < newPlaces.length; i++) {
        if (newPlaces[i].placeId === placeInfo.placeId) {
          newPlaces[i] = placeInfo
          setPlaces(newPlaces)
          return
        }
      }
    } else {
      placeInfo.placeId = places.length
      setPlaces([...newPlaces, placeInfo])
    }
  }

  const handleRemovePlace = (placeId) => {
    const newPlaces = [...places]
    for (let i = 0; i < newPlaces.length; i++) {
      if (newPlaces[i].placeId === placeId) {
        newPlaces.splice(i, 1)
        break
      }
    }
    setPlaces(newPlaces)
  }

  const handleCreateTag = (newTag) => {
    if (!allTags.includes(newTag)) {
      setAllTags([...allTags, newTag])
    }
  }

  return (
    <>
      <header>
        <nav>
          Food
          <img src={logo} alt="logo" />
          Places
          <button id="addPlaceBtn" onClick={() => setShowModal(true)}>
            Add Place
            <img
              src={plusIcon}
              alt="Add Place Icon"
              height="16"
              style={{ marginLeft: '0.3rem', marginRight: '-0.3rem' }}
            />
          </button>
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

        <AddPlaceModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSubmitPlace={handleUpsertPlace}
          allTags={allTags}
          onCreateTag={handleCreateTag}
        />
      </main>
    </>
  )
}

export default AllPlaces
