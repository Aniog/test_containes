import React, { useState, useEffect } from 'react'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import DealsPage from './pages/DealsPage'
import StorePage from './pages/StorePage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Set up global navigation handler
  useEffect(() => {
    window.setCurrentPage = setCurrentPage
    return () => {
      delete window.setCurrentPage
    }
  }, [])

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'blog':
        return <BlogPage />
      case 'deals':
        return <DealsPage />
      case 'store':
        return <StorePage />
      default:
        return <HomePage />
    }
  }

  return (
    <Layout currentPage={currentPage}>
      {renderCurrentPage()}
    </Layout>
  )
}

export default App
