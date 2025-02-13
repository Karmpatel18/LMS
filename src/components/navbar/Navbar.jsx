import { NavLink } from 'react-router-dom';
import { AnimatedShinyText } from '../animations/AnimatedShinyText';
function Navbar() {
  return (
    <div className='flex justify-between  py-4 mt-2 items-center    '>
      <div className='font-semibold tracking-tighter text-xl'>LMS</div>
      <div className='flex gap-8 text-sm tracking-tighter items-center '>
        <NavLink to='/'
          className={({ isActive }) =>
            isActive
              ? "decoration-none  !text-neutral-900  duration-200  text-sm  !underline !decoration-[2px] decoration-neutral-900   tracking-tighter  transition-all "
              : "decoration-none    !no-underline !text-neutral-600 !hover:text-neutral-800   text-sm transition-all duration-200 tracking-tighter  "
          }>Home</NavLink>
        <NavLink to='/about' 
          className={({ isActive }) =>
            isActive
              ? "decoration-none  !text-neutral-900  duration-200  text-sm !underline  !decoration-[2px] decoration-neutral-900 tracking-tighter  transition-all "
              : "decoration-none !no-underline !text-neutral-600 !hover:text-neutral-800   text-sm transition-all duration-200 tracking-tighter  "
          }>About</NavLink>
         
        
        <NavLink to='/signup' 
        className=' !no-underline ' ><div className="bg-neutral-100 border-[1px] group border-neutral-200 text-neutral-50 px-3 py-2 rounded-md cursor-pointer hover:bg-neutral-200 transition-colors duration-300"><AnimatedShinyText shimmerWidth={120} className='inline-flex items-center justify-center  transition ease-out group-hover:text-orange-600 hover:duration-300 group-hover:dark:text-orange-600'> Get started </AnimatedShinyText></div>
        </NavLink>
       
      </div>
    </div>
  )
}

export default Navbar
