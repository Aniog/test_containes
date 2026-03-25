import React from 'react'
import TulipGallery from './components/tulips/TulipGallery.jsx'
import { Flower2 } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center gap-3">
            <Flower2 className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Tulip Collection
            </h1>
            <Flower2 className="w-8 h-8 text-pink-600" />
          </div>
          <p className="text-center text-gray-600 mt-2">
            A beautiful showcase of my favorite tulip flowers
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TulipGallery />
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-purple-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600">
            <p className="flex items-center justify-center gap-2">
              Made with <span className="text-red-500">❤️</span> for tulip lovers
              <span className="text-xl">🌷</span>
            </p>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} My Tulip Garden. Blooming with beauty.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
