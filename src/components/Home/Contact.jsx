import React from 'react'
import contact from '../../assets/contact.png'
import email from '../../assets/email.png'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/4.png'
import sent from '../../assets/sent.png'
const Contact = () => {
  return (
    <div className=' w-[80%] mx-auto flex justify-between bg-white p-12 rounded-2xl'>
        <div className=' flex flex-col gap-6 w-[40%]'>
            
        <h1 className=' text-[33px] font-bold'>Let’s discuss your Project</h1>
        <p>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
        <div className=' flex items-center gap-3 bg-[#f7f7f7] py-3 px-6 rounded-full'>
            <img src={contact} alt="" />
            <h1>+92 345 346 543</h1>
        </div>
        <div className=' flex items-center gap-3 bg-[#f7f7f7] py-3 px-6 rounded-full'>
            <img src={email} alt="" />
            <h1>eventfuLcae@gmail.com</h1>
        </div>
        <div className=' flex items-center gap-3'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
        </div>

        <div className=' flex flex-col gap-3 w-1/2'>
            <div  className=' flex items-center gap-4'>
                <input className=' border-[#0000001A] py-3 px-6 border-[1px] w-full rounded-md' type="text" placeholder='First Name'  />
                <input className=' border-[#0000001A] py-3 px-6 border-[1px] w-full rounded-md' type="text" placeholder='Last Name'  />
            </div>
            <input className=' border-[#0000001A] py-3 px-6 border-[1px] rounded-md' type="text" placeholder='Email'  />
             <textarea className=' border-[#0000001A] py-3 px-6 border-[1px] rounded-md' rows="6" placeholder='Message'></textarea>
            <button className=' flex items-center gap-3 bg-[#EF3C59] py-3 px-6 rounded-md text-white w-fit'>Submit <img src={sent} alt="" /></button>
        </div>
    </div>
  )
}

export default Contact