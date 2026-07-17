import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { placeholderImage } from '../../data/storefrontContent'

function StorySection() {
  return (
    <section id="story" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-3xl bg-champagne shadow-soft">
          <img
            alt="Velmora brand story"
            className="h-full min-h-[28rem] w-full object-cover"
            data-strk-img-id="story-image-vx32q"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src={placeholderImage}
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-luxe text-gold">Our story</p>
          <h2 id="story-title" className="mt-4 font-serif text-4xl text-umber sm:text-5xl lg:text-6xl">
            Fine jewelry energy, made for daily rituals.
          </h2>
          <p id="story-body" className="mt-6 max-w-xl text-base leading-8 text-taupe sm:text-lg">
            Velmora was created for women who want jewelry that feels special the moment it arrives, yet effortless enough to keep wearing tomorrow. Our pieces are designed to sit between occasion and everyday — warm, polished, and quietly unforgettable.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-luxe text-umber transition hover:text-gold-deep"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
