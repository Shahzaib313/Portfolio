import React from 'react'

function Resume() {
  return (
    <>
       
    <section className="section" id="resume"/>
        <div className="container">
            <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="mt-2">
                                <h4>Expertise</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-danger">2017 - Present</h6>
                            <p>UX Developer</p>
                            <p className="subtitle">Crafting seamless digital experiences as a UX Developer. Blending design finesse with technical prowess for user-centric, intuitive, and responsive interfaces..</p>
                          
                            <h6 className="title text-danger">2016 - 2017</h6>
                            <p>Front-end Developer</p>
                            <p className="subtitle">Crafting captivating digital interfaces with HTML, CSS, React, and JavaScript. Transforming designs into interactive, user-friendly experiences. Front-end developer creating web magic..</p>
                       
                            <h6 className="title text-danger">2015 - 2016</h6>
                            <p>UX Designer</p>
                            <p className="subtitle">Crafting seamless and delightful digital experiences. Expert in user-centric design, wireframing, and prototyping. Elevate your project with user-focused creativity..</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="mt-2">
                                <h4>Education</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-danger">2017 - Present</h6>
                            <p>B.E Computer Engineering</p>
                            <p className="subtitle">"From mastering programming languages such as C, C++, Java, and Python to understanding the intricacies of database management, students build a strong foundation for software development..</p>
                    
                            <h6 className="title text-danger">2016 - 2017</h6>
                            <p>Diploma in Computer Engineering</p>
                            <p className="subtitle">Earned a Diploma in Computer Engineering, mastering hardware, software, and systems integration. Ready for tech challenges and innovations..</p>
                           
                            <h6 className="title text-danger">2015 - 2016</h6>
                            <p>High School Degree</p>
                            <p className="subtitle">Proud high school graduate with a passion for knowledge and a foundation for future success. Ready for the next chapter!.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Skills</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                           <h6>hTL5 &amp; CSS3</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" 
                                
                                style={{width:"97"}}
                               aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>JavaScript</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width:"85"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>ExpressJS</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar"  style={{width:"80"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>MongoDB</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width:"90"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>ReactJS</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar"  style={{width:"90"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>NodeJS</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar"  style={{width:"97"}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Languages</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                           <h6>English</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width:"80"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Urdu</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width:"97"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Shina</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width:"67"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Resume
