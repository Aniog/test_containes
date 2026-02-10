import React, { useState } from 'react'
import Layout from './Layout'
import HeroSection from './components/HeroSection'
import PopularBreedsSection from './components/PopularBreedsSection'
import EducationalSection from './components/EducationalSection'
import BreedGrid from './components/breeds/BreedGrid'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const handleExploreBreeds = () => {
    setCurrentView('breeds')
    // Smooth scroll to breeds section
    setTimeout(() => {
      document.getElementById('breeds')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Layout>
      {currentView === 'home' ? (
        <>
          <HeroSection onExploreBreeds={handleExploreBreeds} />
          <PopularBreedsSection onExploreBreeds={handleExploreBreeds} />
          <EducationalSection />
        </>
      ) : (
        <div id="breeds">
          {/* Back to Home Button */}
          <div className="bg-white border-b border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={handleBackToHome}
                className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2 transition-colors duration-200"
              >
                ← Back to Home
              </button>
            </div>
          </div>
          <BreedGrid />
        </div>
      )}
    </Layout>
  )
}

export default App
