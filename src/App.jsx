import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./style/theme.js";
import { CssBaseline } from "@mui/material";
import Registration from "./feature/Auth/Registration/Registration.jsx";
import store from "./redux/combineStore.js";
function App() {
  return (
      <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Registration />
    </ThemeProvider>
      </Provider>
  );
}

export default App;
