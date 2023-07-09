import { useState, useEffect } from 'react'

const Episodes = ({ seasonId }) => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/seasons/${seasonId}/episodes`)
      .then((response) => response.json())
      .then((episodes) => {
        setEpisodes(episodes)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [seasonId])

  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.id}>{episode.number}: {episode.name}</li>
      ))}
    </ul>
  )
}

export default Episodes
