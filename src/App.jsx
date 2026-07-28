import React, { useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { Toaster } from "sonner"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Layout } from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Services from "@/pages/Services"
import HowItWorks from "@/pages/HowItWorks"
import Products from "@/pages/Products"
import CaseStudies from "@/pages/CaseStudies"
import Blog from "@/pages/Blog"
import Contact from "@/pages/Contact"

function ImageLoader() {
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, document.body)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return null
}

function App() {
  return (
    <Router>
      <ImageLoader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Toaster position="top-right" richColors />
    </Router>
  )
}

export default App
