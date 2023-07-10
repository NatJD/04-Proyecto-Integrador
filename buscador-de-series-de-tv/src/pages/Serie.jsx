import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Seasons from '../components/Seasons'
import Cast from '../components/Cast'

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
      <h1 className='title-h1'>{seri.name}</h1>
      {seri.image && <img src={seri.image.medium} alt={seri.name} />}
      <p>
        Descripción: {seri.summary ? removeTags(seri.summary) : 'No hay descripción disponible'}
      </p>

      <h2 className='title-h2'>Temporadas:</h2>
      <Seasons serieId={serieId} />

      <h2 className='title-h2'>Reparto:</h2>
      <Cast serieId={serieId} />
    </div>
  )
}

export default Serie
