import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedMail } from "../features/mailSlice";
import "../styles/Mail.css";

const Mail = () => {
  const navigate = useNavigate();

  const selectedMails = useSelector(selectedMail);

  const { id, title, subject, description, time } = selectedMails;
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMails?.subject}</h2>
          <LabelImportant className="mail__important" />
          <p>{selectedMails?.title}</p>
          <p className="mail__time">{selectedMails?.time}</p>
        </div>

        <div className="mail__message">
          <p> {selectedMails?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;