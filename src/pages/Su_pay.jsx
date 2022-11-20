import React from 'react'
import { useNavigate } from "react-router-dom";
function Su_pay() {

    let navigate = useNavigate();
    setTimeout(() => {
        navigate("/home__")
    }, 10000);

    return (
        <>

            <div class="sucess">
                <div class="check2">
                    <img src="check.gif" alt="" class="check" />
                </div>
                <div class="head3 head7 hee"><b>Sucessful Transaction</b> </div>
                <div class="btn55 btn99">
                    <button class="button-43 btn95" role="button" onClick={() => { navigate('/wallet') }}>Go to Wallet</button>
                    <button class="button-43 btn95" role="button" onClick={() => { navigate('/home__') }}>Go to Home</button>
                </div>

            </div>
        </>
    )
}

export default Su_pay