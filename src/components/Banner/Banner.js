import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bannerImage from "../../assets/banner.png";
import Ellipse from "../../assets/ellipse.png";

export default function Banner() {
  return (
    <Box sx={{ minHeight: "90vh", width: "100%", position: "relative" }}>
      <Grid container alignItems={"center"}>
        <Grid item md={6}>
          <img
            src={bannerImage}
            alt="banner"
            style={{ width: "auto", height: "90vh" }}
          />
        </Grid>
        <Grid item md={4}>
          <Box sx={{ width: "400px" }}>
            <Typography variant="h2" style={{ color: "#FFFFFF" }}>
              Exclusive
            </Typography>
            <Typography
              variant="h4"
              style={{
                textAlign: "end",
                textJustify: "justify",
                background: "-webkit-linear-gradient(#00DBDE,#FC00FF)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              newest NFT release
            </Typography>
          </Box>
          <Box mt={8}>
            <Typography
              variant="body1"
              component="h6"
              style={{ color: "#FFFFFF" }}
            >
              The BILLIONAIRE CLUB is a private collection of 10 000 billionaire
              apes NFTs—unique digital collectibles. The apes are stored as
              ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
              Reveal on October 20th.
            </Typography>
          </Box>
          <Box
            mt={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="youremail@.com"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: "gray",
                },
              }}
              style={{
                borderWidth: 2,
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(90deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%) 1",
                flex: 7,
              }}
            />
            <Button
              variant="contained"
              disableElevation
              style={{
                background:
                  "linear-gradient(90deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)",
                marginLeft: 10,
                height: 60,
                flex: 3,
              }}
            >
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
      <img
        src={Ellipse}
        alt="elipse"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: -999,
        }}
      />
      <img
        src={Ellipse}
        alt="elipse"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "rotate(270deg)",
          width: 200,
          zIndex: -999,
        }}
      />
    </Box>
  );
}
