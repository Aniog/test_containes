import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/storefront/PageHero'

const AboutPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanup = typeof result === 'function' ? result : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="About Velmora"
        title="Jewelry that feels intimate, polished, and beautifully wearable."
        description="We design demi-fine pieces that bring a quiet sense of occasion to everyday dressing, thoughtful gifting, and the rituals women return to most."
      />

      <section className="velmora-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div
          className="min-h-[420px] rounded-[2rem] border border-velmora-sand bg-velmora-card shadow-velmora"
          data-strk-bg-id="about-hero-bg-c81d44"
          data-strk-bg="[about-body-copy] [about-body-title]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1200"
        />
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-luxe text-velmora-gold">
            Designed with softness and structure
          </p>
          <h2 id="about-body-title" className="mt-5 font-display text-5xl text-velmora-ink">
            Velmora sits between daily ease and a treasured finishing touch.
          </h2>
          <p id="about-body-copy" className="mt-5 text-base leading-8 text-velmora-smoke">
            Our collections are inspired by heirloom elegance, but built for how women dress now. We focus on sculptural silhouettes, warm metallic tones, and versatile styling that moves from weekday layers to special moments.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-velmora-sand bg-velmora-card p-5 shadow-soft">
              <p className="text-xs uppercase tracking-widest text-velmora-gold">Materials</p>
              <p className="mt-3 text-sm leading-7 text-velmora-smoke">
                18K gold plating, crystal details, and hypoallergenic finishes selected for accessible everyday luxury.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-velmora-sand bg-velmora-card p-5 shadow-soft">
              <p className="text-xs uppercase tracking-widest text-velmora-gold">Packaging</p>
              <p className="mt-3 text-sm leading-7 text-velmora-smoke">
                Every order arrives in a softly structured gift box designed to feel ready for giving.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
