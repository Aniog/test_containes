import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-sand flex items-center justify-center overflow-hidden">
            <div
              className="w-full h-full min-h-[400px]"
              data-strk-bg-id="story-bg-e4f7a2"
              data-strk-bg="[story-text-preview] [story-section-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="900"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-6 md:px-16 lg:px-20 py-16 md:py-20">
            <div className="max-w-md">
              <p id="story-section-title" className="text-xs tracking-[0.2em] uppercase text-taupe font-sans font-medium mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide mb-6 leading-snug">
                Jewelry That Lives With You
              </h2>
              <p id="story-text-preview" className="text-taupe font-sans leading-relaxed text-sm mb-6">
                Velmora was born from the belief that fine jewelry shouldn't be reserved for special occasions. 
                Each piece is crafted from 18K gold-plated brass with meticulous attention to detail, 
                designed to become part of your everyday story.
              </p>
              <Link
                to="/about"
                className="inline-block text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors font-sans font-medium border-b border-gold/30 hover:border-gold-light pb-1"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
