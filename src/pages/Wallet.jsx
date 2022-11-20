import React, { useState, useEffect } from 'react'
import { collection, query, where, doc, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp, FieldValue } from "firebase/firestore"
import { db } from "../firebase"
import { Link, useNavigate } from 'react-router-dom';
function Wallet() {

  let b = Number(sessionStorage.getItem("balance")).toFixed(3)
  const [file, setfile] = useState([])


  useEffect(() => {
    const q = query(collection(db, "transaction"), where("fi_id", "==", `${sessionStorage.getItem("fi_id")}`));
    const getuser = async () => {
      const data = await getDocs(q);
      setfile(data.docs.map((doc) =>
        ({ ...doc.data(), id: doc.id })
      ))
    }
    getuser()


  }, [])

  console.log(file)
  return (
    <>
      <div className="firstSection">
        <div className="navBar">
          <div className="logo">
            <img src="Logo.svg" style={{ width: "200px" }} className="logo2" alt="Logo" />
          </div>
          <div className="menus">
            <ul>
              <Link to="/home_" style={{ color: "white", textDecoration: "none" }}> <li>Stocks</li></Link>
              <Link to="/predictor" style={{ color: "white", textDecoration: "none" }}><li>Predictor</li></Link>
              <Link to="/extra" style={{ color: "white", textDecoration: "none" }}><li>Profile</li></Link>

              <Link to="/wallet" style={{ color: "white", textDecoration: "none" }}> <li>Wallet</li></Link>
            </ul>
          </div>
          <div className="Sign up"><i class="fa fa-user-circle" style={{ fontSize: "36px" }}></i>
          </div>
        </div>
      </div>

      <div className="head33">
        <div className="head3 head7 head21"><b>Hello, </b> {sessionStorage.getItem("name")}</div>
        <button className="button-43 btn10" role="button">Withdraw  </button>
      </div>
      <div className="first5 f67">
        <div className="pic">
          <img src="Card.svg" alt="" className="img35" style={{ width: "390px" }} />
        </div>
        <div className="right11">
          <div className="as as66">
            <p className="fhead f22">Available Balance</p>
            <div className="fname head3 head11"> {b}</div>
            <button className="button-43 btn9" role="button">Add Money</button>
          </div>
        </div>
      </div>


      <div className="head3 head7 head21">Stocks</div>


      {
        file.map((ele) => {
          return (
            <div className="stocks">
              <img src="NSE.webp" alt="" style={{ width: "70px" }} className="simg" />
              <div className="sname">STOCK: {ele.stock}</div>
              <div className="sprice">PRICE: {ele.totalprice}</div>
              <div className="profit">NUMBER: {ele.number_stock}</div>
              <div className="profit">STATUS: {ele.status}</div>
            </div>
          )
        })
      }





      <footer>
        <div className="foot" style={{ backgroundImage: "url(background5.png)" }}>
          <img src="Logo.svg" alt="" style={{ width: "200px" }} />
          <div className="menus" id="nav2">
            <ul id="nav3">
              <Link to="/home_" style={{ color: "white", textDecoration: "none" }}><li>Stocks</li></Link>
              <Link to="/predictor" style={{ color: "white", textDecoration: "none" }}><li>Predictor</li></Link>
              <Link to="/extra" style={{ color: "white", textDecoration: "none" }}> <li>Profile</li></Link>
              <Link to="/wallet" style={{ color: "white", textDecoration: "none" }}> <li>Wallet</li></Link>
            </ul>
          </div>
          <div className="social">
            <i className="fa fa-linkedin-square" style={{ fontSize: '36px' }} />
            <i className="fa fa-github" style={{ fontSize: '36px' }} />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Wallet