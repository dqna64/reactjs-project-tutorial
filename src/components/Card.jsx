import '../styles/Card.css'
import { ReactComponent as Star } from '../assets/star.svg'

const Card = (props) => {

    const renderStars = (numStars) => {
        let stars = []
        for (let i = 0; i < numStars; i++) {
          stars.push(
            <Star key={i} className='starIcon' />
          )
        }
        return stars
    }
    
    return (
        <div className="card">
          <h3>{props.info.name}</h3>
          <h4>{props.info.tags.join(" • ")}</h4>
          <h4>{props.info.address}</h4>
          <h4>
            <a href={props.info.website} target="blank">
              {props.info.website}
            </a>
          </h4>
          <p>{props.info.notes}</p>
          <div className="metricsContainer">
            <div className="ratingContainer">
              Rating {props.info.rating}/5
              {renderStars(props.info.rating)}
            </div>
            <div className="visitsContainer">Visited {props.info.visits} times</div>
          </div>
        </div>
    )
}

export default Card