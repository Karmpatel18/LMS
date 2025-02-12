import { NavLink } from 'react-router-dom';
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
        className='decoration-none !no-underline ' ><div className="bg-neutral-900 text-neutral-50 px-3 py-2 rounded-md cursor-pointer">Get started</div></NavLink>
      </div>
    </div>
  )
}

export default Navbar
