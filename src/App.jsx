import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./style/theme.js";
import { CssBaseline } from "@mui/material";
import Registration from "./feature/Auth/Registration/Registration.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Registration />
    </ThemeProvider>
  );
}

export default App;
