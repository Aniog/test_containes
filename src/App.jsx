import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Services from "@/pages/Services"
import HowItWorks from "@/pages/HowItWorks"
import Products from "@/pages/Products"
import CaseStudies from "@/pages/CaseStudies"
import Blog from "@/pages/Blog"
import Contact from "@/pages/Contact"
import { COMPANY } from "@/data/site"
import "./App.css"

const PAGE_META = {
  "/": {
    title: `${COMPANY.name} | China Sourcing Agent for Global Buyers`,
    description:
      "China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.",
  },
  "/services": {
    title: `Sourcing Services | ${COMPANY.name}`,
    description:
      "Supplier sourcing, factory verification, quality inspection, production follow-up, and shipping coordination. Flat fees, written in advance.",
  },
  "/how-it-works": {
    title: `How It Works | ${COMPANY.name}`,
    description:
      "A clear 6-step sourcing process from brief to delivery, with a written deliverable at every step.",
  },
  "/products": {
    title: `Products We Source | ${COMPANY.name}`,
    description:
      "Eight product categories we cover, with established supplier networks in China's main manufacturing clusters.",
  },
  "/case-studies": {
    title: `Case Studies | ${COMPANY.name}`,
    description:
      "Recent sourcing projects with real outcomes: cookware for US DTC, skincare OEM for EU, yoga mats for AU, and more.",
  },
  "/blog": {
    title: `Blog & Resources | ${COMPANY.name}`,
    description:
      "Practical guides, templates and field notes for buyers sourcing from China.",
  },
  "/contact": {
    title: `Get a Free Sourcing Quote | ${COMPANY.name}`,
    description:
      "Tell us about your project. We respond within 1 business day with realistic timelines and ballpark costs.",
  },
}

const PageMeta = () => {
  const location = useLocation()
  useEffect(() => {
    const path = location.pathname
    const meta = PAGE_META[path] || PAGE_META["/"]
    document.title = meta.title
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement("meta")
      desc.setAttribute("name", "description")
      document.head.appendChild(desc)
    }
    desc.setAttribute("content", meta.description)
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname])
  return null
}

const RouteImageLoader = () => {
  const location = useLocation()
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const root = document.getElementById("root")
      if (root) {
        ImageHelper.loadImages(strkImgConfig, root)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])
  return null
}

function App() {
  return (
    <Router>
      <PageMeta />
      <RouteImageLoader />
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
    </Router>
  )
}

export default App
