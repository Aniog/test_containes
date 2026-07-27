import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout.jsx";
import Home from "@/pages/Home.jsx";
import Services from "@/pages/Services.jsx";
import HowItWorks from "@/pages/HowItWorks.jsx";
import Products from "@/pages/Products.jsx";
import CaseStudies from "@/pages/CaseStudies.jsx";
import Blog from "@/pages/Blog.jsx";
import Contact from "@/pages/Contact.jsx";

function NotFound() {
  return (
    <section className="bg-white">
      <div className="container-x py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-base text-brand-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <a href="/" className="btn-primary mt-8 inline-flex">
          Back to home
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
