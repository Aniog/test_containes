import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-cream tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-velmora-charcoal p-8 border border-velmora-mink/50 hover:border-velmora-gold/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5" style={{ fill: '#C9A96E', color: '#C9A96E' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg italic text-velmora-cream/90 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-velmora-gold font-medium">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-inter text-xs uppercase tracking-widest text-velmora-sand/70">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14 pt-10 border-t border-velmora-mink/40">
          <div className="text-center">
            <p className="font-cormorant text-4xl text-velmora-gold font-light">4.9</p>
            <p className="font-inter text-xs uppercase tracking-widest text-velmora-sand/60 mt-1">Average Rating</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-velmora-mink/50" />
          <div className="text-center">
            <p className="font-cormorant text-4xl text-velmora-gold font-light">2,400+</p>
            <p className="font-inter text-xs uppercase tracking-widest text-velmora-sand/60 mt-1">Happy Customers</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-velmora-mink/50" />
          <div className="text-center">
            <p className="font-cormorant text-4xl text-velmora-gold font-light">98%</p>
            <p className="font-inter text-xs uppercase tracking-widest text-velmora-sand/60 mt-1">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
