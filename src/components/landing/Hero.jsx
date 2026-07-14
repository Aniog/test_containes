import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="9x16"
          data-strk-bg-width="800"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-3xl">
          <Badge className="mb-6">Now accepting new clients</Badge>

          <h1
            id="hero-title"
            className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Let's build something{' '}
            <span className="text-indigo-600">great together</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed"
          >
            We help businesses grow with thoughtful design, smart strategy, and
            technology that works. Reach out and let's start a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToContact}>
              Get in touch
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn more
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-indigo-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  )
}

export default Hero
