import React from "react";
import { getAge } from "../helper-functions/helperFunctions";

function Person({ name, dob, dp }) {
  const personAge = getAge(dob);
  return (
    <section className="single-person-data">
      <div>
        <img src={dp} alt={name + "-image"} />
      </div>
      <div className="person-meta">
        <h3> {name} </h3>
        <p> {personAge + " Years"} </p>
      </div>
      {/* <div>
        <button onClick={() => {}} className="close-text">
          Wish
        </button>
      </div> */}
    </section>
  );
}
export default Person;
