import React, { useEffect, useState } from 'react'

function Users() {


const[users,setUsers]=useState([]);


useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then((users)=>setUsers(users))
    .catch((error)=>console.log(error))
},[]);


  return (
    <div className='container mt-5'>


     <h2 className='text-secondary'>List of Users</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, porro. Voluptatem veritatis perferendis eligendi at repudiandae culpa animi ullam, excepturi quidem reiciendis cupiditate? Tempora assumenda culpa voluptas, cum sit quo quibusdam, eum corrupti quidem harum ipsa mollitia architecto ipsum provident?</p>

     <table className='table table-bordered shadow table-striped'>

      <thead>

        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
          <th>Zipcode</th>
        </tr>

      </thead>

      <tbody>
        {
          users.map(user=>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address?.city}</td>
              <td>{user.address?.zipcode}</td>
            </tr>

          )
        }

      </tbody>

     </table>



    </div>
  )
}

export default Users