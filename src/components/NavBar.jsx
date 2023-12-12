

const NavBar = () => {
  return (
    <div className='flex justify-between w-full h-screen fixed text-white px-32 py-4'>
      <div>
       <h2 className="font-Signature text-[20px]">Mahlet Seleshi</h2>
      </div>
      

      <div>
        <ul className="flex items-center gap-10">
            <li className="text-Yellow">Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Experince</li>
            <li>Contact</li>

        </ul>
      </div>
      
    </div>
  )
}

export default NavBar
