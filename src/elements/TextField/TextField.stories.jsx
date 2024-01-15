import { Box, Typography } from "@mui/material";
import { TextField } from "./TextField";

export default {
  component: TextField,
};

export const TextInput = {
  render: () => (
    <>
      <Box ml={6} mb={2}>
        <Typography>TextInput</Typography>
      </Box>
      <TextField type="text" />
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
      <TextField type="number" placeholder="+(XX) XX XX XX XX" />
    </>
  ),
};
export const DateInput = {
  render: () => (
    <>
      <Typography>Date Input</Typography>
      <TextField type="date" />
    </>
  ),
};
export const SearchInput = {
  render: () => (
    <>
      <Typography>Search Input</Typography>
      <TextField type="search" />
    </>
  ),
};

export const ComtainedDisabled = {
  render: () => (
    <>
      <Typography>Secondary</Typography>
      <TextField variant="filled" disabled />
    </>
  ),
};
