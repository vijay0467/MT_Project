import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
          
          {/* Changed container to container-fluid */}
          <div className="row mx-0 justify-content-center">
            {/* Company Info */}
            <div className="col-md-4 mb-3 text-start">
              <h5>About Mana Trendz</h5>
              <p>
                Mana Trendz is your go-to destination for the latest trends in
                Fashion, Electronics, and Jewellery. We strive to provide
                quality and style at the best prices.
              </p>
            </div>
            {/* Quick Links */}
            <div className="col-md-4 mb-3 text-center">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/" className="text-light text-decoration-none">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className="text-light text-decoration-none"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-light text-decoration-none"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-light text-decoration-none"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Social Media & Contact */}
            <div className="col-md-4 mb-3 text-center">
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-center">
                <a href="https://facebook.com" className="text-light me-3">
                  <i
                    className="bi bi-facebook"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="https://twitter.com" className="text-light me-3">
                  <i
                    className="bi bi-twitter"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="https://instagram.com" className="text-light">
                  <i
                    className="bi bi-instagram"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
              </div>
              <p className="mt-3 text-center">
                Email: support@manatrendz.com <br />
                Phone: +123-456-7890
              </p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>
              &copy; {new Date().getFullYear()} Mana Trendz. All rights
              reserved.
            </p>
          </div>
    
      </footer>
  );
};

export default Footer;
