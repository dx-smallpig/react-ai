import { title } from "process";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LayoutPage = lazy(() => import("@/layout/index"));

export const routes = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/chat",
        element: <div>home</div>,
        handle: {
          title: "聊天",
          icon: "icon-liaotianjilu",
          belongs: "Ai",
        },
      },
      {
        path: "/dataset",
        element: <div>about</div>,
        handle: {
          title: "知识库",
          icon: "icon-shuju",
          belongs: "Ai",
        },
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
