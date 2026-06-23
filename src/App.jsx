import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Layout } from "./Layout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import HowItWorks from "./pages/HowItWorks"
import ProductsWeSource from "./pages/ProductsWeSource"
import CaseStudies from "./pages/CaseStudies"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products-we-source" element={<ProductsWeSource />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
