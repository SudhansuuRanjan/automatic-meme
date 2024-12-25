import React from 'react'
import { GoDotFill } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";

const Repository = ({ data }) => {
  return (
    <div className='border-t border-gray-200 p-3'>
      <div className='flex gap-1 items-center'>
        <h4 className='font-semibold text-gray-800'>
          {data.name}
        </h4>
        <div className='text-[#175CD3] bg-[#EFF8FF] border rounded-full w-fit h-fit px-2 leading-0 -py-1 text-xs border-[#B2DDFF]'>
          {data.isPrivate ? 'Private' : 'Public'}
        </div>
      </div>
      <div className='mt-2 flex flex-wrap gap-6'>
        <div className='flex text-sm items-center gap-1'>
          <div>
            {data.language}
          </div>
          <GoDotFill className='text-[#1570EF]' />
        </div>

        <div className='flex text-sm items-center gap-1'>
          <BsDatabase/>
          <div>
            {data.size}
          </div>
        </div>

        <div className='flex text-sm items-center gap-1'>
          <div>
           Updated {data.updated}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repository