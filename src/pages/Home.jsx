import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import CapabilitiesSection from '@/components/home/CapabilitiesSection'
import ContactBanner from '@/components/home/ContactBanner'
import HomeHero from '@/components/home/HomeHero'
import IndustryShowcase from '@/components/home/IndustryShowcase'
import ProductHighlights from '@/components/home/ProductHighlights'
import SiteFooter from '@/components/home/SiteFooter'
import SiteHeader from '@/components/home/SiteHeader'
import strkImgConfig from '@/strk-img-config.json'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div id="top" ref={containerRef} className="bg-brand-mist text-brand-copy">
      <SiteHeader />
      <HomeHero />
      <ProductHighlights />
      <CapabilitiesSection />
      <IndustryShowcase />
      <ContactBanner />
      <SiteFooter />
    </div>
  )
}

export default Home
