import { Container, Grid, Stack } from "@mui/material";
import { TextField } from "../../../../elements/TextField/index";
import { StyledButton } from "../../../../elements/Button/Button.styles";
import { Form } from "formik";

const RegForm = ({formik}) => {
  const {handleSubmit, handleChange, values, touched, errors} = formik
  return (
    <Container component="main">
      <Form sx={{ mt: 3 }} onSubmit={handleSubmit}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Enter First Name"
              name="firstname"
              fullWidth
              id="firstname"
              value={values.firstname}
              onChange={handleChange}
              error={touched.firstname && Boolean(errors.firstname)}
              helperText={touched.firstname && errors.firstname}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                placeholder="Enter Last Name"
                name="lastname"
                fullWidth
                id="lastname"
                value={values.lastname}
                onChange={handleChange}
                error={touched.lastname && Boolean(errors.lastname)}
                helperText={touched.lastname && errors.lastname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
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
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction={"row"}
              gap={5}
              justifyContent={"center"}
              alignContent={"center"}
              mt={8}
              mx={4}
            >
              <StyledButton variant="contained" fullWidth>Back</StyledButton>
              <StyledButton type="submit" variant="contained" fullWidth> Submit </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default RegForm;
