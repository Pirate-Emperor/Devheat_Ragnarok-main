import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="firstSection" style={{ backgroundImage: "url(image.png)" }}>
        <div className="navBar">
          <div className="logo">
            <img src="Logo.svg" className="logo2" style={{ width: "200px" }} alt="Logo" />
          </div>
          <div className="menus">
            <ul>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Stocks</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Predictor</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Profile</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Wallet</li></Link>
            </ul>
          </div>
          <div className="Sign up"><Link to="/login" className="button-43 btn6">Sign In</Link></div>
        </div>
        <div className="section">
          <div className="firstLeft">
            <div className="line">
              <div className="head1">Trading</div>
              <div className="head2">Platform</div>
            </div>
            <div className="head3">of the Future!</div>
            <div className="text">Always an informed investment decision. <br />
              First you prepare, then you go for it.</div>
            <div className="btn" id="btn2"><Link to="/login" className="button-43">Sign In</Link></div>
          </div>
          <div className="firstRight">
            <img className="firstImage" src="mobiletrade.png" alt="image" />
          </div>
        </div>
      </div>
      <div className="second">
        <div className="left2">
          <img src="computer2.jpg" alt="img" className="img3" />
        </div>
        <div className="right2">
          <div className="head1 head5">Becoming No #1 For <br /> Investment Needs</div>
          <div className="text text2">Help new Investors and traders to learn where to invest by Virtual trading.</div>
          <div className="head1 head5 head6">Our Vision</div>
          <hr />
          <div className="text text2">Help Investors to analysis of the stocks</div>
          <div className="head1 head5 head6">Our Mission</div>
          <hr />
          <div className="text text2">RISE UP even if you have to FALL for it.</div>
        </div>
      </div>
      <div className="third second">
        <div className="left2">
          <img src="men.jpg" alt="img" className="img3" />
        </div>
        <div className="right2">
          <div className="head1 head5">Find Stocks According <br /> To Your Criteria</div>
          <div className="text text2">User can analyse diffrent stocks and crypto coins and their prices with help of Graphs. 
   So They can select best ones for Profit.</div>
          <div className="f1">
            <img src="search.png" alt="Search" width="50px" className="icon" />
            <div className="info2">
              <div className="head1 head5 head6">Choose Your Stock</div>
              <div className="text text2">User can do virtual trading with real crypto coins. 
              </div>
            </div>
          </div>
          <hr />
          <div className="f1">
            <img src="chart.png" alt="Search" width="50px" className="icon" />
            <div className="info2">
              <div className="head1 head5 head6">Detailed Comparison</div>
              <div className="text text2">They can analysis the profit and loss of their coins. It will help them to boost confidence when 
   they will invest their real money.
              </div>
            </div>
          </div>
          <hr />
          <div className="f1">
            <img src="wallet.png" alt="Search" width="50px" className="icon" />
            <div className="info2">
              <div className="head1 head5 head6">Buy Your Shares</div>
              <div className="text text2">User will have 100 USD in their account when they sign up. They can invest in different crypto coins. 
   They have graphs for analysis of all crypto coins.
              </div>
            </div>
          </div>
          <hr />
          <div className="f1">
            <img src="selling.png" alt="Search" width="50px" className="icon" />
            <div className="info2">
              <div className="head1 head5 head6">Sell Anytime</div>
              <div className="text text2">Freely and Efficiently
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="fourth second">
        <div className="left2">
          <img src="image7.png" alt="img" className="img3" />
        </div>
        <div className="right2">
          <div className="head1 head5">What is us?</div>
          <div className="text text2">WE ARE WHAT YOU CALL THE SOURCE - KNOWN BY MANY NAMES BUT WE ARE DEVELOPERS</div>
          <div className="Sign up"><Link to="/login" className="button-43 btn6 btn8" >Sign In</Link></div>
        </div>
      </div>
      <footer>
        <div className="foot" style={{ backgroundImage: "url(background5.png)" }}>
          <img src="Logo.svg" style={{ width: "200px" }} alt="" />
          <div className="menus" id="nav2">
            <ul id="nav3">
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Stocks</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Predictor</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Profile</li></Link>
              <Link to="/login" style={{ color: "white", textDecoration: "none" }}><li>Wallet</li></Link>
            </ul>
          </div>
          <div className="social">
            <i className="fa fa-linkedin-square" style={{ fontSize: '36px', marginLeft: "10px" }} />
            <i className="fa fa-github" style={{ fontSize: '36px', marginLeft: "10px" }} />
          </div>
        </div>
      </footer>

    </>
  )
}

export default Home