import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageSeo from '@/components/layout/PageSeo'
import SiteLayout from '@/components/layout/SiteLayout'
import Blog from '@/pages/Blog'
import CaseStudies from '@/pages/CaseStudies'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import HowItWorks from '@/pages/HowItWorks'
import ProductsWeSource from '@/pages/ProductsWeSource'
import Services from '@/pages/Services'

function App() {
  return (
    <BrowserRouter>
      <PageSeo />
      <Routes>
        <Route element={<SiteLayout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Services />} path="services" />
          <Route element={<HowItWorks />} path="how-it-works" />
          <Route element={<ProductsWeSource />} path="products-we-source" />
          <Route element={<CaseStudies />} path="case-studies" />
          <Route element={<Blog />} path="blog" />
          <Route element={<Contact />} path="contact" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
