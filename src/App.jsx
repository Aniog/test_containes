import React from 'react'
import Router from './Router'
import Layout from './Layout'
import HomePage from './pages/Home'
import StorePage from './pages/Store'
import NewsPage from './pages/News'
import ArticlesPage from './pages/Articles'
import DealsPage from './pages/Deals'
import './App.css'

function App({ currentPath = '/' }) {
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />
      case '/store':
        return <StorePage />
      case '/news':
        return <NewsPage />
      case '/articles':
        return <ArticlesPage />
      case '/deals':
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

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWithRouter
