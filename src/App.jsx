import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import HowItWorks from "@/pages/HowItWorks";
import Products from "@/pages/Products";
import CaseStudies from "@/pages/CaseStudies";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="section bg-white">
      <div className="container-x flex flex-col items-center gap-4 py-24 text-center">
        <span className="eyebrow">404</span>
        <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
          We couldn't find that page
        </h1>
        <p className="max-w-md text-muted-foreground">
          The link you followed may be outdated, or the page may have moved.
        </p>
        <a href="/" className="btn-primary mt-2">
          Back to home
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products" element={<Products />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
