import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formInput =
      "First Name: " +
      data.firstName +
      "\nLast Name: " +
      data.lastName +
      "\nEmail: " +
      data.email +
      "\nMessage: " +
      data.message;
    window.alert(formInput);
  };

  return (
    <section className="contactUs" id="contactUs">
      <div className="container">
        <form 
            className="was-validated"
            noValidate=""
            onSubmit={handleFormSubmit}
        >
          <div className="col-sm-12 p-5">
            <h2 style={{ textAlign: "center" }}>Contact Us</h2>
            <p style={{ textAlign: "center", color: "grey" }}>
              Please fill this form if you want to say anything to us!
            </p>
            <div className="col-sm-12 has-validation">
                <label className="form-label">First name</label>
                <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    placeholder=""
                    required
                    name="firstName"
                    value={data.firstName}
                    onChange={handleInputChange}
                />
                <div className="invalid-feedback">
                    Valid first name is required.
                </div>
            </div>

            <div className="col-sm-12 has-validation">
              <label className="form-label">Last name</label>
              <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder=""
                    required
                    name="lastName"
                    value={data.lastName}
                    onChange={handleInputChange}
                />
                <div className="invalid-feedback">
                    Valid last name is required.
                </div>
            </div>

            <div className="col-sm-12 has-validation">
              <label className="form-label">Email</label>
              <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                />
                <div className="invalid-feedback">
                    Please enter a valid email address.
                </div>
            </div>

            <div className="col-sm-12 has-validation">
              <label className="form-label">Message</label>
              <input
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder=""
                    required
                    name="message"
                    value={data.message}
                    onChange={handleInputChange}
              />
            </div>

            <div className="col-sm-12">
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    Submit
                </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}
