import React from 'react'
import { Link } from 'react-router-dom'

const SerieCard = ({ id, name, genres, url }) => {
  return (
    <div className='col-md-3 my-3 d-flex align-items-stretch'>
      <div className='card'>
        <Link to={`/serie/${id}`}>
          <div className='image-container'>
            <img className='serie-image' src={url} alt={name} />
          </div>
        </Link>
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{genres}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SerieCard
