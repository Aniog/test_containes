import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-espresso text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2">
          {/* Image side */}
          <div className="aspect-[4/5] md:aspect-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-velmora-gold/30 via-velmora-espresso/40 to-velmora-rose/20" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-velmora-gold/10 blur-2xl" />
            <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-velmora-rose/8 blur-2xl" />
          </div>

          {/* Text side */}
          <div className="flex items-center py-16 lg:py-24 px-8 lg:px-16">
            <div className="max-w-md">
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-velmora-gold-light mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-white font-medium mb-6 leading-snug">
                Jewelry that becomes<br /> part of your story
              </h2>
              <p className="font-sans text-sm text-white/50 leading-relaxed mb-6">
                Velmora was born from the belief that fine jewelry shouldn't require a fine-art budget. We craft every piece in 18k gold plate using the same attention to detail as luxury houses — then sell directly to you, without the markup.
              </p>
              <p className="font-sans text-sm text-white/50 leading-relaxed mb-8">
                Each design is meant to be lived in. Worn to the office, kept on for dinner, passed down someday. Because the best jewelry isn't locked away — it's part of every day.
              </p>
              <Link
                to="/shop"
                className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-gold hover:text-velmora-gold-light transition-colors border-b border-velmora-gold/40 hover:border-velmora-gold-light pb-1"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
