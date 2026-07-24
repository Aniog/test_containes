import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-background pt-24">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Our Story</p>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Crafted to be Treasured
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            <img
              data-strk-img-id="about-story-main"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry atelier"
              className="h-full w-full object-cover"
            />
            <p id="about-subtitle" className="sr-only">Velmora Fine Jewelry</p>
            <h2 id="about-title" className="sr-only">Handcrafted demi-fine gold jewelry</h2>
          </div>

          <div className="space-y-8 lg:pl-8">
            <div>
              <h2 className="mb-4 font-serif text-2xl text-foreground">The Beginning</h2>
              <p className="leading-relaxed text-muted-foreground">
                Velmora was founded with a simple belief: jewelry should feel personal, enduring, and
                effortlessly luxurious. We set out to create demi-fine pieces that bridge the gap between
                costume and fine jewelry — using 18k gold plating, hypoallergenic materials, and thoughtful
                design at an accessible price point.
              </p>
            </div>
            <div>
              <h2 className="mb-4 font-serif text-2xl text-foreground">Our Craft</h2>
              <p className="leading-relaxed text-muted-foreground">
                Every Velmora piece begins as a sketch inspired by art, architecture, and the quiet details
                of everyday life. We work with skilled artisans to refine each silhouette, ensuring a
                polished finish that feels as good as it looks.
              </p>
            </div>
            <div>
              <h2 className="mb-4 font-serif text-2xl text-foreground">Our Promise</h2>
              <p className="leading-relaxed text-muted-foreground">
                We believe in slow jewelry: pieces made to be worn, loved, and passed on. From responsibly
                sourced materials to recyclable packaging, we are committed to making beauty that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
