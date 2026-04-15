import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Books from './pages/Books'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [cartItemsCount, setCartItemsCount] = React.useState(0)

  const handleSearchChange = (query) => {
    setSearchQuery(query)
  }

  return (
    <Router>
      <Layout 
        cartItemsCount={cartItemsCount}
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<div className="p-8 text-center">分类页面开发中...</div>} />
          <Route path="/cart" element={<div className="p-8 text-center">购物车页面开发中...</div>} />
          <Route path="/about" element={<div className="p-8 text-center">关于页面开发中...</div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
