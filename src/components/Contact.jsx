import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Box from "@mui/material/Box";
import "../index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mdoqvaor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormData({ email: " ", message: " " });
          setStatus("Email sent successfully!");
        } else {
          setStatus("Failed to send email.");
        }
      })
      .catch((error) => {
        setStatus("Failed to send email. Error: " + error.message);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        p: 3,
      }}
    >
      <div
        className=" md:w-1/2 m-auto  pt-44 "
        style={{ height: "100vh", position: "relative", overflow: "hidden" }}
      >
        <h1 className="text-center">Let's Work Togeather</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="floatingTextarea2">Message</label>
            <div className="form-floating">
              <textarea
                className="form-control"
                name="message"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px", focus: "none" }}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn border my-3 px-5 py-2  hover:bg-slate-400	 "
          >
            {<FaPaperPlane type="submit" />}
          </button>
          <p>{status}</p>
        </form>
      </div>
    </Box>
  );
};

export default Contact;
