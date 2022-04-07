import "./App.css";
import * as React from "react";
import { Banner, Cards } from "./components";
import { Container, Divider, Grid, Typography } from "@mui/material";
import Image1 from "./assets/1.png";
import Image2 from "./assets/2.png";
import Image3 from "./assets/3.png";
import Image4 from "./assets/4.png";
import Image5 from "./assets/5.png";
import Image6 from "./assets/6.png";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import LowerBanner from "./components/LowerBanner.js/LowerBanner";
import Footer from "./components/Footer/Footer";

function App() {
  const theme = useTheme();
  return (
    <>
      <Banner />
      <Container style={{ marginTop: theme.spacing(6) }}>
        <Box style={{ marginBottom: theme.spacing(6) }}>
          <Typography
            style={{
              textJustify: "justify",
              background: "-webkit-linear-gradient(#00DBDE,#FC00FF)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
            }}
            variant={"h2"}
            fontWeight={500}
          >
            Collection
          </Typography>
          <Typography
            style={{
              color: "white",
              textJustify: "justify",
            }}
            variant="body1"
            component="h6"
          >
            With more than 180+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={6} md={4}>
            <Cards image={Image1} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Cards image={Image2} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Cards image={Image3} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Cards image={Image4} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Cards image={Image5} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Cards image={Image6} />
          </Grid>
        </Grid>
      </Container>
      <LowerBanner />
      <Box
        style={{ width: "100%", textAlign: "center" }}
        mt={theme.spacing(12)}
        mb={theme.spacing(12)}
      >
        <Typography
          style={{
            textJustify: "justify",
            background:
              "-webkit-linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
          }}
          variant="h4"
        >
          Get Aped with Us!
        </Typography>
        <Typography
          style={{
            color: "white",
          }}
          variant="body1"
        >
          Sign up for our newsletter
        </Typography>
      </Box>
      <Divider color="gray" />
      <Footer />
    </>
  );
}

export default App;
