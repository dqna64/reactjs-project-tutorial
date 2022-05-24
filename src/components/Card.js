import { useCallback, useState } from 'react'
import '../styles/Card.css'

const Card = (props) => {

  const renderStars = useCallback((rating) => {
    let stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="star">
          ⭐
        </span>,
      )
    }
    return stars
  }, [])

  return (
    <div className="card">
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
            <div>
              {`${props.info.rating}/5`}
              {renderStars(props.info.rating)}
            </div>
          ) : (
            <div>Not rated yet</div>
          )}
        </div>
        <div className="visitsContainer">
          <div>
            {props.info.visits.length === 0
              ? 'You have not visited this place yet'
              : `Visited ${props.info.visits.length} times`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
