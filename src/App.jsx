import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#050a14] min-h-screen">
        {/* Sticky nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a14]/80 backdrop-blur-md border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            <span className="text-lg font-black text-white">
              Micro<span className="text-[#00d4aa]">Cosmos</span>
            </span>
            <div className="hidden md:flex items-center gap-8">
              {[['#intro', 'About'], ['#gallery', 'Gallery'], ['#categories', 'Categories'], ['#facts', 'Facts'], ['#explore', 'Explore']].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-slate-400 text-sm hover:text-[#00d4aa] transition-colors font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href="#gallery"
              className="bg-[#00d4aa] text-[#050a14] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#00ffcc] transition-colors"
            >
              Explore
            </a>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
