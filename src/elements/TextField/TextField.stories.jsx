import { Box, Typography } from "@mui/material";
import { TextField } from ".";

export default {
  component: TextField,
};

export const TextInput = {
  render: () => (
    <>
      <Box ml={6} mb={2}>
        <Typography>TextInput</Typography>
      </Box>
      <TextField type="text" width="12rem" />
    </>
  ),
};

export const EmailInput = {
  render: () => (
    <>
      <Typography>Email Input</Typography>
      <TextField type="email" />
    </>
  ),
};
export const NumberInput = {
  render: () => (
    <>
      <Typography>Number Input</Typography>
      <TextField variant="number" placeholder="+(XX) XX XX XX XX" />
    </>
  ),
};
export const DateInput = {
  render: () => (
    <>
      <Typography>Date Input</Typography>
      <TextField variant="text" />
    </>
  ),
};
export const SearchInput = {
  render: () => (
    <>
      <Typography>Search Input</Typography>
      <TextField variant="text" />
    </>
  ),
};

export const ComtainedDisabled = {
  render: () => (
    <>
      <Typography>Secondary</Typography>
      <TextField variant="contained" disabled>
        Add Landlord
      </TextField>
    </>
  ),
};
