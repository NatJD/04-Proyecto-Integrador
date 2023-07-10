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
    <div className='container'>
      {cast.map((actor) => (
        <div key={actor.person.id} className='box'>
          <img src={actor.person.image?.medium} alt={actor.person.name} />
          <div>
            <p>{actor.person.name}</p>
            <p>{actor.character.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cast
