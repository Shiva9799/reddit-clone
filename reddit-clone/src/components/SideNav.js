import React from 'react';
import './css/global.css';

function SideNav() {
  return (
    <div className="sidenav">
      <div className="nav-head">
        <h5>Feed</h5>
        <a href="#"><i className="fa fa-home"></i> Home</a>
        <a href="#"><i className="far fa-arrow-alt-circle-up"></i> Popular</a>
      </div>
      <div className="nav-mid">
        <h5>Topics</h5>
        <details>
          <summary>Gaming</summary>
          <div className="nav-category">
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
          </div>
        </details>
        <details>
          <summary>Sports</summary>
          <div className="nav-category">
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
          </div>
        </details>
        <details>
          <summary>Business, Economics</summary>
          <div className="nav-category">
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
          </div>
        </details>
        <details>
          <summary>Crypto</summary>
          <div className="nav-category">
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
          </div>
        </details>
        <details>
          <summary>Television</summary>
          <div className="nav-category">
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
          </div>
        </details>
        <details>
          <summary>Celebrity</summary>
          <div className="nav-category">
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
          </div>
        </details>
        <details>
          <summary>More Details</summary>
          <div className="nav-category">
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
            <a href="https://www.reddit.com/">abc</a>
          </div>
        </details>
      </div>
      <div id="loginpopup" className="nav-bottom">
        Create an account to follow your favorite communities and start taking part in conversations.
        <button>Join Reddit</button>
      </div>
    </div >
  );
}

export default SideNav;
