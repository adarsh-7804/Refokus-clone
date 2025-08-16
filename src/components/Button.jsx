import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium '>{title}</span>
        <MdOutlineSubdirectoryArrowRight   />
    </div>
  )
}

export default Button