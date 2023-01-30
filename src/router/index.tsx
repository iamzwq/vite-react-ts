import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Layout = lazy(() => import("@/components/Layout"));
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Settings = lazy(() => import("@/pages/Settings"));
const Login = lazy(() => import("@/pages/Login"));
const NotMatch = lazy(() => import("@/pages/NotMatch"));

const lazyComponent = (component: JSX.Element): React.ReactNode => (
  <Suspense fallback="loading...">{component}</Suspense>
);

const routes: RouteObject[] = [
  {
    path: "/login",
    element: lazyComponent(<Login />),
  },
  {
    path: "/",
    element: lazyComponent(<Layout />),
    errorElement: lazyComponent(<NotMatch />),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: lazyComponent(<Home />),
      },
      {
        path: "about",
        element: lazyComponent(<About />),
      },
      {
        path: "settings",
        element: lazyComponent(<Settings />),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
