import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductMedia from '@/components/products/ProductMedia'

export default function StorySection() {
  return (
    <section id="story" className="border-y border-velmora-stone/70 bg-velmora-blush py-20 text-velmora-ink sm:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-t-full border border-velmora-champagne/50" />
          <div className="relative overflow-hidden rounded-t-full bg-velmora-sand shadow-editorial">
            <ProductMedia
              alt="Velmora jewelry studio details"
              className="aspect-[4/5] h-full w-full object-cover"
              imgId="story-studio-gold-jewelry-b4m8q2"
              query="[story-copy] [story-title]"
              ratio="4x3"
              width="900"
            />
          </div>
        </div>
        <div className="lg:pl-8">
          <p className="eyebrow">Our point of view</p>
          <h2 id="story-title" className="serif-title mt-4 text-5xl leading-none sm:text-6xl">
            Jewelry that feels personal before it becomes precious.
          </h2>
          <p id="story-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe">
            Velmora creates demi-fine pieces in warm gold tones, thoughtful crystal details, and silhouettes that move easily from weekday coffee to candlelit dinners. We keep the edit refined, the pricing approachable, and the finish gift-worthy.
          </p>
          <Link to="/shop" className="outline-button mt-8">
            Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
