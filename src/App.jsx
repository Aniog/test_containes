import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Collection from './pages/Collection'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Collection />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}

export default App
