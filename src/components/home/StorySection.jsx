import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { placeholderSrc } from '@/lib/image-placeholders'

export default function StorySection() {
  return (
    <section id="story" className="bg-velmora-mist px-5 py-20 text-velmora-onyx md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne shadow-velmora-soft">
          <img
            alt="Velmora jewelry atelier details"
            className="h-full w-full object-cover"
            data-strk-img-id="story-atelier-image-c1d2e3"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="1000"
            src={placeholderSrc}
          />
        </div>
        <div className="mx-auto max-w-xl lg:pl-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">Our Atelier</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl leading-none text-velmora-onyx md:text-7xl">Designed for the heirlooms you make now.</h2>
          <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-stone">
            Velmora creates demi-fine gold jewelry with the texture, warmth, and intention of luxury houses — without the traditional markup. Each piece is selected for graceful wear, luminous finish, and the rituals of modern womanhood.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-onyx transition hover:text-velmora-antique">
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
