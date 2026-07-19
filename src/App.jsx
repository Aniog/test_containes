import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import "./App.css";

const Shop = lazy(() => import("@/pages/Shop"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Collections = lazy(() => import("@/pages/Collections"));
const About = lazy(() => import("@/pages/About"));
const Journal = lazy(() => import("@/pages/Journal"));

// Expose a navigate function for the preview bridge in index.html
function PreviewNavigateBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      navigate(path, { replace: opts.replace });
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);
  return null;
}

function App() {
  return (
    <Router>
      <PreviewNavigateBridge />
      <Layout>
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-hairline border-t-gold rounded-full animate-spin" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route
              path="*"
              element={
                <div className="container-content py-32 text-center">
                  <p className="font-serif text-5xl mb-4">404</p>
                  <p className="text-taupe mb-8">This page is not yet crafted.</p>
                  <a href="/" className="btn-secondary inline-flex">
                    Back Home
                  </a>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1A1410",
            color: "#F5EFE6",
            border: "1px solid #2A211B",
            fontSize: "13px",
            letterSpacing: "0.05em",
          },
        }}
      />
    </Router>
  );
}

export default App;
