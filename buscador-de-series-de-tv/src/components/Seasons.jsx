import { useState, useEffect } from 'react'
import Episodes from './Episodes'

const Seasons = ({ serieId }) => {
  const [seasons, setSeasons] = useState([])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${serieId}/seasons`)
      .then((response) => response.json())
      .then((seasons) => {
        setSeasons(seasons)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [serieId])

  return (
    <ul>
      {seasons.map((season) => (
        <li key={season.id}>
          Season {season.number}: {season.name}
          <Episodes seasonId={season.id} />
        </li>
      ))}
    </ul>
  )
}

export default Seasons
