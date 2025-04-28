import React from "react";
import { Container, Typography } from "@mui/material";
import Header from "../components/Header/Header";
import ApiServices from "../services/ApiServices";

export default function Home() {
  const { user } = ApiServices();
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Home
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          username: {user.username}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          first_name: {user.first_name}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          last_name: {user.last_name}
        </Typography>
      </Container>
    </>
  );
}
