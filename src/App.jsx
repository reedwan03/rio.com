import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import Homepage from "./pages/Homepage";
import Mainlayout from "./layout/Mainlayout";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import Pets from "./pets.json";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path="/shop" element={<ShopPage pet={Pets} />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
