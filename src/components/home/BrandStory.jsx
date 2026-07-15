import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-velvet-50">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velvet-100 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
            />
          </div>

          {/* Text */}
          <div className="bg-white px-8 md:px-14 lg:px-20 py-14 md:py-20 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-velvet-600 font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-6 leading-tight"
            >
              Jewelry That Lives With You
            </h2>
            <p
              id="brand-story-subtitle"
              className="text-charcoal-500 leading-relaxed mb-8"
            >
              Velmora was born from the belief that fine jewelry shouldn't be locked away for special occasions. Every piece is designed in our London atelier — crafted from 18K gold-plated brass with meticulous attention to detail, hypoallergenic finishes, and an enduring commitment to quality.
            </p>
            <Link
              to="/about"
              className="btn-outline w-fit"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}