import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import { imagePlaceholder } from '@/lib/media'
import { useStrkImages } from '@/lib/useStrkImages'

export default function HeroSection() {
  const containerRef = useRef(null)

  useStrkImages(containerRef, [])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-stone-950 text-stone-50">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-10f1aa"
        data-strk-bg="[hero-subtitle] [hero-title] [velmora-editorial-jewelry]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,0.88)_0%,rgba(28,25,23,0.58)_45%,rgba(28,25,23,0.22)_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-18 pt-32 sm:px-8 lg:px-12 lg:items-center lg:pb-24">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.42em] text-amber-200">
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="max-w-xl font-[Cormorant_Garamond] text-6xl leading-[0.95] text-stone-50 sm:text-7xl lg:text-[6.2rem]"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-lg text-base leading-8 text-stone-200 sm:text-lg"
          >
            Quietly luminous demi-fine jewelry for everyday rituals, thoughtful gifting,
            and the moments that deserve a softer kind of statement.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="/shop">
              <Button className="min-w-[220px]">Shop the Collection</Button>
            </Link>
            <div className="flex items-center gap-3 rounded-full border border-stone-100/20 bg-stone-50/10 px-4 py-3 text-sm text-stone-100 backdrop-blur-sm">
              <img
                alt="Editorial jewelry detail"
                className="h-12 w-12 rounded-full object-cover"
                data-strk-img-id="hero-avatar-velmora-71ac04"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="200"
                src={imagePlaceholder}
              />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-300">New capsule</p>
                <p className="font-[Cormorant_Garamond] text-xl text-stone-50">Golden heirloom edits</p>
              </div>
            </div>
          </div>
          <p id="velmora-editorial-jewelry" className="sr-only">
            Warm editorial gold jewelry on a model, quiet luxury styling, premium demi-fine accessories.
          </p>
        </div>
      </div>
    </section>
  )
}
