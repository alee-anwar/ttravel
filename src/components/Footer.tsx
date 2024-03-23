"use client";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const footerMenu = [
  "Book Now",
  "Services",
  "Partner Login",
  "Terms & Conditions",
];

export default function Footer() {
  return (
    <Box
      component="section"
      maxWidth="lg"
      sx={{ padding: 0, mb: 1, mx: "auto" }}
    >
      <Grid container py={5}>
        <Grid item lg={8} gap={4}>
          <Stack gap={4}>
            <Box
              component="img"
              sx={{ width: 120 }}
              alt="Logo"
              src={"/T-TRAVEL.png"}
            />
            <Typography color="primary.light" maxWidth={300}>
              Make your airport visit less complicated, faster, and more
              enjoyable.
            </Typography>
            <Box display="flex" gap={2}>
              {footerMenu.map((page) => (
                <Link
                  href="#"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                  underline="none"
                  color="info.contrastText"
                  fontWeight={500}
                >
                  {page}
                </Link>
              ))}
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          lg={4}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Stack spacing={2.2}>
            <Typography variant="h5" color="primary.main" fontWeight={500}>
              Get the app
            </Typography>
            <Link href="/">
              <Box component="img" src="/app-store.svg" alt="App Store Image" />
            </Link>
            <Link href="">
              <Box
                component="img"
                src="/play-store.png"
                alt="Play Store Image"
                width={135}
              />
            </Link>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "#e6e6e6" }} />
      <Grid container py={3}>
        <Grid item lg={6}>
          <Typography color="info.contrastText">
            © 2024 TTravel. All rights reserved.
          </Typography>
        </Grid>
        <Grid item lg={6} justifyContent="flex-end" display="flex">
          <Stack direction="row" spacing={3}>
            <Box component="img" src="/twitter.svg"></Box>
            <Box component="img" src="/linkedin.svg"></Box>
            <Box component="img" src="/facebook.svg"></Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
