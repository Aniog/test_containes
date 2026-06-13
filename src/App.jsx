import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import HowItWorks from './pages/HowItWorks'
import Products from './pages/Products'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
        <Route path="/how-it-works" element={<PageLayout><HowItWorks /></PageLayout>} />
        <Route path="/products" element={<PageLayout><Products /></PageLayout>} />
        <Route path="/case-studies" element={<PageLayout><CaseStudies /></PageLayout>} />
        <Route path="/blog" element={<PageLayout><Blog /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
