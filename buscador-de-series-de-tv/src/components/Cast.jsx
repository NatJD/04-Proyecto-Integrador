import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Cast = () => {
  const [cast, setCast] = useState([])
  const serieId = useParams().id

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${serieId}/cast`)
      .then((response) => response.json())
      .then((cast) => {
        setCast(cast)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [serieId])

  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.person.id}>
            <img src={actor.person.image?.medium} alt={actor.person.name} />
            <div>
              <p>{actor.person.name}</p>
              <p>{actor.character.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cast
