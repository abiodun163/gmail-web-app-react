import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../features/mailSlice";
import "../styles/EmailRow.css";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));

    navigate("/mail");
  };
  return (
    <div onClick={() => openMail()} className="emailrow">
      <div className="emailrowOptions">
        <Checkbox />

        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailrow__title">{title}</h3>
      <div className="emailrow__message">
        <h4>
          {subject}{" "}
          <span className="emailrow__description">-{description}</span>
        </h4>
      </div>
      <p className="emailrow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
