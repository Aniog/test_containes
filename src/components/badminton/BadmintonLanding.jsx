import React, { useEffect, useRef } from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import EquipmentSection from './EquipmentSection'
import PlayersSection from './PlayersSection'
import RulesSection from './RulesSection'
import TournamentsSection from './TournamentsSection'
import BenefitsSection from './BenefitsSection'
import Footer from './Footer'

export default function BadmintonLanding() {
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <AboutSection />
      <EquipmentSection />
      <PlayersSection />
      <RulesSection />
      <TournamentsSection />
      <BenefitsSection />
      <Footer />
    </div>
  )
}
