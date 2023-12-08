
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./style/theme.js";

function App() {

  return (
    <>
        <ThemeProvider theme={theme}>
          <>Hello</>
        </ThemeProvider>
    </>
  )
}

export default App
