
import { ThemeProvider } from '@mui/material/styles';
import {Stack} from "@mui/material";
import {theme} from "./style/theme.js";
import {Button} from "./elements/Button";

function App() {

  return (
    <>
        <ThemeProvider theme={theme}>
          <>Hello</>
            <Stack direction="row" spacing={2}>
            <Button variant="contained">Add Landlord</Button>
            <Button variant="text">Add Landlord</Button>
            </Stack>
        </ThemeProvider>
    </>
  )
}

export default App
