import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Layout from './Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import JournalPage from './pages/JournalPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ShopPage from './pages/ShopPage.jsx'

function PreviewNavigator() {
  const navigate = useNavigate()
  const location = useLocation()

  window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
    navigate(path, options)
  }

  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/collections" element={<Navigate to="/shop" replace />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="*" element={<Navigate to={location.pathname === '/' ? '/' : '/'} replace />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <PreviewNavigator />
    </BrowserRouter>
  )
}

export default App
