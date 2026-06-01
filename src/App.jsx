import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import MemoryDetail from './pages/MemoryDetail'
import Submit from './pages/Submit'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cosmos text-starlight flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/memory/:id" element={<MemoryDetail />} />
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

