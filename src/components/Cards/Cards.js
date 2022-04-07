import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";

export default function Cards({ image }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background:
          "radial-gradient(145.1% 102.55% at 0% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(38.2676px)",
        border: "2px solid white",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <StarIcon style={{ color: "orange" }} />
          </IconButton>
        }
        title="@Knight"
        titleTypographyProps={{
          color: "white",
        }}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Monkey"
        style={{
          height: "auto",
          boxSizing: "border-box",
          padding: 20,
        }}
      />
      <CardActions disableSpacing>
        <Typography variant="caption" color={"white"}>
          Current Bid
        </Typography>
      </CardActions>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6" color={"white"}>
          0.44538 ETH
        </Typography>
        <Typography variant="h6" color={"white"} textAlign="right">
          0.44538 ETH
        </Typography>
      </CardActions>
    </Card>
  );
}
