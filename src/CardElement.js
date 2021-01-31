import React from "react";
import Image from "./Images/card1.jpeg";

const CardElement = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto gy-5 ">
        <div className="card">
          <img src={props.photo || Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{`#${props.id}` || "Title"}</h5>
            <p className="card-text">{props.author || "Author Name"}</p>
            <a href="#" className="btn btn-primary">
              See Pricing !
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardElement;
