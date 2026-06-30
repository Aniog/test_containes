import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold-400 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="flex items-center p-8 md:p-12 lg:p-16 xl:p-20">
            <div className="max-w-lg">
              <p className="text-gold-500 text-xs uppercase tracking-extra-wide mb-4">
                Our Story
              </p>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-800 leading-tight mb-6">
                Jewelry with Intention
              </h2>
              
              <div className="space-y-4 text-warm-600 leading-relaxed mb-8">
                <p>
                  At Velmora, we believe every piece of jewelry tells a story. 
                  Founded in 2019, we set out to create demi-fine pieces that 
                  bridge the gap between fashion jewelry and fine jewelry.
                </p>
                <p>
                  Each design is thoughtfully crafted with 18K gold plating on 
                  hypoallergenic stainless steel, ensuring beauty that lasts. 
                  We partner with artisan workshops that share our commitment 
                  to ethical production and sustainable practices.
                </p>
                <p>
                  Our pieces are designed to be worn every day — to work, to 
                  dinner, to life. Because the best jewelry is the kind you 
                  never have to take off.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-warm-800 font-medium text-sm uppercase tracking-extra-wide hover:gap-3 transition-all duration-300 group"
              >
                Learn More About Us
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
