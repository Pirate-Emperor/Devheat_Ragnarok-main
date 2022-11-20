import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { collection, query, where, doc, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp, FieldValue } from "firebase/firestore"
import { db } from "../firebase"
import { Link } from 'react-router-dom';


function Detail() {

    const navigate = useNavigate();
    // const q = query(collection(db, "user"), where("email", "==", `${sessionStorage.getItem("email")}`));
    // const [file, setfile] = useState([])
    // const navigate = useNavigate();
    // useEffect(() => {
    //     const getuser = async () => {
    //         const data = await getDocs(q);
    //         setfile(data.docs.map((doc) =>
    //             ({ ...doc.data(), id: doc.id })
    //         ))
    //     }
    //     getuser()

    // }, [])

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
                            <li>Predictor</li>
                            <Link to="/extra" style={{ color: "white", textDecoration: "none" }}><li>Profile</li></Link>
                            <Link to="/wallet" style={{ color: "white", textDecoration: "none" }}><li>Wallet</li></Link>
                        </ul>
                    </div>
                    <div className="Sign up"><i class="fa fa-user-circle" style={{ fontSize: "36px" }}></i>
                    </div>
                </div>
            </div>

            <div className="head3 head7">Personal Details</div>
            <div className="first5">
                <div className="pic">
                    <img src="profilepic.png" alt="" class="img30" />
                    <div className="name5">{sessionStorage.getItem("name")}</div>
                </div>
                <div className="right11">
                    <div className="as1">
                        <div className="as">
                            <p className="fhead"> Name</p>
                            <div className="fname">{sessionStorage.getItem("name")}</div>
                        </div>
                        {/* <div className="as">
                            <p className="fhead">Last Name</p>
                            <div className="fname"></div>
                        </div> */}
                    </div>
                    <div className="as1">
                        <div className="as">
                            <p className="fhead">Email Address</p>
                            <div className="fname">{sessionStorage.getItem("email")}</div>
                        </div>
                        <div class="as">
                            <p className="fhead">Mobile no.</p>
                            <div className="fname">+{sessionStorage.getItem("contact")}</div>
                        </div>
                    </div>
                    <div class="as1">
                        <div class="as">
                            <p className="fhead">Bank Name</p>
                            <div className="fname">H**FC BANK</div>
                        </div>
                        <div class="as">
                            <p className="fhead">Account number</p>
                            <div className="fname">8********4</div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="btn55" onClick={() => { navigate("/wallet") }}><button className="button-43 btn8 btn9" role="button">Go to Wallet</button></div>



            <footer>
                <div className="foot" style={{ backgroundImage: "url(background5.png)" }}>
                    <img src="Logo.svg" alt="" style={{ width: "200px" }} />
                    <div className="menus" id="nav2">
                        <ul id="nav3">
                            <li>Stocks</li>
                            <li>Predictor</li>
                            <li>Profile</li>
                            <li>About us</li>
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

export default Detail


// {
//     "password": "1234",
//     "contact": "12345678",
//     "email": "jayeshastha@gmail.com",
//     "username": "Jitanshu Raut",
//     "fi_id": "Jitanshu Raut12345678",
//     "balance": "100",
//     "id": "iswiNnNnECV7HRseF7zL"
// }