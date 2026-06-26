import { useRef, useEffect } from 'react'
import Hero from '@/components/hero/Hero'
import Stats from '@/components/stats/Stats'
import Products from '@/components/products/Products'
import About from '@/components/about/About'
import Testimonials from '@/components/testimonials/Testimonials'
import CtaBanner from '@/components/cta/CtaBanner'
import Contact from '@/components/contact/Contact'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ImageHelper) {
      return window.ImageHelper.loadImages({}, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <Stats />
      <Products />
      <About />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </div>
  )
}
