import React, { useState } from 'react'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import ArticlesPage from './pages/ArticlesPage'
import NewsPage from './pages/NewsPage'
import DealsPage from './pages/DealsPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Simple routing based on hash
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home'
      setCurrentPage(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Set initial page

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'store':
        return <StorePage />
      case 'articles':
        return <ArticlesPage />
      case 'news':
        return <NewsPage />
      case 'deals':
        return <DealsPage />
      default:
        return <HomePage />
    }
  }

  return (
    <Layout>
      {renderPage()}
    </Layout>
  )
}

export default App
