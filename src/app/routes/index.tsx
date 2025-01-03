import { ReactNode } from "react";
import { ROUTE_PATHS } from "./path";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/Auth/SignIn";
import Home from "../pages/Home";

type RouteType = {
  path: string;
  component: ReactNode;
};

const { SIGN_IN, MAIN } = ROUTE_PATHS;
export const ROUTES: RouteType[] = [
  {
    path: "*",
    component: <NotFound />,
  },
  {
    path: MAIN,
    component: <Home />,
  },
  {
    path: SIGN_IN,
    component: <SignIn />,
  },
];

export const AUTH_ROUTES: RouteType[] = [
  {
    path: "*",
    component: <NotFound />,
  },
  {
    path: SIGN_IN,
    component: <SignIn />,
  },
];
