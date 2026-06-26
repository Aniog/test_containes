import { useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Services from "@/pages/Services"
import HowItWorks from "@/pages/HowItWorks"
import Products from "@/pages/Products"
import CaseStudies from "@/pages/CaseStudies"
import CaseStudyDetail from "@/pages/CaseStudyDetail"
import Blog from "@/pages/Blog"
import BlogPost from "@/pages/BlogPost"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}