
import './App.css'
import Hero from './components/hero_section/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <div className='flex  w-full justify-center '>
      
    <div className='font-mono flex flex-col max-w-3xl w-full justify-center  '>
      <Navbar/>
      <Hero/>
    </div>
    </div>
  )
}

export default App
