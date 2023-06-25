import React from 'react';
import './css/global.css';

function SignUpPopup() {
  return (
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
              <button class="btns" type="submit" className="signupbtn"><a href="reddit_after_login.html">Log
                In</a></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPopup;
