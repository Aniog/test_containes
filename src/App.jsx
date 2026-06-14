import React, { useCallback, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

import { ToastProvider } from '@/components/ui/Toaster'
import Navbar from '@/components/site/Navbar'
import Footer from '@/components/site/Footer'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Products from '@/components/sections/Products'
import Capabilities from '@/components/sections/Capabilities'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import Specs from '@/components/sections/Specs'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

const App = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToContact = useCallback(() => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <ToastProvider>
      <div ref={containerRef} className="min-h-screen bg-bg text-ink">
        <Navbar onRequestQuote={scrollToContact} />
        <main>
          <Hero onRequestQuote={scrollToContact} />
          <TrustBar />
          <Products />
          <Capabilities />
          <Industries />
          <Process />
          <Specs />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  )
}

export default App
