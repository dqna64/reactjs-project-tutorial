import { useState } from "react";
import { useParams } from "react-router-dom";
import data from 'data.json'
import Layout from "components/Layout";

const Place = () => {
  let params = useParams();
  const placeInfo = data.find(place => place.placeId === parseInt(params.placeId, 10));
  console.log(placeInfo)
  const [place, setPlace] = useState(placeInfo);

  return (
    <Layout>
      {place ? (
        <h1>{place.name}</h1>
      ) : (<p>{`Could not find place with placeId ${params.placeId}`}</p>)
              }
    </Layout>
  )
}

export default Place