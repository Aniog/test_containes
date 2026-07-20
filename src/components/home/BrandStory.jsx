import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold-400 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-ultra-wide text-gold-600 uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 leading-tight mb-6">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                Founded in 2018, Velmora was born from a simple belief: 
                every woman deserves to wear jewelry that makes her feel extraordinary, 
                without the extraordinary price tag.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and crafted with 
                premium materials — 18K gold plating, hypoallergenic metals, and 
                carefully sourced stones that catch the light beautifully.
              </p>
              <p>
                We believe in quiet luxury. Pieces so elegant they speak for themselves, 
                so versatile they become a part of your everyday story.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-block mt-8 font-sans text-sm tracking-wide text-charcoal-800 border-b border-charcoal-300 pb-1 hover:border-charcoal-800 transition-colors"
            >
              Discover Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
