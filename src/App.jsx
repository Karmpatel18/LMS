
import './App.css'
import Hero from './components/hero_section/Hero'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <div className='flex   w-full justify-center '>

      <div className='font-poppins flex flex-col max-w-3xl w-full justify-center mx-[16px] sm:mx-[16px] md:mx-[0px] '>
        <div className="flex flex-col">
          <Navbar />
          
          <Hero />
          
          
        </div>
        
          
          
        
      </div>
    </div>
  )
}

export default App
