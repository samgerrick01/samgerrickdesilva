import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

toast.configure();
const Contact = ({ darkMode }) => {
  //STATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  //EVENTS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_9bkwzfu",
        form.current,
        "user_DDFsRffPS1lZsdHbfvwDT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    toast.success("The message has been sent to Sam.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="body">
      <h1 className="title">Send an Email</h1>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            name="user_Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={darkMode ? "user_Name_dark" : "user_Name_light"}
            placeholder="Enter your Full Name"
            required="required"
          />
          <input
            name="user_Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={darkMode ? "user_Email_dark" : "user_Email_light"}
            placeholder="Enter your Email"
            required="required"
          />
          <input
            name="user_Phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={darkMode ? "user_Phone_dark" : "user_Phone_light"}
            placeholder="Enter your Phone Number"
            required="required"
          />
          <textarea
            name="user_Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={darkMode ? "user_Message_dark" : "user_Message_light"}
            placeholder="Enter your Message"
            required="required"
          />
          <button
            type="submit"
            value="Send"
            className={darkMode ? "btn_dark" : "btn_light"}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
