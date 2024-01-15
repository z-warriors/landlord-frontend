import { Container, Grid } from "@mui/material";
import { TextField } from "../../../../elements/TextField/index";

import { Form } from "formik";

const RegForm = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Form sx={{ mt: 3 }} component="form">
        <h1>Fill In Your Profile</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="full-name"
              placeholder="Enter Full Name"
              name="name"
              fullWidth
              id="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Enter Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password"
              type="password"
              id="password"
              placeholder="Enter Password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default RegForm;
