import 'styles/Card.css'

const Card = (props) => {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<span className="star">⭐</span>);
  }
  return (
    <div className='card'>
      <h3>{props.name}</h3>
      <h4>{props.tags.join(" · ")}</h4>
      <h4>{props.address}</h4>
      <h4><a href={props.website} target="blank">{props.website}</a></h4>
      <p>{props.notes}</p>
      <div>
        <div>{props.visits === 0 ? "Not yet visited" : `Visited ${props.visits} times`}</div>
        <div>{stars}</div>
      </div>
      <div>
        <button>Visit</button>
        <div>Rate ⭐⭐⭐⭐⭐</div>
      </div>

    </div>
  )
}

export default Card;