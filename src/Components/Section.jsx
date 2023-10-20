import React from 'react'

function Section() {
  return (
    <>
        <section className="section bg-custom-gray" id="price">
        <div className="container">
            <h1 className="mb-5"><span className="text-danger">Packs</span> Pricing</h1>
            <div className="row align-items-center">
                <div className="col-md-6 col-lg-3">
                    <div className="price-card text-center mb-4">
                        <h3 className="price-card-title">Free</h3>
                        <div className="price-card-cost">
                            <sup className="ti-money"></sup>
                            <span className="num">0</span>
                            <span className="date">MO</span>
                        </div>
                        <ul className="list">
                            <li className="list-item">5 <span className="text-muted">Project</span></li>
                            <li className="list-item">1GB <span className="text-muted">Storage</span></li>
                            <li className="list-item"><span className="text-muted">No Domain</span></li>
                            <li className="list-item">1 <span className="text-muted">User</span></li>
                        </ul>
                        <button className="btn btn-primary btn-rounded w-lg">Subscribe</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="price-card text-center mb-4">
                        <h3 className="price-card-title">Basic</h3>
                        <div className="price-card-cost">
                            <sup className="ti-money"></sup>
                            <span className="num">10</span>
                            <span className="date">MO</span>
                        </div>
                        <ul className="list">
                            <li className="list-item">50 <span className="text-muted">Project</span></li>
                            <li className="list-item">10GB <span className="text-muted">Storage</span></li>
                            <li className="list-item">1<span className="text-muted">Domain</span></li>
                            <li className="list-item">5 <span className="text-muted">User</span></li>
                        </ul>
                        <button className="btn btn-primary btn-rounded w-lg">Subscribe</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="price-card text-center price-card-requried mb-4">
                        <h3 className="price-card-title">Exclusive</h3>
                        <div className="price-card-cost">
                            <sup className="ti-money"></sup>
                            <span className="num">25</span>
                            <span className="date">MO</span>
                        </div>
                        <ul className="list">
                            <li className="list-item">150 <span className="text-muted">Project</span></li>
                            <li className="list-item">15GB <span className="text-muted">Storage</span></li>
                            <li className="list-item">5<span className="text-muted"> Domain</span></li>
                            <li className="list-item">15<span className="text-muted">User</span></li>
                        </ul>
                        <button className="btn btn-primary btn-rounded w-lg">Subscribe</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="price-card text-center mb-4">
                        <h3 className="price-card-title">Pro</h3>
                        <div className="price-card-cost">
                            <sup className="ti-money"></sup>
                            <span className="num">99</span>
                            <span className="date">MO</span>
                        </div>
                        <ul className="list">
                            <li className="list-item">500 <span className="text-muted">Project</span></li>
                            <li className="list-item">1000GB <span className="text-muted">Storage</span></li>
                            <li className="list-item">10<span className="text-muted"> Domain</span></li>
                            <li className="list-item">Unlimite<span className="text-muted">User</span></li>
                        </ul>
                        <button className="btn btn-primary btn-rounded w-lg">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section bg-dark py-5">
        <div className="container text-center">
            <h2 className="text-light mb-5 font-weight-normal">I Am Available For FreeLance</h2>
            <button className="btn bg-primary w-lg" >Hire me</button>
        </div>
    </section>


    <section className="section bg-dark text-center">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 col-lg-3">
                    <div className="row ">
                        <div className="col-5 text-right text-light border-right py-3">
                            <div className="m-auto"><i className="ti-alarm-clock icon-xl"></i></div>
                        </div>
                        <div className="col-7 text-left py-3">
                            <h1 className="text-danger font-weight-bold font40">500</h1>
                            <p className="text-light mb-1">Hours Worked</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="row">
                        <div className="col-5 text-right text-light border-right py-3">
                            <div className="m-auto"><i className="ti-layers-alt icon-xl"></i></div>
                        </div>
                        <div className="col-7 text-left py-3">
                            <h1 className="text-danger font-weight-bold font40">50K</h1>
                            <p className="text-light mb-1">Project Finished</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="row">
                        <div className="col-5 text-right text-light border-right py-3">
                            <div className="m-auto"><i className="ti-face-smile icon-xl"></i></div>
                        </div>
                        <div className="col-7 text-left py-3">
                            <h1 className="text-danger font-weight-bold font40">200K</h1>
                            <p className="text-light mb-1">Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="row">
                        <div className="col-5 text-right text-light border-right py-3">
                            <div className="m-auto"><i className="ti-heart-broken icon-xl"></i></div>
                        </div>
                        <div className="col-7 text-left py-3">
                            <h1 className="text-danger font-weight-bold font40">2k</h1>
                            <p className="text-light mb-1">Coffee Drinked</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section
