import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/home/HomeHero'
import ProductsSection from '@/components/home/ProductsSection'
import AdvantagesSection from '@/components/home/AdvantagesSection'
import WorkflowSection from '@/components/home/WorkflowSection'
import ContactSection from '@/components/home/ContactSection'
import {
  heroPoints,
  highlights,
  industries,
  productCards,
  workflowSteps,
} from './homeContent'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-950 text-stone-50">
      <HomeHero heroPoints={heroPoints} />
      <ProductsSection productCards={productCards} />
      <AdvantagesSection highlights={highlights} industries={industries} />
      <WorkflowSection workflowSteps={workflowSteps} />
      <ContactSection />
    </div>
  )
}
