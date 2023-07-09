import { useState, useEffect } from 'react'
import SerieCard from '../components/SerieCard'
import Search from '../components/Search'

const Home = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = data.filter((item) => {
    return item.show.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => {
        return response.json()
      }).then((series) => {
        console.log(series)
        setData(series)
      }).catch((error) => {
        console.error(error)
      })
  }, [searchTerm])

  return (
    <div className='container'>
      <Search handleSearchChange={handleSearch} />
      <div className='row'>
        {
          filteredData.map((item) => (
            <SerieCard
              key={item.show.id}
              id={item.show.id}
              name={item.show.name}
              genres={item.show.genres.join(', ')}
              url={item.show.image?.medium}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
