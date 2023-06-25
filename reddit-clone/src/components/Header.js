import React from 'react';
import './css/global.css';
import redditlogo from './assets/reddit-logo.png';

function Header() {
  return (
    <>
    <header>
      <a className="logo" href="/">
        <img src= {redditlogo} alt="Reddit Logo" />
      </a>
      <h1 className="page-title">Reddit</h1>

      {/* search */}
      <div className="search-bar">
        <i className="fa fa-search"></i>
        <input className="input" type="text" placeholder="Search Reddit" />
      </div>
      <div className="nav-side">
        <li className="get-app">Get App</li>
        <li className="log-in"><a href="#popup2">Log In</a></li>
        <li className="log-in"><a href="#popup1">Sign Up</a></li>
        <li><i className="fas fa-user-alt"></i></li>
      </div>
    </header>


    <div id="popup1" class="overlay">
        <div class="popup">
            {/* <!-- <center><h2>Sign Up</h2></center> --> */}
            <a className="close" href="#">&times;</a>
            <div class="content">
                <center>
                    <h2>Sign Up</h2>
                </center>
                <form id="#signup">
                    <label for="email"><b>Email</b></label>
                    <input class="inputs" type="text" placeholder="Enter Email" name="email" required/>

                    <label for="psw"><b>Password</b></label>
                    <input class="inputs" type="password" placeholder="Enter Password" name="psw" required/>

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input class="inputs" type="password" placeholder="Repeat Password" name="psw-repeat" required/>

                    {/* <label>
                        <input class="inputs" type="checkbox" checked="checked" name="remember"
                            style={{marginBottom:"15px"}}/>
                    </label> */}

                    <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms & Privacy</a>.
                    </p>

                    <div class="clearfix">
                        {/* <!-- <button  class="btns" type="button" class="cancelbtn">Cancel</button> --> */}
                        <button className="btns signupbtn" type="submit"><a href="reddit_after_login.html">Sign
                                Up</a></button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <div id="popup2" class="overlay">
      <div class="popup">
        {/* <!-- <center><h2>Sign Up</h2></center> */}
        <a className="close" href="#">&times;</a>
        <div class="content">
          <center>
            <h2>Log In</h2>
          </center>
          <form id="#signup">
            <label for="email"><b>Email</b></label>
            <input class="inputs" type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input class="inputs" type="password" placeholder="Enter Password" name="psw" required />


            <div class="clearfix">
              {/* <!-- <button  class="btns" type="button" class="cancelbtn">Cancel</button> --> */}
              <button class="btns signupbtn" type="submit" ><a href="reddit_after_login.html">Log
                In</a></button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Header;
