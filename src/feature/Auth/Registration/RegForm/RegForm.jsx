import { Container, Grid, Stack } from "@mui/material";
import { TextField } from "../../../../elements/TextField/index";
import { StyledButton } from "../../../../elements/Button/Button.styles";
import { Form } from "formik";

const RegForm = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Form sx={{ mt: 3 }} component="form">
        <h1
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Fill In Your Profile
        </h1>
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
          <Grid item xs={12}>
            <Stack
              direction={"row"}
              gap={5}
              justifyContent={"center"}
              alignContent={"center"}
              m={10}
            >
              <StyledButton variant="contained">Back</StyledButton>
              <StyledButton variant="contained">Next</StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default RegForm;
