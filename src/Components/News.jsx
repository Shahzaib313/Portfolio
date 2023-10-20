import React from 'react'

function News() {
  return (
    <>
       <section className="section" id="blog">
        <div className="container">
            <h2 className="mb-5">Latest <span className="text-danger">News</span></h2>
            <div className="row">
                <div className="blog-card">
                    <div className="img-holder">
                        <img src="../imgs/blog1.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div className="content-holder">
                        <h6 className="title">Consectetur adipisicing elit</h6>

                        <p className="post-details">
                            <a href="#">By: Admin</a>
                            <a href="#"><i className="ti-heart text-danger"></i> 234</a>
                            <a href="#"><i className="ti-comment"></i> 123</a>
                        </p>
                        
                        <p>Consectetur adipisicing elit - a fancy way of saying "Lorem Ipsum." It's placeholder text in design. I make things simple, turning complex ideas into user-friendly designs that speak everyone's language. 🌐🎨</p>

                        <p><b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</b></p>
                        <p>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>

                        <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="img-holder">
                        <img src="../imgs/blog2.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div className="content-holder">
                        <h6 className="title">Explicabo illo</h6>

                        <p className="post-details">
                            <a href="#">By: Admin</a>
                            <a href="#"><i className="ti-heart text-danger"></i> 456</a>
                            <a href="#"><i className="ti-comment"></i> 264</a>
                        </p>
                        
                        <p>"Explicabo illo" — I simplify complexities. Navigating the maze of information, I make things clear. Let's journey together through clarity, where understanding unfolds effortlessly, and simplicity reigns. 🌟.</p>

                        <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
                    </div>
                </div>
             
                <div className="blog-card">
                    <div className="img-holder">
                        <img src="../imgs/blog3.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div className="content-holder">
                        <h4 className="title">Porro Quisqua</h4>

                        <p className="post-details">
                            <a href="#">By: Admin</a>
                            <a href="#"><i className="ti-heart text-danger"></i> 431</a>
                            <a href="#"><i className="ti-comment"></i> 312</a>
                        </p>
                        
                        <p> Porro Quisqua: A journey into curiosity. I explore the wonders of the unknown, seeking answers and uncovering new paths. Join me in the adventure of discovery and endless possibilities. 🌌.</p>

                        <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default News
