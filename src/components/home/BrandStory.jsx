import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-beige-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
              alt="Velmora Fine Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-light uppercase tracking-wider">
              Our Story
            </h2>
            <div className="w-12 h-[1px] bg-gold mt-4 mb-6" />
            <p className="text-taupe text-sm leading-relaxed font-light">
              Velmora was born from a simple belief: fine jewelry shouldn't require a special occasion. 
              We craft demi-fine pieces that bridge the gap between heirloom quality and everyday wear — 
              using 18K gold plating, hypoallergenic materials, and a design philosophy rooted in quiet luxury.
            </p>
            <p className="text-taupe text-sm leading-relaxed font-light mt-4">
              Every piece is designed in our New York studio and thoughtfully produced with respect for 
              both craftsmanship and accessibility. Because the best jewelry is the one you never want to take off.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-ink transition-colors duration-300 border-b border-gold hover:border-ink pb-1"
              >
                Read More
                <span className="text-sm">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}