const Search = ({ handleSearchChange }) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Buscar...'
        onChange={handleSearchChange}
      />
    </div>
  )
}
export default Search
