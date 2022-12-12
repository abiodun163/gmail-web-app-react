import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import "../styles/SendMail.css";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import {fieldvalue, serverTimestamp} from "firebase/compat/firestore";

function SendMail() {
 const {
   register,
   handleSubmit,
   watch,
   formState: { errors },
 } = useForm();

  const dispatch = useDispatch();



  const onSubmits = (data) => {

    console.warn(data);

    const { to, subject, message } = data;

    db.collection("emails").add({
      to: to,
      subject: subject,
      message: message,
      // timestamp: firebase.firestore.fieldvalue.serverTimestamp();
    });


dispatch(closeSendMessage())
    console.warn("Mail submitted!...");
  };





  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>New Message</h3>


        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendmail__close"
        />
      </div>

      <form onSubmit={handleSubmit(data => {
        onSubmits(data)
      })}>

        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />

        {errors.to && <p className="sendmail__error">To is Required!</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
         {...register("subject", { required: true })}
        />

        {errors.subject && (
          <p className="sendmail__error">Subject is Required!</p>
        )}

        <input
          name="message"
          className="sendmail__input"
          placeholder="Message..."
          type="text"
          {...register("message", { required: true })}
        />

        {errors.message && (
          <p className="sendmail__error">Message is Required!</p>
        )}

        <div className="sendmail__option">
          <Button
            variant="contained"
            color="primary"
            className="sendmail__send"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
