import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-dark-surface overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-j1k2l3"
              data-strk-img="[brand-story-title] [brand-story-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="text-accent text-xs tracking-widest uppercase mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight mb-6"
            >
              Where Craft Meets Intention
            </h2>
            <p
              id="brand-story-desc"
              className="text-muted-fg leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over 
              hypoallergenic metals — so you can wear your favorites every day without worry.
            </p>
            <p className="text-muted-fg leading-relaxed mb-8">
              We believe in slow fashion, timeless design, and pieces that become part of your story. 
              No trends, no fast fashion — just jewelry crafted to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm text-charcoal border-b border-charcoal pb-0.5 hover:border-accent hover:text-accent transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
