import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/common/Layout'
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
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
          <Route element={<Services />} path="services" />
          <Route element={<HowItWorks />} path="how-it-works" />
          <Route element={<ProductsWeSource />} path="products-we-source" />
          <Route element={<CaseStudies />} path="case-studies" />
          <Route element={<Blog />} path="blog" />
          <Route element={<Contact />} path="contact" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
