import React from 'react'

function About() {
    return (
        <>
            <div className="container-fluid">
                <div id="about" className="row about-section">
                    <div className="col-lg-4 about-card">
                        <h3 className="font-weight-light">Who am I ?</h3>
                        <span className="line mb-5"></span>
                        <h5 className="mb-3">A Web Designer / Developer Located In Our Lovely Earth</h5>
                        <p className="mt-20">Greetings Earthlings! 🌍 Meet your friendly neighborhood web designer and developer, stationed on our lovely blue planet. With a passion for pixels and a flair for code, I traverse the digital cosmos to craft visually stunning and seamlessly functional websites. Whether you're launching a new venture, giving your online presence a facelift, or just need some cosmic coding expertise, I'm here to turn your web dreams into reality. Let's embark on a stellar journey together, where design meets development right here on our Earthly web! 🚀✨</p>
                        <a href='https://drive.google.com/file/d/1Xsuel_cnqL-YheGBFAFj9zpx8YGEL_R7/view?usp=drive_link' target="_blank"><button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Resume</button></a>
                        
                
                    </div>
                    <div className="col-lg-4 about-card">
                        <h3 className="font-weight-light">Personal Info</h3>
                        <span className="line mb-5"></span>
                        <ul className="mt40 info list-unstyled">
                            <li><span>Birthdate</span> : 16/02/2003</li>
                            <li><span>Email</span> : shahzaibsheen@gail.com</li>
                            <li><span>Phone</span> : 03555038016</li>
                            <li><span>Skype</span> : Shahzaib-sheen </li>
                            <li><span>Address</span> : Gilgit baltistan skardu city.</li>
                        </ul>
                        <ul className="social-icons pt-3">
                            <li className="social-item"><a className="social-link" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                            <li className="social-item"><a className="social-link" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                            <li className="social-item"><a className="social-link" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                            <li className="social-item"><a className="social-link" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                            <li className="social-item"><a className="social-link" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 about-card">
                        <h3 className="font-weight-light">My Expertise</h3>
                        <span className="line mb-5"></span>
                        <div className="row">
                            <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                            <div className="col-10 ml-auto mr-3">
                                <h6>UX Design</h6>
                                <p className="subtitle">In the vast galaxy of digital experiences, I am your UX (User Experience) navigator, charting the course for intuitive and delightful interaction.</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                            <div className="col-10 ml-auto mr-3">
                                <h6>Web Development</h6>
                                <p className="subtitle">Crafting dynamic websites, merging code and creativity for a seamless online experience..</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                            <div className="col-10 ml-auto mr-3">
                                <h6>Digital Marketing</h6>
                                <p className="subtitle">Strategize, captivate, and dominate online. I wield pixels and data for unstoppable digital marketing success..</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
