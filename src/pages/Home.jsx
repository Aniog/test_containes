import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/home/Hero'
import { ProductsGrid } from '@/components/home/ProductsGrid'
import { Features } from '@/components/home/Features'
import { About } from '@/components/home/About'
import { ContactSection } from '@/components/home/ContactSection'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <Layout>
      <div ref={containerRef}>
        <Hero />
        <ProductsGrid />
        <Features />
        <About />
        <ContactSection />
      </div>
    </Layout>
  )
}
