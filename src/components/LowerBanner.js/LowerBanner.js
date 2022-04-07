import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Banner from "../../assets/sticker.png";
import { useTheme } from "@mui/material/styles";

export default function LowerBanner() {
  const theme = useTheme();

  return (
    <Box
      style={{
        width: "100%",
        background:
          "linear-gradient(90deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)",
      }}
      mt={theme.spacing(6)}
    >
      <Container>
        <Grid container alignItems={"center"} justifyContent="center">
          <Grid item md={6}>
            <Typography variant="h3" style={{ color: "gold", fontWeight: 500 }}>
              The Golden Guest
            </Typography>
            <Typography variant="body2" color="white" mt={theme.spacing(3)}>
              The Golden Guests edition by the Billionaire Club are the rarest
              NFTs. They are all hand drawn and have no element in common with
              the regular collection.
            </Typography>
            <Button
              variant="contained"
              disableElevation
              style={{
                marginTop: theme.spacing(3),
                background:
                  "linear-gradient(90deg, #7918F2 48%, #4801FF 100%);",
                border: "2px solid #000000",
                boxSizing: "border-box",
              }}
            >
              Join us to register for the Presale
            </Button>
          </Grid>
          <Grid item xs={0} md={2}></Grid>
          <Grid item md={4}>
            <img src={Banner} alt={"sticker"} width={300} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
