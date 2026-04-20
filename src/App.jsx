import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import News from '@/pages/News'
import ArticleDetail from '@/pages/ArticleDetail'
import Discounts from '@/pages/Discounts'
import Store from '@/pages/Store'
import Checkout from '@/pages/Checkout'
import AdminArticles from '@/pages/AdminArticles'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<ArticleDetail />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/checkout" element={<Checkout />} />
            <Route path="/admin/articles" element={<AdminArticles />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}
