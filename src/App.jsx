import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Deals from './pages/Deals'
import Store from './pages/Store'
import FavoriteGames from './pages/FavoriteGames'
import DataManagement from './pages/DataManagement'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="deals" element={<Deals />} />
          <Route path="store" element={<Store />} />
          <Route path="favorite-games" element={<FavoriteGames />} />
          <Route path="data" element={<DataManagement />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
