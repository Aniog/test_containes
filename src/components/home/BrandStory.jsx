import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-velmora-sand">
            <div className="w-full h-full min-h-[400px] md:min-h-[600px] bg-gradient-to-br from-velmora-gold/15 to-velmora-charcoal/5" />
          </div>

          {/* Content */}
          <div className="flex items-center px-6 md:px-16 lg:px-24 py-16 md:py-0">
            <div className="max-w-md">
              <p className="caption mb-4">Our Story</p>
              <h2 className="heading-lg text-velmora-charcoal mb-6">
                Designed to be<br />lived in, loved,<br />and passed down.
              </h2>
              <p className="body-text mb-4">
                Velmora was born from a simple belief: that fine jewelry should be an everyday pleasure, not a once-a-year indulgence.
              </p>
              <p className="body-text mb-8">
                Each piece is crafted in 18K gold plating over sterling silver or brass, with thoughtful attention to weight, texture, and wearability. We work with family-run ateliers who share our commitment to quality and ethical sourcing.
              </p>
              <Link to="/shop" className="btn-outline inline-flex">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
