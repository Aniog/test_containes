import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import DealsPage from './pages/DealsPage'
import ArticleDetailPage from './pages/ArticleDetailPage'
import FavoriteGamePage from './pages/FavoriteGamePage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<ArticleDetailPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/favorites" element={<FavoriteGamePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
