import React from "react";

export default function AboutUs() {
  return (
    <section className="aboutUs full-bleed" id="aboutUs">
    <div className="container">
      <div className="row">
      <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d"
            width={600}
            height={400}
            alt="team.jpg"
          />
        </div>
        <div className="col-lg-6">
          <h2 style={{ marginTop: 20, marginBottom: 30 }}>About Us</h2>
          <p>
            Welcome to our company! We are a team of dedicated professionals who strive 
            to provide the best service possible. Our mission is to deliver high-quality 
            products and services that meet the needs of our customers. With years of 
            experience in the industry, we have built a reputation for excellence and have 
            gained the trust of many loyal customers.
          </p>
          <p>
            Our team is made up of talented individuals who are passionate about what they 
            do. We believe that teamwork is the key to success and we work together to 
            ensure that our customers receive the best possible experience. Whether you're 
            looking for a new product or need assistance with an existing one, we are here 
            to help.
          </p>
          <p>
            Thank you for considering our company. We look forward to serving you and 
            building a long-lasting relationship.
          </p>
        </div>
        
      </div>
    </div>
  </section>
  );
}
