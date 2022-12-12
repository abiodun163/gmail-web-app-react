import { Button, Icon, IconButton } from "@mui/material";
import React from "react";
import "../styles/Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOptions from "./SidebarOptions";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

const Sidebar = () => {

  const dispatch = useDispatch();
 
  const SidebarsOptions = [
    {
      title: "Inbox",
      Icons: InboxIcon,
      number: 54,
      selected: true,
    },
    {
      title: "Starred",
      Icons: StarIcon,
      number: 33,
      selected: false,
    },
    {
      title: "Snoozed",
      Icons: AccessTimeIcon,
      number: 75,
      selected: false,
    },
    {
      title: "Important",
      Icons: LabelImportantIcon,
      number: 15,
      selected: false,
    },
    {
      title: "Sent",
      Icons: NearMeIcon,
      number: 253,
      selected: false,
    },
    {
      title: "Draft",
      Icons: NoteIcon,
      number: 13,
      selected: false,
    },
    {
      title: "More",
      Icons: ExpandMoreIcon,
      number: 5,
      selected: false,
    },
  ];
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>

      <div className="container">
        {SidebarsOptions.map((SidebarOption) => {
          const { title, Icons, number, selected } = SidebarOption;
          return (
            <SidebarOptions
              key={title}
              selected={selected}
              title={title}
              Icon={Icons}
              number={number}
            />
          );
        })}
      </div>

      <div className="sidebar__footer">
        <div className="sidebar__footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
