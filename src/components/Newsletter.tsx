import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

export default function Newsletter() {
  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={2}
      maxWidth="lg"
      margin="0 auto"
    >
      <Typography variant="h3">Subscribe to Our Special Offers</Typography>
      <Typography variant="h5" color="primary.light">
        Start your 30 day free trial. Cancel Anytime
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 1 }}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
        />
        <Button variant="contained">Subscribe</Button>
      </Stack>
      <Divider flexItem />
    </Box>
  );
}
