import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="py-section md:py-section-lg bg-cream-100/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop&crop=center"
              alt="Velmora jewelry craftsmanship"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-overline uppercase text-gold tracking-[0.2em] mb-4">
              Our Story
            </p>
            <h2
              className="text-display-md text-charcoal-800 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Jewelry That Feels
              <br />
              Like <span className="italic">You</span>
            </h2>
            <div className="section-divider !mx-0 mb-8" />
            <div className="space-y-4 text-body-md text-charcoal-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that 
                feels as special as she is — without the luxury markup.
              </p>
              <p>
                We craft demi-fine pieces using 18K gold plating over sterling silver, 
                set with hand-selected crystals. Each design is made to be worn every day 
                and treasured for years.
              </p>
              <p>
                Our pieces are hypoallergenic, tarnish-resistant, and designed in-house 
                by our team of artisans who believe that accessible luxury shouldn't 
                compromise on quality or beauty.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-overline uppercase text-gold tracking-[0.14em] font-semibold border-b-2 border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors duration-300"
            >
              Read Our Full Story
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
