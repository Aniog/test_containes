import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup?.()
    }
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-parchment py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-truffle">About Velmora</p>
            <h1 className="mt-4 font-display text-5xl text-velmora-espresso sm:text-6xl">
              Modern heirlooms with a quiet point of view.
            </h1>
            <p className="mt-6 text-base leading-8 text-velmora-truffle">
              We design demi-fine jewelry for women who want polished pieces that fit naturally into daily life. Velmora balances softness, structure, and warmth so each silhouette feels special without trying too hard.
            </p>
            <p className="mt-4 text-base leading-8 text-velmora-truffle">
              From gifting moments to self-purchase rituals, every design is created to be easy to wear, easy to love, and beautiful to keep.
            </p>
          </div>
          <div>
            <div className="overflow-hidden rounded-[2.5rem] border border-velmora-line bg-velmora-espresso shadow-soft">
              <img
                alt="Velmora jewelry editorial"
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id="about-page-image-velmora-a8d6f1"
                data-strk-img="[about-copy] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="hidden">
              <h2 id="about-title">Velmora atelier</h2>
              <p id="about-copy">Editorial jewelry imagery in warm neutral tones with gold pieces styled on model.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
