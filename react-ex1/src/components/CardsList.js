import Card from 'components/Card'

const functionCardsList = (props) => {
  return (
    <>
      {props.places.map((place, index) => (
        <Card index={index} info={place} key={index} />
      ))}
    </>
  )
}

export default functionCardsList
