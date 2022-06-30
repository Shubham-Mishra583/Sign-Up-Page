import React, { useState } from 'react'
import './App.css';
import Login from './Components/Login';

const App = () => {

  //Storing Data of Form 
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EmailError, setEmailError] = useState("");

    // Using regex for email validation
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    // email validation function
    const validate = (e)=>{
    if(regex.test(e.target.value) === false){
        setEmailError("Invalid Email");
    }
    
    else{
      setEmailError("");
    }
    setEmail(e.target.value);
  }


  // form validation
  const check = (e)=>{
    e.preventDefault();

    if(Email && EmailError){
      alert("Please fill Valid Email");
    }

    else if(Email && Password && FirstName && LastName){
      alert(`Welcome ${FirstName} ${LastName}`);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setEmailError("");
    }

    else if(!Email && !Password && !FirstName && !LastName){
      alert("Please Fill All The Details");
    }

    else if(!FirstName){
      alert("Please Fill First Name");
    }

    else if(!LastName){
      alert("Please Fill Last Name");
    }

    else if(!Email){
      alert("Please Fill Email");
    }

    else {
      alert("Please Fill Password");
    }

  }

  return (
    <>
      {/* outer box */}
      <div className="main">

        {/* inner box */}
        <div className="container">

          {/* left half */}
          <div className="leftside">

            <div className="heading">
              <p>The best offer</p>
              <p>for your business</p>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem saepe fuga sunt mollitia, officia quod ipsum consectetur velit tempora, consequatur tempore fugit impedit natus quidem ipsam aliquam ullam.''
            </div>

                  {/* google oauth login button */}
                  <div className="login"><Login/></div>
          </div>
         
            {/* form */}
          <div className="rightside">


              <div className="flex-container-top">

                {/* input box for first and last name */}
                <div className="flex-row">
                      <input type="text"
                       placeholder='First Name'
                        className='flex-item'
                        value={FirstName}
                        onChange = {(e)=>setFirstName(e.target.value)}
                        />
                        <span></span>

                      <input type="text"
                       placeholder='Last Name'
                         className='flex-item'
                         value={LastName}
                         onChange = {(e)=>setLastName(e.target.value)}
                        />
                </div>

                {/* input box for email and password */}
                <div className="flex-col">

                      <input type="text"
                       placeholder='Email Address'
                        className='flex-item'
                        value={Email}
                        onChange = {validate}
                        />
                        <span>{EmailError}</span>

                      <input type="password"
                       placeholder='Password'
                        className='flex-item'
                        value={Password}
                        onChange = {(e)=>setPassword(e.target.value)}
                        />

                </div>

              </div> 


            <div className="flex-container-bottom">
              <div className="flex-item"> <input type="checkbox" name="" id="" className='checkbox'/>Subscribe to out newsletter</div>

              {/* sign up button */}
              <div className="flex-item"><button type='submit' onClick={check}>SIGN UP</button></div>


              <div className="flex-item">or sign up with:</div>
            
              {/* social media icons */}
              <div className="flex-item">
                <a href="https://www.facebook.com/" target = "_blank" rel="noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/i/flow/login" target = "_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://github.com/login" target = "_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                
                </div>
                
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App