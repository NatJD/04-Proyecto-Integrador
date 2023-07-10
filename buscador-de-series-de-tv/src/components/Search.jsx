const Search = ({ handleSearchChange }) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Buscar...'
        onChange={handleSearchChange}
        style={{ width: '100%' }}
      />
    </div>
  )
}
export default Search
