import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-cream-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="aspect-[4/5] lg:aspect-auto overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img"
              data-strk-img={`[brand-story-text] Velmora Fine Jewelry craftsmanship warm gold`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <span id="brand-story-text" className="hidden">Craftsmanship meets modern design in every Velmora piece</span>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center py-16 lg:py-28 lg:pl-16 xl:pl-24">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wider text-velvet-900 leading-snug">
              Jewelry That Lives With You
            </h2>
            <hr className="hairline-divider w-12 mt-6 mb-6" />
            <p className="text-velvet-600 leading-relaxed max-w-md font-light">
              At Velmora, we believe luxury shouldn't be locked away for special occasions. 
              Our pieces are crafted from 18K gold-plated brass with genuine crystals — 
              designed to be worn through your morning coffee, board meetings, date nights, 
              and everything in between.
            </p>
            <p className="text-velvet-600 leading-relaxed max-w-md mt-4 font-light">
              Every piece is hand-finished by artisans who care about the weight, the clasp, 
              the way light hits the surface. Because the details you don't notice are the 
              ones that make it feel like you.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
