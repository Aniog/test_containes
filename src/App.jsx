import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HomeHero from '@/components/home/HomeHero'
import Products from '@/components/home/Products'
import About from '@/components/home/About'
import Contact from '@/components/home/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomeHero />
                  <Products />
                  <About />
                  <Contact />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
