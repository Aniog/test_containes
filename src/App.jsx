import React, { useState } from 'react'
import Layout from './Layout'
import HomePage from './pages/Home'
import StorePage from './pages/Store'
import DealsPage from './pages/Deals'
import NewsPage from './pages/News'
import BlogPage from './pages/Blog'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Simple routing system
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'store':
        return <StorePage />
      case 'deals':
        return <DealsPage />
      case 'news':
        return <NewsPage />
      case 'blog':
        return <BlogPage />
      default:
        return <HomePage />
    }
  }

  // Handle navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setCurrentPage(hash)
      }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    // Check initial hash
    handleHashChange()

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <Layout>
      {renderPage()}
    </Layout>
  )
}

export default App
