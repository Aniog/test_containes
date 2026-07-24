import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-20">
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-7e8f"
          data-strk-bg="[about-hero-text] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-4">
            Our Story
          </p>
          <h1 id="about-hero-text" className="font-serif text-ivory text-5xl md:text-7xl font-light max-w-2xl leading-tight">
            Jewelry, considered.
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-5">
            Est. 2021
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light leading-snug">
            Velmora was founded on a simple idea — that fine jewelry should
            feel personal, not precious.
          </h2>
          <p className="mt-8 text-ink/80 leading-relaxed">
            We design every piece in-house and partner directly with skilled
            ateliers, finishing each item in 18K gold plate over a
            hypoallergenic base. By selling directly to you, we offer
            considered design at an honest price — without the traditional
            markups.
          </p>
          <p className="mt-4 text-ink/80 leading-relaxed">
            From the studio to your doorstep, our promise is the same: warm,
            wearable gold made to be treasured for years to come.
          </p>
          <div className="mt-10">
            <Button as={Link} to="/shop">Explore the Collection</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
