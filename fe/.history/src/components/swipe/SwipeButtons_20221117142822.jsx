import React from "react";
import { MdReplay, MdClose, MdStar } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import "./SwipeButtons.css";
import { IconButton } from "@mui/material";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <MdReplay fontSize="large" />
      </IconButton>
      <IconButton>
        <MdClose fontSize="large" />
      </IconButton>
      <IconButton>
        <MdStar fontSize="large" />
      </IconButton>
      <IconButton>
        <IoMdHeart fontSize="large" />
      </IconButton>
      <IconButton>
        <AiFillThunderbolt fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
