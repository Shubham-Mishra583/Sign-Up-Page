import React from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";

const clientId = "564388334279-a59pv59vnf47fhgihtm6at8tid8bu251.apps.googleusercontent.com";

gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
    "564388334279-a59pv59vnf47fhgihtm6at8tid8bu251.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});

const Login = () => {
  
  const onSuccess = (res) =>{
    console.log("SUCCESS",res.profileObj);
     let name = res.profileObj.name;
     alert(`Welcome ${name}`);
  }

  const onFailure = (res) =>{
    console.log("FAILED",res);
  }


  return (
    <div id="signInButton">
        <GoogleLogin
            clientId = {clientId}
            buttonText = "Login"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}
        />
    </div>
  )
}

export default Login