import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/explore/Explore";
import About from "./pages/about/About";
import Activities from "./pages/activities/Activities";
import Rooms from "./pages/rooms/Rooms";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    route: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Explore /> },
      { path: "/about", element: <About /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/activities", element: <Activities /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
