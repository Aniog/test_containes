import React from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
import Layout from "@/Layout.jsx";
import Home from "@/pages/Home.jsx";
import Shop from "@/pages/Shop.jsx";
import ProductPage from "@/pages/ProductPage.jsx";
import SimplePage from "@/pages/SimplePage.jsx";
import { CartProvider } from "@/context/CartContext.jsx";

function Root() {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate;
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);

  return (
    <CartProvider>
      <Outlet />
    </CartProvider>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route
          path="about"
          element={
            <SimplePage kicker="Our Story" title="Jewelry for the everyday ritual">
              <p>
                Velmora was founded on a simple frustration: beautiful jewelry
                was either fine and precious — locked away for occasions — or
                fast and forgettable. We believed there was a third way.
              </p>
              <p>
                Every Velmora piece is plated in a generous layer of 18k gold
                over recycled brass, hand-finished in small batches, and sealed
                with a protective coating so it stands up to real life:
                workouts, weekends, weddings and everything between.
              </p>
              <p>
                The result is demi-fine jewelry that feels like an heirloom and
                prices itself like an everyday decision. Crafted to be
                treasured — worn to be lived in.
              </p>
            </SimplePage>
          }
        />
        <Route
          path="journal"
          element={
            <SimplePage kicker="The Journal" title="Notes from the atelier">
              <p>
                Styling notes, care rituals and the stories behind each
                collection — published weekly from the Velmora atelier.
              </p>
              <p>
                Coming soon: how to build the perfect ear stack, the art of
                layering chains, and a guide to gifting gold well.
              </p>
            </SimplePage>
          }
        />
        <Route
          path="*"
          element={
            <SimplePage kicker="404" title="This page has wandered off">
              <p>
                The page you're looking for may have been moved, renamed, or
                is temporarily unavailable.
              </p>
            </SimplePage>
          }
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
