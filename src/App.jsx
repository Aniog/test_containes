import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import HowItWorks from '@/pages/HowItWorks'
import ProductsWeSource from '@/pages/ProductsWeSource'
import CaseStudies from '@/pages/CaseStudies'
import Blog from '@/pages/Blog'
import Contact from '@/pages/Contact'
import NotFound from '@/components/site/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Services />} path="/services" />
          <Route element={<HowItWorks />} path="/how-it-works" />
          <Route element={<ProductsWeSource />} path="/products-we-source" />
          <Route element={<CaseStudies />} path="/case-studies" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
