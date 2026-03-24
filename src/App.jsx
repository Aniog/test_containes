import React, { useState } from 'react'
import Home from './pages/Home'
import Games from './pages/Games'
import Store from './pages/Store'
import News from './pages/News'
import Blog from './pages/Blog'
import Deals from './pages/Deals'
import FavoriteGames from './pages/FavoriteGames'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Simple routing function
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      case 'games':
        return <Games onNavigate={setCurrentPage} />
      case 'store':
        return <Store onNavigate={setCurrentPage} />
      case 'news':
        return <News onNavigate={setCurrentPage} />
      case 'blog':
        return <Blog onNavigate={setCurrentPage} />
      case 'deals':
        return <Deals onNavigate={setCurrentPage} />
      case 'favorite-games':
        return <FavoriteGames onNavigate={setCurrentPage} />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  // Pass navigation function to all pages
  return (
    <div className="App">
      {React.cloneElement(renderPage(), { onNavigate: setCurrentPage })}
    </div>
  )
}

export default App
