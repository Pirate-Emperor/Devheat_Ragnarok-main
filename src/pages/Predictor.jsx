import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { db } from "../firebase"
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp, FieldValue } from "firebase/firestore"


function Predictor() {
    const [er, seter] = useState("")
    const [number, setnumber] = useState("")
    const [bank, setbank] = useState("")
    const [bank_acc, setbank_acc] = useState("")

    const ref = collection(db, "user");
    const save = async () => {

        sessionStorage.setItem("balance", 100)
        sessionStorage.setItem("fi_id", sessionStorage.getItem("email") + number)
        sessionStorage.setItem("contact", number)
        await addDoc(ref, { username: `${sessionStorage.getItem("name")}`, password: "1234", fi_id: `${sessionStorage.getItem("name")}${number}`, contact: number, balance: "100", email: `${sessionStorage.getItem("email")}` })
        navigate("/home__")
    }

    const onchange_2 = (event) => {
        setnumber(event.target.value);
    }

    const onchange_1 = (event) => {
        setbank_acc(event.target.value);
    }

    const onchange_3 = (event) => {
        setbank(event.target.value);
    }
    const navigate = useNavigate();
    return (
        <>

            <div className="firstSection">
                <div className="navBar">
                    <div className="logo">
                        <img src="Logo.svg" style={{ width: "200px" }} className="logo2" alt="Logo" />
                    </div>
                    <div className="menus">
                        <ul>
                            <Link to="/home_" style={{ color: "white", textDecoration: "none" }}><li>Stocks</li></Link>
                            <Link to="/predictor" style={{ color: "white", textDecoration: "none" }}><li>Predictor</li></Link>
                            <Link to="/extra" style={{ color: "white", textDecoration: "none" }}> <li>Profile</li></Link>
                            <Link to="/wallet" style={{ color: "white", textDecoration: "none" }}> <li>Wallet</li></Link>
                        </ul>
                    </div>
                    <div className="Sign up"><i className="fa fa-user-circle" style={{ fontSize: "36px" }}></i>
                    </div>
                </div>
            </div>
            
            
            <div className="head33">
                <a href="http://localhost:8050"> <button className="button-43 btn10" role="button"> Go To Predictor Zone </button> </a>
                
            </div>


            <footer>
                <div className="foot" style={{ backgroundImage: "url(background5.png)" }}>
                    <img src="Logo.svg" alt="" style={{ width: "200px" }} />
                    <div className="menus" id="nav2">
                        <ul id="nav3">
                            <Link to="/home_" style={{ color: "white", textDecoration: "none" }}><li>Stocks</li></Link>
                            <li>Predictor</li>
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

export default Predictor