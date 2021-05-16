import React from 'react';

const ShowUser = (props) => {
    const style ={
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    }
    const {username,_id,email, address,number} = props.user;

const deleteProduct = (id)=>{

    fetch(`https://dry-oasis-44290.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
       
      });
     setTimeout(() => {
        window.location.reload(false);
        alert('deleted!')
     }, 1000);
    }
    return (
        <div style={{display:'grid',gridAutoFlow:'column',border:'1px solid green'}}>
            <p style={style}>{username}</p>
            <p style={style}>{email}</p>
            <p style={style}>{number}</p>
            <p style={style}>{address}</p>
            <button style={{marginTop:'15px',width:'50px',height:'30px',textAlign:'center',justifyContent:'center',alignItems:'center'}} onClick={() => deleteProduct(_id)}>Delete</button>
        </div>
    );
};

export default ShowUser;