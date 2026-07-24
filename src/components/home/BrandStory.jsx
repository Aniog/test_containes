import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-warmgray overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-7e4d1a"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-warmgray p-8 md:p-14 lg:p-20 flex flex-col justify-center h-full">
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light text-espresso tracking-wide leading-[1.2] mb-6"
            >
              Jewelry That Lives With You
            </h2>
            <p
              id="brand-story-subtitle"
              className="text-taupe leading-relaxed mb-6 text-sm md:text-base"
            >
              At Velmora, we believe fine jewelry shouldn't be locked away for special occasions.
              Our pieces are crafted to be worn every day — from morning coffee to evening cocktails.
              Each design is made with 18K gold plating, ethically sourced materials, and an
              uncompromising attention to detail that you can feel.
            </p>
            <p className="text-taupe leading-relaxed mb-8 text-sm md:text-base">
              Founded on the principle that luxury should be accessible, we create demi-fine
              jewelry that bridges the gap between fast fashion and traditional fine jewelry.
              Thoughtfully designed. Responsibly made. Priced to be lived in.
            </p>
            <Link to="/about" className="btn-outline self-start">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}