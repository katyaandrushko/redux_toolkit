import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor, resetColor } from '../features/theme'

function ChangeColor() {
   const [color, setColor] = useState('')
   const dispatch = useDispatch()

   return (
      <div>
         <input
            type="text"
            onClick={(e) => {
               setColor(e.target.value)
            }}
         />
         <button
            onClick={() => {
               dispatch(changeColor(color))
            }}
         >
            Change color
         </button>
         <button
            onClick={() => {
               dispatch(resetColor())
            }}
         >
            Reset color
         </button>
      </div>
   )
}

export default ChangeColor
