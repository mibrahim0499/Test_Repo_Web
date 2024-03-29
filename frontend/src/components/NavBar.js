import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
    <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
      <h2 className="m-0 text-primary">Solartec</h2>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        {/* <a href="index.html" className="nav-item nav-link active">Home</a>
        <a href="about.html" className="nav-item nav-link">About</a> */}
        <Link to="/" className="nav-item nav-link">Home</Link>
        <Link to="/about" className="nav-item nav-link">About</Link>
        <Link to="/service" className="nav-item nav-link">Service</Link>
        <Link to="/project" className="nav-item nav-link">Project</Link>
        {/* <a href="service.html" className="nav-item nav-link">Service</a> */}
        {/* <a href="project.html" className="nav-item nav-link">Project</a> */}
        {/* <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu bg-light m-0">
            <a href="feature.html" className="dropdown-item">Feature</a>
            <a href="quote.html" className="dropdown-item">Free Quote</a>
            <a href="team.html" className="dropdown-item">Our Team</a>
            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
            <a href="404.html" className="dropdown-item">404 Page</a>
          </div>
        </div> */}
        {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
        <Link to="/contact" className="nav-item nav-link">Contact</Link>
      </div>
      <a href="#" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3" /></a>
    </div>
  </nav>
  )
}
