import React from 'react'

export default function Team() {
  return (
    <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth":"600px"}}>
        <h6 className="text-primary">Team Member</h6>
        <h1 className="mb-4">Experienced Team Members</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item rounded overflow-hidden">
            <div className="d-flex">
              <img className="img-fluid w-75" src="img/team-1.jpg" alt=""  />
              <div className="team-social w-25">
                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="p-4">
              <h5>Full Name</h5>
              <span>Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item rounded overflow-hidden">
            <div className="d-flex">
              <img className="img-fluid w-75" src="img/team-2.jpg" alt=""  />
              <div className="team-social w-25">
                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="p-4">
              <h5>Full Name</h5>
              <span>Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item rounded overflow-hidden">
            <div className="d-flex">
              <img className="img-fluid w-75" src="img/team-3.jpg" alt=""  />
              <div className="team-social w-25">
                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="p-4">
              <h5>Full Name</h5>
              <span>Designation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
