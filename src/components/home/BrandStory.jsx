import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-obsidian mb-6 leading-tight">
              Jewelry that tells<br />
              <span className="italic">your story</span>
            </h2>
            
            <div className="space-y-4 text-velvet-700 font-sans leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to feel special. Our demi-fine jewelry 
                bridges the gap between fashion and fine jewelry, offering pieces that are both 
                accessible and extraordinary.
              </p>
              <p>
                Each piece is thoughtfully designed with quality materials — 18K gold plating, 
                hypoallergenic metals, and carefully selected stones. We craft jewelry meant to 
                be worn every day, becoming a part of your everyday story.
              </p>
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center mt-8 font-sans text-sm text-obsidian border-b border-obsidian pb-0.5 hover:text-champagne hover:border-champagne transition-colors w-fit"
            >
              Discover Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
