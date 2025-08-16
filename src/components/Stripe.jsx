import React from 'react';
// import React from "react";

const Stripe = ({val}) => {
   return (
    <div className='flex items-center justify-between w-[20%] px-4 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600' >
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe