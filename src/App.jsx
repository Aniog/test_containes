import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/common/Layout'
import Blog from './pages/Blog'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Products from './pages/Products'
import Services from './pages/Services'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products" element={<Products />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
