import { useCallback, useState } from 'react'
import {ReactComponent as Star} from '../assets/star.svg'
import editIcon from '../assets/edit.svg'

const Card = (props) => {

  const renderStars = useCallback((rating) => {
    let stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Star key={i} className="starIcon"/>
      )
    }
    return stars
  }, [])

  return (
    <div className="card">
          <img className="iconBtn editBtn" src={editIcon} alt="Edit place info"></img>

      <h3>{props.info.name}</h3>
      <h4>{props.info.tags.join(' · ')}</h4>
      <h4>{props.info.address}</h4>
      <h4>
        <a href={props.info.website} target="blank">
          {props.info.website}
        </a>
      </h4>
      <p>{props.info.notes}</p>
      <div className="metricsContainer">
        <div className="ratingContainer">
          {props.info.rating > 0 ? (
            <>
              {`${props.info.rating}/5`}
              {renderStars(props.info.rating)}
            </>
          ) : (
            "Not rated yet"
          )}
        </div>
        <div className="visitsContainer">
            {props.info.visits.length === 0
              ? 'Not visited yet'
              : `Visited ${props.info.visits.length} times`}
        </div>
      </div>
    </div>
  )
}

export default Card
