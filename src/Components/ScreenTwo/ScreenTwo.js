import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ShowUser from '../ShowUser/ShowUser';

const ScreenTwo = () => {

    const style ={
        paddingRight:'20px',
        paddingLeft:'10px',
        textAlign:'center',
        justifyContent:'center',alignItems:'center'
    }

        // window.location.reload(false)

        setTimeout(() =>{
        sessionStorage.removeItem('token');

        window.location.reload(false);
        alert("Session Expired!")
     },300000)


    const [savedUserList, setSavedUserList] = useState(null);

    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    
      
      fetch('http://localhost:5000/addUser',{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => {
          window.location.reload(false)
           alert("User added successfully")
    })



  }


  useEffect(() => {
    fetch('http://localhost:5000/user',{
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
    .then(data => setSavedUserList (data));
}, [null])



    return (
        <div style={{textAlign:'center'}}>
            <h1>This is screen ScreenTwo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               
      <input type="text" placeholder="Enter Valid username" {...register("username", { required: true, pattern: /^[a-zA-Z0-9]*$/ })} />
      <br />
      <input type="text" placeholder="Enter Valid number" {...register("number", { required:true,  pattern: /^\d{10}$/})} />
      <br />
      <input type="email" placeholder="Enter Valid Email" {...register("email", { required:true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]*$/})} />
      <br />
      <input type="text" placeholder="Address" {...register("address",{required:true})} />
      <br />
      <input type="submit" />
    </form>
    <br />
            <div>
            <div style={{display:'grid',gridAutoFlow:'column',textAlign:'center',border:'1px solid gray'}}>
             <p style={style}>Name</p>
             <p style={style} >Email</p>
             <p style={style}>Number</p>
             <p style={style}>Address</p>  
             <p style={style}>Manage</p>
    
            </div>
            {
                savedUserList?.map(user => <ShowUser user={user}></ShowUser>)
            }
            </div>
        </div>
    );
};

export default ScreenTwo;