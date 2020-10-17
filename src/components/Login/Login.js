import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../images/icons/google.png'
import logo from '../../images/logos/logo.png'
const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser,setloggedInUser]=useContext(UserContext)
    // firebase.initializeApp(firebaseConfig);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
        }
        const setUserToken=()=>{
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                // sessionStorage.setItem('token',idToken)
                // ...
              }).catch(function(error) {
                // Handle error
              });
        }
    const handleGoogle=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const {displayName,email} = result.user;
            const signedInUser={name:displayName,email}

            setloggedInUser(signedInUser)
           
            setUserToken()
            history.replace(from)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    return (
        <div className="d-flex justify-content-center ">
        <div style={{marginTop:'130px'}}>
        <img className="rounded mx-auto d-block mb-4" style={{height:'40px'}} src={logo} alt=""/>
           <div className="text-center" style={{width:'300px',height:'250px',border:'1px solid gray',paddingTop:'70px'}}>
               <h4>Login With</h4>
           <button className="mt-3" onClick={handleGoogle}><img style={{width:'20px'}} src={google} alt=""/> Continue with Google</button>
           </div>
        </div>
        </div>
    );
};

export default Login;