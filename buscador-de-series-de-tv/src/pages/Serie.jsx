import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Seasons from '../components/Seasons'

const Serie = () => {
  const [seri, setSeri] = useState({})
  const serieId = useParams().id

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${serieId}`)
      .then((response) => response.json())
      .then((serie) => {
        setSeri(serie)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [serieId])

  const removeTags = (html) => {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.textContent || div.innerText || ''
  }

  return (
    <div>
      <h1>Título: {seri.name}</h1>
      <p>
        Descripción: {seri.summary ? removeTags(seri.summary) : 'No hay descripción disponible'}
      </p>

      <h2>Temporadas:</h2>
      <Seasons serieId={serieId} />
    </div>
  )
}

export default Serie
