import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'
import { SITE } from '@/content'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const HIGHLIGHTS = [
  'Vetted suppliers',
  'On-site factory audits',
  'Pre-shipment QC',
  'Global shipping',
]

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <div
          data-strk-bg-id="hero-bg-7f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 h-full w-full opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            China-Based Sourcing Agent
          </p>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-foreground leading-[1.1]"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            receive the right goods, on time, without the guesswork.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button to="/contact" size="lg">
              {SITE.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              to="/how-it-works"
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              See How It Works
            </Button>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 max-w-lg">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
