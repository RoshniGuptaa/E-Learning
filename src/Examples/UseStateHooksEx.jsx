import React, { useState } from 'react'

export default function UseStateHooksEx() {
  const[count,setCount]=useState(0);
  //Using React
  let countJS=0;
  function countInJs(e){
    if(e.target.classList.contains("+")){
      console.log(countJS);
      return (countJS++);
    }
    else{
      console.log(countJS);
      return (countJS--);
    }
  }
  return (
    <div>
       <h1>UseStateHookEx</h1>
       {/* Using Js */}
       <button className="btn +" onClick={(e)=>countInJs(e)}>+</button>
       <span>Your number is {countJS}</span>
       <button className='btn' onClick={(e)=>countInJs(e)}>-</button>
       {/* Using Use State and react */}

       <button className="btn +" onClick={(e)=>setCount(count+1)}>+</button>
       <span>Your number is {count}</span>
       <button className='btn' onClick={(e)=>setCount(count-1)}>-</button>
       
     </div>
  )
}
