import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/shared/Layout"

const Home = lazy(() => import("@/pages/Home"))
const Services = lazy(() => import("@/pages/Services"))
const HowItWorks = lazy(() => import("@/pages/HowItWorks"))
const Products = lazy(() => import("@/pages/Products"))
const CaseStudies = lazy(() => import("@/pages/CaseStudies"))
const Blog = lazy(() => import("@/pages/Blog"))
const Contact = lazy(() => import("@/pages/Contact"))

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-primary" />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/products" element={<Products />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
