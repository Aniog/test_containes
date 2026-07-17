import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
            <div className="absolute inset-0">
              {/* Placeholder image with decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-gold/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-gold/15" />
                </div>
              </div>
              {/* "Our Story" text watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-6xl text-white/5 tracking-widest uppercase">
                  Velmora
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8 xl:pl-12">
            <p className="text-sm tracking-extra-wide uppercase text-gold mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6 leading-tight">
              Jewelry that honors<br />your story
            </h2>

            <div className="space-y-4 text-warm-gray leading-relaxed mb-8">
              <p>
                Velmora was born from a simple belief: beautiful jewelry shouldn't require a luxury budget. 
                We craft demi-fine pieces that marry quality craftsmanship with accessible elegance, 
                so every woman can own jewelry she truly treasures.
              </p>
              <p>
                Each piece is designed in our studio and crafted with 18K gold plating over hypoallergenic metals. 
                We believe in slow fashion—creating timeless designs that transcend seasons and become part of your personal story.
              </p>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-charcoal hover:text-gold transition-colors group"
            >
              <span>Discover Our Journey</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
