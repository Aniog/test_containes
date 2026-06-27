import React from 'react'
import TopBar from './components/TopBar'
import Breadcrumb from './components/Breadcrumb'
import Hero from './components/Hero'
import FeaturedGenerators from './components/FeaturedGenerators'
import BrowseByCategory from './components/BrowseByCategory'
import AllGenerators from './components/AllGenerators'
import HowItWorks from './components/HowItWorks'
import WhyStrikingly from './components/WhyStrikingly'
import FAQ from './components/FAQ'
import ClosingCTA from './components/ClosingCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      {/* Top bar */}
      <TopBar />

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Main content */}
      <main>
        {/* Hero */}
        <Hero />

        {/* Featured Generators */}
        <FeaturedGenerators />

        {/* Browse by Category */}
        <BrowseByCategory />

        {/* All Generators Directory */}
        <AllGenerators />

        {/* How It Works */}
        <HowItWorks />

        {/* Why Strikingly */}
        <WhyStrikingly />

        {/* FAQ */}
        <FAQ />

        {/* Closing CTA */}
        <ClosingCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
