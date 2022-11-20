import React, { useState, useEffect } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"

import { collection, query, where, doc, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp, FieldValue } from "firebase/firestore"
import { db } from "../firebase"
import { useNavigate, Link } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [er, seter] = useState("")


  const onchange_2 = (event) => {
    setusername(event.target.value);
  }

  const onchange_1 = (event) => {
    setpassword(event.target.value);
  }

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {


    signInWithPopup(auth, provider)
      .then((result) => {


        sessionStorage.setItem("name", result.user.displayName)
        sessionStorage.setItem("email", result.user.email)
        sessionStorage.setItem("id", result.user.id)


        navigate("/loading");
      })
      .catch((error) => {
        console.log(error);
      });

  };



  const [file, setfile] = useState([])


  const submit = () => {

    if (username == "" && password == "") {
      seter("please enter a vaild input")
    }
    else {

      const q = query(collection(db, "user"), where("email", "==", `${username}`));
      const getuser = async () => {
        const data = await getDocs(q);
        setfile(data.docs.map((doc) =>
          ({ ...doc.data(), id: doc.id })
        ))
      }
      getuser()

      console.log(file)
      console.log(password)
      console.log(username)




      if (file[0].password == "1234") {
        seter("")
        sessionStorage.setItem("name", file[0].username)
        sessionStorage.setItem("email", file[0].email)
        sessionStorage.setItem("id", file[0].id)
        sessionStorage.setItem("balance", file[0].balance)
        sessionStorage.setItem("fi_id", file[0].fi_id)
        sessionStorage.setItem("contact", file[0].contact)

        navigate("/home__")
      }

      else {
        seter("please enter a vaild input")
      }
    }
  }





  return (
    <>

      {/* <h1  onClick={()=>{signInWithGoogle()}}>click me</h1> */}

      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title" onClick={() => { signInWithGoogle() }}>Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="email" onChange={onchange_2} value={username} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" onChange={onchange_1} value={password} />
              </div>
              <h1 style={{ color: "red" }}>{er}</h1>

              <div className='login_btn' onClick={() => { submit() }}><h1 className='btn_lg'>Login</h1></div>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="social-icon" onClick={() => { signInWithGoogle() }}>
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form className="sign-up-form">
              <h2 className="title" onClick={() => { signInWithGoogle() }}>Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="social-icon" onClick={() => { signInWithGoogle() }}>
                  <i className="fab fa-google" ></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Enter your details and start your journey with us
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={() => { signInWithGoogle() }}>
                Sign up
              </button>
            </div>
            <img src="https://raw.githubusercontent.com/Aerin2805/awesome-login-pages/4cbd3b38490e50478c181219c365875cb676ca37/login-form-v34/img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src="https://raw.githubusercontent.com/Aerin2805/awesome-login-pages/4cbd3b38490e50478c181219c365875cb676ca37/login-form-v34/img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login