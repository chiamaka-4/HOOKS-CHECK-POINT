import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeScreen from "./component/screens/HomeScreen";
import TribeOfJudah from "./component/screens/TribeOfJudah";
import Aparajita from "./component/screens/Aparajita";
import ThisIsFate from "./component/screens/ThisIsFate";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/description/tribeofjudah",
        element: <TribeOfJudah />,
      },
      {
        path: "/description/aparajita",
        element: <Aparajita />,
      },
      {
        path: "/description/thisisfate",
        element: <ThisIsFate />,
      },
    ],

    // whenever you want to nest, you use children to nest
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
