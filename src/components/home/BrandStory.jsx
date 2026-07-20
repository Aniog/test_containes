import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={containerRef} id="story" className="bg-velmora-pearl py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div
          className="min-h-[480px] rounded-t-[3rem] bg-velmora-champagne shadow-soft"
          data-strk-bg-id="brand-story-artisan-jewelry-bench-d9f3a1"
          data-strk-bg="[story-copy] [story-title]"
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="1000"
        />
        <div className="lg:pl-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">
            Fine-feeling jewelry, made for real life.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-taupe">
            Velmora began with the belief that gold jewelry should feel intimate, enduring, and attainable. Each piece is designed in small edited collections, balancing heirloom-inspired details with modern everyday wear.
          </p>
          <p className="mt-5 text-base leading-8 text-velmora-taupe">
            From hypoallergenic huggies to gift-ready necklaces, our pieces are made to become the quiet signature you reach for again and again.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 border-b border-velmora-gold pb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold">
            Our Story
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
