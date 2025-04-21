import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LayoutPage = lazy(() => import("@/layout/index"));
const Chat = lazy(() => import("@pages/chat"));
const Dataset = lazy(() => import("@pages/dataset"));

export const routes = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/chat",
        element: <Chat />,
        handle: {
          title: "聊天",
          icon: "icon-liaotianjilu",
          belongs: "Ai",
        },
      },
      {
        path: "/dataset",
        element: <Dataset />,
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
