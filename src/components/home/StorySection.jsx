import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StorySection() {
  return (
    <section id="story" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] bg-velmora-mist shadow-velvet">
          <div className="aspect-[4/5]">
            <img
              alt="Velmora jewelry arranged on a styled editorial surface"
              className="h-full w-full object-cover"
              data-strk-img-id="story-image-v6t2n9"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-velmora-sand/50 bg-velmora-ivory p-8 shadow-soft sm:p-12">
          <p className="text-xs uppercase tracking-[0.34em] text-stone-500">Brand Story</p>
          <h2 id="story-title" className="mt-3 font-heading text-4xl leading-tight text-stone-900 sm:text-5xl">
            Jewelry that feels intimate, polished, and quietly collectible.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-stone-600">
            Velmora was conceived for women who want pieces that look elevated, layer easily, and arrive beautifully—without reaching luxury-house pricing. Every silhouette is selected for warmth, versatility, and that subtle glow that makes getting dressed feel complete.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-stone-900 transition hover:text-velmora-gold"
          >
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
