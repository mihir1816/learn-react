import React, { useId } from 'react'
import { forwardRef } from 'react';

const Select = function Select({
    options , 
    lable , 
    className , 
    ...props
} , ref ) {

    const id = useId() ; 
  return (
        
      <div className='w-full'>
        {lable && <lable htmlfor={id}  > </lable>}
          <select
          id={id} 
          ref = {ref}
        {...props}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          >
            {
                options?.map(( option ) =>(
                    <option key={option} value={option} >
                        {option}
                    </option>
                ) )
            }
          </select>
      </div>
  )
}

export default forwardRef(Select) ; 