import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Services from "@/pages/Services"
import HowItWorks from "@/pages/HowItWorks"
import Products from "@/pages/Products"
import CaseStudies from "@/pages/CaseStudies"
import Blog from "@/pages/Blog"
import Contact from "@/pages/Contact"
import "./App.css"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])
  return null
}

function PreviewRouteBridge() {
  useEffect(() => {
    if (typeof window === "undefined") return
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      if (opts.replace) {
        window.history.replaceState({}, "", path)
      } else {
        window.history.pushState({}, "", path)
      }
      window.dispatchEvent(new PopStateEvent("popstate", { state: {} }))
    }
    return () => {
      try {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
      } catch (e) {
        // ignore
      }
    }
  }, [])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <PreviewRouteBridge />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
