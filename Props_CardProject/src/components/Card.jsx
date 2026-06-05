import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({ companyName, brandLogo, datePosted, post, tag1, tag2, pay, location }) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src={brandLogo}
          alt=""
        />
        <button className="save">
          Save <Bookmark />{" "}
        </button>
      </div>

      <div className="center">
        <h3>
          {companyName} <span>{datePosted}</span>
        </h3>
        <h2>{post}</h2>
        <div className="about">
          <h4>{tag1}</h4>
          <h4>{tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{pay}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};
export default Card;
