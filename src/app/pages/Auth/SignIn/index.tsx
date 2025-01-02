import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setToken } from "../../../store/slices/auth";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSignIn = () => dispatch(setToken("lsjrnldirhvsdirdv"));

  return (
    <div>
      <Typography>Sign in</Typography>
      <Button variant="contained" onClick={handleSignIn}>
        SignIn
      </Button>
    </div>
  );
};

export default SignIn;
