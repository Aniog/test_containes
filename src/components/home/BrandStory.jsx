import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="about" className="section-padding bg-cream-100">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-cream-300 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-cream-400 text-sm">Brand Image</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-sans text-sm tracking-ultra-wide uppercase text-gold-400 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-700 mb-6 leading-tight">
              Jewelry That
              <br />
              <span className="italic">Tells Your Story</span>
            </h2>
            <p className="font-sans text-charcoal-500 leading-relaxed mb-6">
              At Velmora, we believe that jewelry is more than an accessory—it's a reflection of who you are. 
              Each piece in our collection is thoughtfully designed to be worn every day, cherished for years, 
              and passed down as a treasured heirloom.
            </p>
            <p className="font-sans text-charcoal-500 leading-relaxed mb-8">
              We craft demi-fine jewelry using premium 18K gold plating over surgical-grade steel, 
              ensuring each piece is hypoallergenic, tarnish-resistant, and built to last. 
              Because luxury shouldn't be out of reach.
            </p>
            <Link
              to="/shop"
              className="btn-outline inline-block"
            >
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
