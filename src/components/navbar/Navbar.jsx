
function Navbar() {
  return (
    <div className='flex justify-between  py-4 mt-2 items-center    '>
      <div className='font-semibold tracking-tighter text-xl'>LMS</div>
      <div className='flex gap-6 text-sm tracking-tighter items-center'>
        <div>Home</div>
        <div>About</div>
        <div className="bg-neutral-900 text-neutral-50 px-3 py-2 rounded-md cursor-pointer">Get started</div>
      </div>
    </div>
  )
}

export default Navbar
