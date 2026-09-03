import React, { useState } from 'react'

function Eventarg() {

    const[login,setLogin]=useState({
        username:"",
        password:""
    });


function handleUsername(e)
{
    setLogin({

        ...login,
        username:e.target.value

        

    })
    
}

function hadndlePassword(e)
{
    setLogin({
        ...login,
        password:e.target.value
        
    })
}

function handleSubmit(e)
{
    e.preventDefault();
    console.log(login);
}


function sendData(e)
{

console.log(e.target);
console.log(e.target.className);
console.log(e.target.id);
console.log(e.target.name);

console.log(e.clientX);
console.log(e.clientY);
console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);
console.log(e.preventDefault());
console.log(e.stopPropagation())

}

function clickParent()
{
    alert("You clicked parent!!!");
}

function clickChild(e)
{

e.stopPropagation();
alert("You clicked child!!!");
}

return (
<div>


   <form className='border  p-4 shadow rounded-3 w-50 m-auto bg-light' onSubmit={handleSubmit}>

    <div className='mt-2'>
        <input type='text' placeholder='Username' name="username" className='form-control' onChange={handleUsername}/>
    </div>

     <div className='mt-2'>
        <input type='password' placeholder='Password' name="passsword" className='form-control' onChange={hadndlePassword}/>
    </div>

    <div className='mt-2'>
        <input type='submit' value="Login" className='btn btn-primary'/>
    </div>

   </form>


<button className='btn btn-danger' id="hello" name="btn" onClick={sendData}>Click</button>


<div style={{border:"1px solid grey",padding:"10px",background:"lightgreen"}} onClick={clickParent}>
    <h3>Parent</h3>

    <div style={{border:"1px solid grey",padding:"10px",background:"lightblue"}} onClick={clickChild}>
        <h4>Child</h4>
    </div>

</div>



</div>
)
}

export default Eventarg