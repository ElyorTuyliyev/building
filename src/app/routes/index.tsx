import { ReactNode } from "react";
import { ROUTE_PATHS } from "./path";
import NotFound from "../pages/NotFound";

type RouteType = {
  path: string;
  component: ReactNode;
};

const {} = ROUTE_PATHS;
export const ROUTES: RouteType[] = [
  {
    path: "*",
    component: <NotFound />,
  },
];
