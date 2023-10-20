import React from 'react';

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item">
              <a className="social-link text-light" href="https://www.facebook.com/ShahzaibAli">
                <i className="ti-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="https://twitter.com/shahzaibsheen">
                <i className="ti-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="https://www.linkedin.com/in/shahzaib-ali-b43300284/">
                <i className="ti-linkedin" aria-hidden="true"></i> 
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="https://www.instagram.com/shahzaibsheen">
                <i className="ti-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="https://github.com/yourgithubusername">
                <i className="ti-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">Shahzaib Ali</h1>
            <h6 className="header-mono">Full Stack Developer | MERN Stack Developer</h6>
            <a href='https://drive.google.com/file/d/1Xsuel_cnqL-YheGBFAFj9zpx8YGEL_R7/view?usp=drive_link' target="_blank">
              <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Print Resume</button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
