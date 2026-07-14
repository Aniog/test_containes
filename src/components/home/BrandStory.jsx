import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section bg-[#F5F3EF]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#C4A962]/30 rounded-lg" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A962] mb-4 block">
              Our Story
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1917] mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            
            <div className="space-y-4 text-[#57534E] leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                Our pieces are crafted with intention, using premium materials like 18K gold vermeil and hypoallergenic metals. Each design balances timeless elegance with modern sensibility.
              </p>
              <p>
                We believe jewelry should be worn every day, treasured forever. That's why we create pieces that transition seamlessly from morning coffee to evening out.
              </p>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center gap-3 mt-8 group"
            >
              <span className="text-sm font-medium tracking-[0.1em] uppercase text-[#1C1917]">
                Discover Our Journey
              </span>
              <span className="w-10 h-px bg-[#1C1917] transform transition-all group-hover:w-16" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
