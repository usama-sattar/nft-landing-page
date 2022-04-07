import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SvgIcon from "@mui/material/SvgIcon";

export default function Footer() {
  return (
    <Box style={{ display: "flex", width: "100%" }} alignItems="center">
      <Box style={{ flexGrow: 1 }}>
        <ul style={{ listStyle: "none" }}>
          <li style={{ display: "inline-block", color: "lightgray" }}>
            <Typography variant="caption">Terms of Services</Typography>
          </li>
          <li
            style={{
              display: "inline-block",
              color: "lightgray",
              marginLeft: 20,
            }}
          >
            <Typography variant="caption">Privacy policies</Typography>
          </li>
        </ul>
      </Box>
      <Box>
        <FacebookIcon style={{ color: "white", marginRight: 10 }} />
        <TwitterIcon style={{ color: "white", marginRight: 10 }} />
        <InstagramIcon style={{ color: "white", marginRight: 10 }} />
      </Box>
    </Box>
  );
}
