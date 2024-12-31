import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setToken } from "../../../store/slices/auth";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSignIn = () => dispatch(setToken("lsjrnldirhvsdirdv"));

  return (
    <Button variant="contained" onClick={handleSignIn}>
      SignIn
    </Button>
  );
};

export default SignIn;
