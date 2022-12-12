import {
  ArrowDropDown,
  CheckBox,
  ChevronLeft,
  ChevronRight,
  Inbox,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import React, { useEffect } from "react";
import Section from "./Section";
import { useState } from "react";
import "../styles/EmailList.css";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails").onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  }, []);
  let sections = [
    {
      icon: Inbox,
      title: "Primary",
      color: "red",
      selected: true,
    },
    {
      icon: People,
      title: "Social",
      color: "#1A73E8",
      selected: false,
    },
    {
      icon: LocalOffer,
      title: "Promotions",
      color: "green",
      selected: false,
    },
  ];

  const handleClick = (id) => {
    sections.map((section) => {
      const { title } = section;

      const align =
        title == id
          ? { ...section, selected: true }
          : { ...section, selected: false };

      console.warn(align);

      return align;
    });
  };

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />

          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        {sections.map((section) => {
          const { icon, title, color, selected } = section;

          return (
            <Section
              functions={handleClick}
              id={title}
              key={title}
              Icon={icon}
              title={title}
              color={color}
              selected={selected}
            />
          );
        })}
      </div>

      <div className="emailList__List">
        {emails.map((email) => {
          const {
            id,
            data: { subject, to, message },
          } = email;
          return (
            <EmailRow
              key={id}
              id={id}
              title={to}
              subject={subject}
              description={message}
              time="10pm"
            />
          );
        })}

        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
        <EmailRow
         
          title="{to}"
          subject="{subject}"
          description="{message}"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
