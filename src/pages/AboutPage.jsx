import { useRef } from 'react'
import { useStockImages } from '@/hooks/useStockImages'

export default function AboutPage() {
  const containerRef = useRef(null)
  useStockImages(containerRef)

  return (
    <main ref={containerRef} className="bg-ivory pb-24 pt-28 text-ink sm:pt-32">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-ink shadow-soft">
            <img
              alt="Velmora founder story"
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id="about-hero-image-f18a24"
              data-strk-img="[about-copy] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-mocha">About Velmora</p>
            <h1 id="about-title" className="mt-5 font-display text-5xl leading-none text-ink sm:text-6xl">
              Quiet luxury, shaped for every day.
            </h1>
            <div id="about-copy" className="mt-6 space-y-5 text-base leading-8 text-mocha">
              <p>
                Velmora Fine Jewelry was founded on a simple idea: women deserve jewelry that feels polished and premium without being reserved for rare occasions.
              </p>
              <p>
                Our collections focus on demi-fine finishes, warm metallic tones, and sculptural forms that sit easily within real wardrobes — from white T-shirts to silk dresses and everything in between.
              </p>
              <p>
                Each piece is designed to layer, gift beautifully, and keep its sense of refinement through seasons of wear.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
