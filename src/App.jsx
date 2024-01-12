
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./style/theme.js";
import Register from "./features/auth/registration/register.jsx";


function App() {

  return (
    <>
        <ThemeProvider theme={theme}>
          <Register/>
        </ThemeProvider>
    </>
  )
}

export default App
