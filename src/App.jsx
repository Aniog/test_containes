import React, { useState } from 'react'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import ArticlesPage from './pages/ArticlesPage'
import NewsPage from './pages/NewsPage'
import DealsPage from './pages/DealsPage'
import PlatformPage from './pages/PlatformPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [platformId, setPlatformId] = useState('')

  // Simple routing based on hash
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home'
      
      // Check if it's a platform page
      if (hash.startsWith('platform/')) {
        const platform = hash.replace('platform/', '')
        setCurrentPage('platform')
        setPlatformId(platform)
      } else {
        setCurrentPage(hash)
        setPlatformId('')
      }
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
      case 'platform':
        return <PlatformPage platformId={platformId} />
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
