import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141589-67f0d93e2881?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-accent">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-tight">
              Where Intention Meets Artistry
            </h2>
            <p className="mt-6 text-base text-muted font-sans leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over premium metals, and finished with the kind of attention to detail you'd expect from fine jewelry.
            </p>
            <p className="mt-4 text-base text-muted font-sans leading-relaxed">
              We believe in slow fashion — pieces that transcend trends and become part of your story. From our hands to yours, with love.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-sans font-medium text-accent border-b border-accent pb-0.5 hover:text-accent-hover hover:border-accent-hover transition-colors no-underline"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
