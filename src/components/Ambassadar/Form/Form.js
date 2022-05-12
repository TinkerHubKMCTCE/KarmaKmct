import classes from "./Form.module.css";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";

const Form = (props) => {
    const [open, setOpen] = useState(false);
  const [fullName, setfullName] = useState("");
  const [college, setCollege] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");

  const nameHandler = (event) => {
    setfullName(event.target.value);
  };
  const collegeHandler = (event) => {
    setCollege(event.target.value);
  };
  const mailHandler = (event) => {
    setMail(event.target.value);
  };
  const numberHandler = (event) => {
    setNumber(event.target.value);
  };

  const sheetSubmit = (event) => {
    event.preventDefault();
    console.log(fullName, college, mail, number);

    fetch("https://sheetdb.io/api/v1/axyeojo2uz837", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        college,
        mail,
        number,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(
      alert("You are registered Successfully"),
      (window.location = "https://chat.whatsapp.com/JNqNB3UIyOI9CsbO3KJ95z")
    );
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.open}
    >
      <div className={classes.backdrop}>
        <div
          className={classes.bkdHeadingBox}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3 className={classes.bkdHeading}>Register</h3>
        </div>

        <form onSubmit={sheetSubmit} className={classes.inputBox}>
          <input
            placeholder="Full Name"
            type="text"
            className={classes.input}
            onChange={nameHandler}
            value={fullName}
            required
          />
          <input
            placeholder="College"
            type="text"
            className={classes.input}
            onChange={collegeHandler}
            value={college}
            required
          />
          <input
            placeholder="Email"
            type="email"
            className={classes.input}
            onChange={mailHandler}
            value={mail}
            required
          />
          <input
            placeholder="Phone number"
            type="number"
            className={classes.input}
            onChange={numberHandler}
            value={number}
            required
          />
          <button className={classes.btn1} onClick={() => setOpen(!open)}>
            Sign Up
          </button>
        </form>
      </div>
    </Backdrop>
  );
};

export default Form;