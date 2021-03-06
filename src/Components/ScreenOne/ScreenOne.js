import React, {useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { useHistory, useLocation } from 'react-router';
import axios from 'axios';
import { UserContext } from '../../App';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const ScreenOne = () => {

    // setTimeout(() =>{
    //     sessionStorage.removeItem('token');
        
    //  },5000)

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/screenTwo" } };


    //   useEffect(() => {
    //     axios.get('https://dry-oasis-44290.herokuapp.com/token', 
    //     { headers: 
    //         {
    //             'Content-type' : 'application/json',
    //             authorization : `Bearer ${sessionStorage.getItem('token')}`
    //         } 
    //     })
    // },[])

    const handleLogin =(e) => {
        
        if (loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then((userCredential) => {
                
              var user = userCredential.user;
              const userLoggedIn  = {...loggedInUser}
              userLoggedIn.isSignedIn = true;
              setLoggedInUser(userLoggedIn);
              storeAuthToken();
              history.replace(from);
            
            })
            .catch((error) => {

              var errorMessage = error.message;
                const userError = {...loggedInUser};
                userError.isSignedIn = false;
                userError.error = errorMessage;
                setLoggedInUser(userError);

            });
            e.preventDefault();
        }
    }


const handleEmail = (e) =>{
    const addEmail = {...loggedInUser}
    addEmail.email = e.target.value;
    setLoggedInUser(addEmail)
}
const handlePassword = (e) =>{
    const addPassword = {...loggedInUser};
    addPassword.password = e.target.value;
    setLoggedInUser(addPassword);
    

}

const storeAuthToken = () =>{
    firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
    //   console.log(idToken);
      sessionStorage.setItem('token',idToken);

      }).catch(function(error) {
        // Handle error
      });
}
    return (
        <div style={{textAlign:'center'}}>
            <h1>Screen One</h1>
            <form action="" onSubmit={handleLogin}>
                <input type="text" name="email" onBlur={handleEmail} placeholder="email" required / >
                <br />
                <input type="password" name="password" onBlur={handlePassword}  placeholder="password" required/>
                <br />
                <input type="submit" value="Login" />
            </form>
            {
              !loggedInUser.isSignedIn &&   <p style={{color:'red'}}>You have entered wrong Information</p>

    
            }
        </div>
    );
};

export default ScreenOne;