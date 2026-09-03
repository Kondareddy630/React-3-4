import React, { useState } from 'react'

function Event1() {


const[count,setCount]=useState(1);

const[msg,setMessage]=useState("hello");



function increment()
{
    setCount(count+1);

}

function decrement()
{
    setCount(count>1?count-1:1);
}

function sayHtml()
{

    setMessage("Html stands for hypertext markup language");

}

function sayJs(m)
{

    setMessage(m);
}
  return (
    <div>

   <h1>{msg}</h1>



<button className='btn btn-danger m-1' onClick={sayHtml}>Html</button>

<button className='btn btn-primary m-1' onClick={()=>setMessage("hello css")}>Css</button>

<button className='btn btn-info m-1' onClick={()=>{sayJs("add the functionality")}}>Js</button>





   <h1>{count}</h1>


     <button onClick={increment} className='btn btn-danger m-1'>Increment</button>
     <button onClick={decrement} className='btn btn-primary m-1'>Decrement</button>
   
    </div>
  )
}

export default Event1