import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HomeHero from '@/components/home/HomeHero'
import ProductShowcase from '@/components/home/ProductShowcase'
import FeatureGrid from '@/components/home/FeatureGrid'
import CapabilityStats from '@/components/home/CapabilityStats'
import ProcessSection from '@/components/home/ProcessSection'
import ContactBanner from '@/components/home/ContactBanner'
import strkImgConfig from '@/strk-img-config.json'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900">
      <HomeHero />
      <ProductShowcase />
      <FeatureGrid />
      <CapabilityStats />
      <ProcessSection />
      <ContactBanner />
    </div>
  )
}

export default Home
