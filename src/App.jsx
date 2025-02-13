import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import './App.css'
import Hero from './components/hero_section/Hero'
import Navbar from './components/navbar/Navbar'
import Signup from './components/auth/Signup';

function App() {


  return (
    <Router>
    <div className='flex w-full min-h-screen items-start '>  
    <div className='flex   w-full justify-center '>

      <div className='font-poppins flex flex-col max-w-3xl w-full justify-center mx-[16px] sm:mx-[16px] md:mx-[16px] lg:mx-0 '>
        <div className="flex flex-col">
          <Navbar />
          <Routes>
          <Route path='/' element={<Hero/>}/>  
          <Route path='/about' element={<div>hello from about us page</div>}/>
          <Route path='/signup' element={<Signup/>}/>
          
          
          </Routes>
        </div>
        
          
          
        
      </div>
    </div>
    </div> 
    </Router>
  )
}

export default App
