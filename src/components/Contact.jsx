import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "../index.css";

const Contact = () => {
  return (
    <div className="h-full w-1/2 m-auto">
      {/* <hr /> */}
      <h1 className="text-center">Let's Work Togeather</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="floatingTextarea2">Message</label>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px", focus: "none" }}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="btn border my-3 px-5 py-2  hover:bg-slate-400	 "
        >
          <FaPaperPlane />
        </button>
      </form>
      <hr />
    </div>
  );
};

export default Contact;
