import React, { useState } from 'react'

function Formbind() {


  const[user,setUser]=useState({
    username:"",
    password:"",
    email:"",
    gender:"",
    city:"",
  });


  function handleUsername(e)
  {

    setUser({
      ...user,
      username:e.target.value

    })
  }

   function handlePassword(e)
  {

    setUser({
      ...user,
      password:e.target.value

    })
  }


    function handleEmail(e)
  {

    setUser({
      ...user,
      email:e.target.value

    })
  }



     function hadndleGender(e)
  {

    setUser({
      ...user,
      gender:e.target.value

    })
  }


      function handleCity(e)
  {

    setUser({
      ...user,
      city:e.target.value

    })
  }


  function handleSubmit(e)
  {

    e.preventDefault();
    console.log(user);
  }

return (
<div>

  <pre>
    {
      JSON.stringify(user)
    }
  </pre>

  <form className='border shadow p-4 m-auto w-50 rounded-2' onSubmit={handleSubmit}>

      <div>
        <h5 className='text-muted'>Register Here</h5>
      </div>


      <div className='mt-2'>
        <input type='text' placeholder='Username' className='form-control' value={user.username} onChange={handleUsername}/>
      </div>


      <div className='mt-2'>
        <input type='password' placeholder='Password' className='form-control' value={user.password} onChange={handlePassword}/>
      </div>


       <div className='mt-2'>
        <input type='email' placeholder='Email address' className='form-control' value={user.email} onChange={handleEmail}/>
       </div>


       <div>
          <label className='form-label'>Choose gender</label>
        </div>


       <div className='d-flex gap-2'>
      

        <div className='form-check'>
          <input type='radio' name="gender" value="male" checked={user.gender==="male"} className='form-check-input' onChange={hadndleGender}/>
          <label className='form-check-label'>Male</label>
        </div>

       <div className='form-check'>
          <input type='radio' name="gender" value="female" checked={user.gender==="female"} className='form-check-input' onChange={hadndleGender}/>
          <label className='form-check-label'   >Female</label>
        </div>

         <div className='form-check'>
          <input type='radio' name="gender" value="other" checked={user.gender==="other"} className='form-check-input' onChange={hadndleGender}/>
          <label className='form-check-label' >Other</label>
        </div>

       


       </div>



       <div className='mt-2'>
        <select className='form-select' value={user.city} onChange={handleCity}>
          <option>Select City</option>
          <option>hyd</option>
          <option>pune</option>
          <option>delhi</option>
        </select>
       </div>

       <div className='mt-2'>
        <input type='submit' className='btn btn-success'/>
       </div>

  </form>


</div>
)
}

export default Formbind