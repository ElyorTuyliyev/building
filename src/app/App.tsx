import { Box } from "@mui/material";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import { AUTH_ROUTES, ROUTES } from "./routes";
import { useSelector } from "react-redux";
function App() {
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );
  if (!token) {
    return (
      <Routes>
        {AUTH_ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    );
  }

  return (
    <Box>
      <Routes>
        {ROUTES.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes>
    </Box>
  );
}
export default App;
