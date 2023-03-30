import "./FormStyles.css";

import React from "react";

const Form = () => {
  return <div className="form">
    <form>
      <label>Your Name</label>
      <input type="text"></input>

      <label>Email</label>
      <input type="email"></input>


      <label>Comment</label>
      <textarea rows="6" placeholder="Comment Here"></textarea>

      <button className="btn">Submit</button>
    </form>
  </div>;
};

export default Form;
