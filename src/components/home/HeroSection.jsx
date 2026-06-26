import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { site } from '@/data/site'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        data-strk-bg-id="hero-bg-ssourcing-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-transparent" />

      <Container>
        <div className="relative py-20 md:py-32 lg:py-40 max-w-3xl">
          <span className="inline-block uppercase tracking-wide text-accent font-semibold text-sm mb-4">
            China Sourcing Agent
          </span>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-neutral-200 mb-8 leading-relaxed"
          >
            We help overseas businesses find reliable suppliers, verify factories, inspect quality,
            follow production, and coordinate shipping — so you can buy from China with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button as={Link} to="/contact" variant="accent" size="lg">
              {site.cta}
            </Button>
            <Button
              as={Link}
              to="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 hover:text-white"
            >
              Explore Our Services
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Supplier Verification
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Quality Inspection
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Shipping Coordination
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
