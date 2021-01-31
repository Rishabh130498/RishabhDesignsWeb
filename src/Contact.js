import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `I am ${data.fullName}. Here's a short Inquiry- ${data.message}. My Mobile Number is ${data.phone}. Mail me on ${data.email}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={onFormSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  Name="fullName"
                  value={data.fullName}
                  onChange={onInputChange}
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  Name="phone"
                  value={data.phone}
                  onChange={onInputChange}
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  Name="email"
                  value={data.email}
                  onChange={onInputChange}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  Name="message"
                  value={data.message}
                  onChange={onInputChange}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="bts btn" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
