import React from 'react'
import Home from './Home'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Ask from './Ask'
import History from './History'
import HistoryDetails from './HistoryDetails'
const App = () => {
  return (
    <div className=''>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/ask' element={<Ask/>}/>
  <Route path='/history' element={<History/>}/>
  <Route path="/history/:id" element={<HistoryDetails />} />
</Routes>
    </div>
  )
}

export default App