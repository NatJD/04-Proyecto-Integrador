import { useState, useEffect } from 'react'
import SerieCard from '../components/SerieCard'

const Home = () => {
  const myRequest = new Request('https://api.tvmaze.com/shows')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((series) => {
        console.log(series)
        setData(series)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        {
            data.map((item) => (
              <SerieCard
                key={item.id}
                id={item.id}
                name={item.name}
                genres={item.genres.join(', ')}
                url={item.image?.medium}
              />
            ))
        }
      </div>
    </div>
  )
}

export default Home
