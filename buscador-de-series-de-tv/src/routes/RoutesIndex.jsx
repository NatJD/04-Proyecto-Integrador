import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Serie from '../pages/Serie'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/serie/:id' element={<Serie />} />
    </Routes>
  )
}

export default RoutesIndex
