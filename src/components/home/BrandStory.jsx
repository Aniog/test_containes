import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] lg:aspect-[3/4] bg-muted overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-r4s5t6"
              data-strk-img="[brand-story-title] [brand-story-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2 id="brand-story-title" className="font-serif text-3xl lg:text-4xl text-primary mb-6">
              Our Story
            </h2>
            <p id="brand-story-desc" className="text-muted-foreground leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is — without the luxury price tag. We craft each piece with 18K gold plating over hypoallergenic metals, ensuring lasting beauty that&apos;s kind to your skin.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From our studio, every design is thoughtfully created to transition seamlessly from morning coffee to evening cocktails. Timeless, versatile, and always elegant.
            </p>
            <Link
              to="/about"
              className="inline-block border border-accent text-accent px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-accent hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
