import ButtonLink from '@/components/shared/ButtonLink.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const HeroSection = () => {
  const containerRef = useStrkImages([])

  return (
    <section
      ref={containerRef}
      className="relative -mt-20 overflow-hidden bg-velvet pt-20 text-porcelain"
    >
      <div
        className="absolute inset-0"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velvet via-velvet/75 to-velvet/35" />
      <div className="page-shell relative flex min-h-[88svh] items-end py-16 sm:py-20 lg:items-center lg:py-28">
        <div className="max-w-2xl space-y-6">
          <p
            id="hero-kicker"
            className="text-xs uppercase tracking-[0.28em] text-amber-300"
          >
            Quiet luxury in every detail
          </p>
          <h1
            id="hero-title"
            className="max-w-xl font-editorial text-6xl leading-[0.92] text-white sm:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="max-w-lg text-base leading-8 text-white/80 md:text-lg"
          >
            Warm-toned demi-fine jewelry designed for effortless gifting, daily
            glow, and polished self-purchase moments.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <ButtonLink className="min-w-[220px] justify-center" to="/shop">
              Shop the Collection
            </ButtonLink>
            <ButtonLink className="min-w-[220px] justify-center border-white/25 text-white hover:border-white hover:text-white" to="/#story" variant="secondary">
              Discover Velmora
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
