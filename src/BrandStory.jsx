import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-velmora-blush overflow-hidden">
          <div
            className="w-full h-full"
            data-strk-img-id="brand-story-img-d4e5f6"
            data-strk-img="[brand-story-title] gold jewelry craftsmanship editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
          />
        </div>

        {/* Text */}
        <div className="bg-velmora-sand p-10 md:p-14 lg:p-20 flex flex-col justify-center">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-4">
            Our Philosophy
          </p>
          <h2
            id="brand-story-title"
            className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-6"
          >
            The Art of Everyday Luxury
          </h2>
          <div className="w-12 hairline-divider mb-6" />
          <p className="font-sans text-sm text-velmora-taupe leading-relaxed mb-4">
            Velmora was born from a simple belief: that fine jewelry should be part of your daily ritual, not just special occasions. We craft each piece in 18K gold plating over brass, using hypoallergenic materials that feel as good as they look.
          </p>
          <p className="font-sans text-sm text-velmora-taupe leading-relaxed mb-8">
            From our atelier to your jewelry box, every design is shaped by a commitment to enduring quality, responsible sourcing, and the quiet confidence that comes from wearing something truly beautiful.
          </p>
          <Link to="#" className="btn-outline self-start">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}