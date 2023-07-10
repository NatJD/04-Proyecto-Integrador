import { useState, useEffect } from 'react'

const Episodes = ({ seasonId }) => {
  const [episodes, setEpisodes] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

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

  const toggleEpisodes = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <div className={`season ${isExpanded ? 'expanded' : ''}`} onClick={toggleEpisodes}>
        Ver capitulos
      </div>
      {isExpanded && (
        <ul className='episodes-list'>
          {episodes.map((episode) => (
            <li key={episode.id}>
              {episode.number}: {episode.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Episodes
