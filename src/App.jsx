
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./style/theme.js";
import {Button} from "./elements/Button";

function App() {

  return (
    <>
        <ThemeProvider theme={theme}>
          <>Hello</>
            <Button>Submit</Button>
        </ThemeProvider>
    </>
  )
}

export default App
