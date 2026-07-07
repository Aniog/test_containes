import * as React from "react"
import { Link } from "react-router-dom"

const reels = [
  { id: "r1", label: "Ear stacking made easy", category: "earrings" },
  { id: "r2", label: "Layered necklaces", category: "necklaces" },
  { id: "r3", label: "Huggie hoops everyday", category: "huggies" },
  { id: "r4", label: "Gifting moments", category: "sets" },
  { id: "r5", label: "Soft gold glow", category: "earrings" },
  { id: "r6", label: "Effortless elegance", category: "necklaces" },
]

export default function ReelStrip() {
  const containerRef = React.useRef(null)

  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-gold">
              @velmorajewelry
            </span>
            <h2 className="mt-2 font-serif text-3xl font-medium md:text-4xl">
              Styled by You
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden font-sans text-xs uppercase tracking-[0.15em] text-velmora-espresso underline-offset-4 hover:text-velmora-gold hover:underline md:block"
          >
            Shop the Feed
          </Link>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto px-5 pb-4 md:gap-6 md:px-8 lg:px-12"
      >
        {reels.map((reel) => (
          <Link
            key={reel.id}
            to={`/shop?category=${reel.category}`}
            className="group relative w-[160px] flex-shrink-0 overflow-hidden md:w-[200px]"
          >
            <div className="aspect-[9/16] w-full bg-velmora-stone">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.label}
                data-strk-img-id={`velmora-reel-${reel.id}`}
                data-strk-img={`[reel-label-${reel.id}] gold jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-transparent to-transparent" />
            <p
              id={`reel-label-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg italic leading-tight text-white"
            >
              {reel.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
