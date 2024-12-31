import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setToken } from "../../../store/slice/auth";

type Props = {};

const SignIn = (props: Props) => {
  const dispatch = useDispatch();

  const handleSignIn = () => dispatch(setToken("hello"));

  return (
    <Button variant="contained" onClick={handleSignIn}>
      SignIn
    </Button>
  );
};

export default SignIn;
