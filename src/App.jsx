import { Navbar } from './components/ui/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Work } from './pages/Work'

function App() {
  return (
    <div className='bg-black relative pt-[100px]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
      </Routes>
    </div>
  )
}

export default App
