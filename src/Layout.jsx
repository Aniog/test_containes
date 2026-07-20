import { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import CartDrawer from "./components/shared/CartDrawer.jsx";
import SearchDrawer from "./components/shared/SearchDrawer.jsx";
import SiteFooter from "./components/shared/SiteFooter.jsx";
import SiteHeader from "./components/shared/SiteHeader.jsx";
import strkImgConfig from "./strk-img-config.json";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options);
    };

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const element = document.getElementById(location.hash.slice(1));
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    return undefined;
  }, [location.pathname, location.hash]);

  useEffect(() => {
    let cleanup = () => {};
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, contentRef.current);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      cleanup();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <SiteHeader />
      <main ref={contentRef}>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
      <SearchDrawer />
    </div>
  );
};

export default Layout;
