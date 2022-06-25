import { useState } from 'react'
import closeIcon from '../assets/x-circle.svg'

const AddPlaceModal = (props) => {
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

  const handleCreateTag = (e) => {
    e.preventDefault()
    if (newTag.length > 0) {
      props.onCreateTag(newTag)
      setSelectedTags([...selectedTags, newTag])
      setNewTag('')
    }
  }

  const handleSubmitPlace = (e) => {
    e.preventDefault()
    const placeInfo = {
      name,
      tags: selectedTags,
      location,
      website,
      notes,
      rating,
      visits,
    }
    setName('')
    setSelectedTags([])
    setLocation('')
    setWebsite('')
    setNotes('')
    setRating('')
    setVisits('')
    setNewTag('')
    props.onSubmitPlace(placeInfo)
  }

  if (!props.show) {
    return null
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <form onSubmit={(e) => handleSubmitPlace(e)} onClick={(e) => e.stopPropagation()}>
        <img
          className="iconBtn closeModalBtn"
          onClick={props.onClose}
          src={closeIcon}
          alt="Close modal"
        ></img>
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
          {props.allTags.map((tag) => (
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
        <input id="newTagSubmit" type="button" value="Create Tag" onClick={handleCreateTag} />

        <label>
          Notes
          <textarea type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
        <input type="submit" value="Add Place" />
      </form>
    </div>
  )
}

export default AddPlaceModal
