import React from 'react'
const Footer = () => {
  return (
    <div className=' bg-white dark:bg-[#000] py-12 mt-24 '>
     
    <div className=' flex items-center justify-between w-[80%] mx-auto'>
    <div className=' flex items-center gap-3'>
        <div className=' h-[32px] w-[32px] bg-black rounded-full'></div>
        <h1 className=' text-black text-[22px] font-bold'>ismail nisar</h1>
        </div>

        <div className=' flex items-center gap-3 list-none'>
          <li className=' text-[#9f9d9d]'>Home</li>
          <li className=' text-[#9f9d9d]'>About</li>
          <li className=' text-[#9f9d9d]'>Processes</li>
          <li className=' text-[#9f9d9d]'>Contact</li>
          <li className=' text-[#9f9d9d]'>Blog</li>
        </div>

      <div className=' flex items-center gap-4 justify-center'>
            <p className=' text-[#9f9d9d]'>Privacy Policy</p>
            <p className=' text-[#9f9d9d]'>Terms & Conditions</p>
        </div>
    </div>
    </div>
  )
}

export default Footer