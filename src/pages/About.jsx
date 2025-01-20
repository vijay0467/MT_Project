import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  const [hovered, setHovered] = useState(null); // State to track hovered card

  return (
    <>
      {/* Hero Section */}
      <section
        className="about-hero text-center py-5 d-flex align-items-center justify-content-center container-fluid"
        style={{
          backgroundImage: `url('./src/assets/about-bg.jpg')`, // Make sure to add a relevant background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          position: 'relative',
          color: 'white',
          borderRadius: '30px',
          overflow: 'hidden', // Ensures content doesn't overflow the rounded corners
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <div
          className="content"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '700px',
            textAlign: 'center',
          }}
        >
          <h1 className="display-4 fw-bold">About Mana Trendz</h1>
          <p className="lead">
            Discover the story behind Mana Trendz and our commitment to providing top-tier fashion, electronics, and jewelry.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Story</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center mb-4">
              <p>
                At Mana Trendz, we believe that fashion, electronics, and jewelry should be accessible to everyone, no matter where they are. Our journey began with the vision of bringing the latest trends and high-quality products from across the globe to your doorstep.
              </p>
              <p>
                From trendy outfits to the most advanced gadgets, we curate the best selection for our customers. We're committed to providing excellent customer service, the best deals, and a shopping experience that feels personal and memorable. Our team works tirelessly to ensure you find exactly what you're looking for—whether it’s a stylish new dress or the latest tech gadgets.
              </p>
              <p>
                Thank you for choosing Mana Trendz. We're thrilled to have you as part of our family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section py-5 bg-secondary-subtle">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Values</h2>
          <div className="row justify-content-center">
            {/* Card 1 */}
            <div
              className="col-md-4 mb-4"
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="card shadow text-center"
                style={{
                  borderRadius: '15px',
                  transform: hovered === 1 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: hovered === 1 ? '0 4px 15px rgba(0, 0, 0, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Customer Satisfaction</h5>
                  <p className="card-text">
                    We prioritize our customers by providing exceptional service and ensuring your satisfaction every step of the way.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="col-md-4 mb-4"
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="card shadow text-center"
                style={{
                  borderRadius: '15px',
                  transform: hovered === 2 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: hovered === 2 ? '0 4px 15px rgba(0, 0, 0, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Quality Products</h5>
                  <p className="card-text">
                    We carefully select the best-quality products, ensuring that every item is fashionable, durable, and trendy.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="col-md-4 mb-4"
              onMouseEnter={() => setHovered(3)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="card shadow text-center"
                style={{
                  borderRadius: '15px',
                  transform: hovered === 3 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: hovered === 3 ? '0 4px 15px rgba(0, 0, 0, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Innovation</h5>
                  <p className="card-text">
                    We stay ahead of the curve by bringing the latest trends and innovations in fashion, gadgets, and home decor to our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5 text-center">
        <div className="container">
          <h3 className="fw-bold mb-3">Join the Mana Trendz Family</h3>
          <p className="lead mb-4">Stay up to date with the latest trends. Shop now and experience the best in fashion, electronics, and more!</p>
          <NavLink to="/shop" className="btn btn-primary btn-lg">
            Shop Now
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default About;
