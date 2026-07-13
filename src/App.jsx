import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/layout/Layout.jsx"
import Home from "@/pages/Home.jsx"
import Services from "@/pages/Services.jsx"
import HowItWorks from "@/pages/HowItWorks.jsx"
import Products from "@/pages/Products.jsx"
import CaseStudies from "@/pages/CaseStudies.jsx"
import Blog from "@/pages/Blog.jsx"
import Contact from "@/pages/Contact.jsx"
import NotFound from "@/pages/NotFound.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
