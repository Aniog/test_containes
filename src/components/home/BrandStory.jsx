import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="bg-vbg">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div
          className="relative aspect-square md:aspect-auto md:min-h-[600px]"
          data-strk-bg-id="story-bg-velmora-4d5e6f"
          data-strk-bg="[story-title] [story-body]"
          data-strk-bg-ratio="1x1"
          data-strk-bg-width="800"
        >
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center section-padding py-14 md:py-20">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-vmuted mb-4">
            Our Philosophy
          </p>
          <h2
            id="story-title"
            className="font-serif text-3xl md:text-4xl font-light text-vtext leading-tight"
          >
            Jewelry That Feels Like You
          </h2>
          <p
            id="story-body"
            className="font-sans text-sm text-vmuted leading-relaxed mt-5 max-w-md"
          >
            At Velmora, we believe fine jewelry should not be reserved for
            special occasions. Every piece in our collection is designed to be
            worn daily — to work, to brunch, to quiet moments alone. Crafted
            with 18K gold plating and hypoallergenic materials, our demi-fine
            collection offers luxury you can live in.
          </p>
          <p className="font-sans text-sm text-vmuted leading-relaxed mt-4 max-w-md">
            Founded in New York and inspired by women who move through the world
            with quiet confidence, Velmora exists to make everyday elegance
            effortless.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase text-vtext mt-8 group hover:text-vgold transition-colors"
          >
            Our Story
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
