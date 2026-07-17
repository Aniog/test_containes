import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-pearl px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-velmora-porcelain shadow-velmora-card">
          <div
            className="aspect-[4/5] bg-cover bg-center"
            data-strk-bg-id="brand-story-studio-4d82f1"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          />
          <div className="absolute left-6 top-6 rounded-full bg-velmora-pearl/90 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-espresso backdrop-blur">
            Est. for everyday heirlooms
          </div>
        </div>
        <div className="lg:pl-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Velmora Studio</p>
          <h2 id="story-title" className="mt-3 font-serif text-5xl leading-tight text-velmora-espresso sm:text-6xl">Jewelry with the hush of an heirloom.</h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-cocoa sm:text-lg">
            We design demi-fine pieces that feel intimate, warm, and considered — crafted in 18K gold plating, finished for sensitive skin, and priced for the rituals of real life.
          </p>
          <p className="mt-4 text-base leading-8 text-velmora-cocoa">
            From a tiny cuff worn daily to a boxed set chosen for someone you love, every piece is made to hold meaning without announcing itself too loudly.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border-b border-velmora-champagne pb-2 text-xs font-black uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-bronze">
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
