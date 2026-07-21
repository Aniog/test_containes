import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velvet-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-velvet-200 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-6d34fa"
              data-strk-img="[brand-story-title] [brand-story-subtitle]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Our Story</p>
              <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                Jewelry That Tells<br />Your Story
              </h2>
              <p id="brand-story-subtitle" className="text-sm text-velvet-700 leading-relaxed mb-8">
                At Velmora, we believe fine jewelry should be accessible without compromise. 
                Every piece is crafted in 18K gold plate over brass, designed in our atelier 
                and made to be worn, loved, and passed down. We're redefining what it means 
                to invest in yourself — one beautiful piece at a time.
              </p>
              <Link to="/about" className="btn-outline">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}