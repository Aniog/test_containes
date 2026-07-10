import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
            <div className="hairline max-w-20 mx-auto md:mx-0 mb-6" />
            <p className="font-sans text-velmora-charcoal/80 mb-6 leading-relaxed">
              Founded in 2018, Velmora was born from a simple belief: every woman deserves 
              jewelry that makes her feel extraordinary without breaking the bank. We craft 
              demi-fine pieces that bridge the gap between fashion and fine jewelry.
            </p>
            <p className="font-sans text-velmora-charcoal/80 mb-8 leading-relaxed">
              Each piece is designed in our studio and crafted with care using ethically 
              sourced materials. Our 18K gold-plated jewelry is made to be worn and treasured 
              every day.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-velmora-charcoal pb-1 font-sans text-sm uppercase tracking-widest hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
