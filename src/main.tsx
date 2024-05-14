import "./index.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Landing, Root, VerifyEmail } from "./pages";
import { Providers } from "./store/provider";
import { games } from "./data/games";
import PersistLogin from "./utils/PersistLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <PersistLogin />,
        children: [
          {
            path: "/",
            element: <Landing />,
          },
          {
            path: "/games",
            element: <Outlet />,

            children: games.map((game) => ({
              path: game.title,
              element: game.element,
            })),
          },
          {
            path: "/verify/:token",
            element: <VerifyEmail />,
          },
          {
            path: "about",
            element: <div>About</div>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>,
);
