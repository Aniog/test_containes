import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import Stats from '@/components/home/Stats'
import ProductFamily from '@/components/home/ProductFamily'
import FeaturedMachine from '@/components/home/FeaturedMachine'
import Capabilities from '@/components/home/Capabilities'
import Industries from '@/components/home/Industries'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
import ContactCTA from '@/components/home/ContactCTA'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustStrip />
      <Stats />
      <ProductFamily />
      <FeaturedMachine />
      <Capabilities />
      <Industries />
      <Process />
      <Testimonials />
      <ContactCTA />
    </div>
  )
}
