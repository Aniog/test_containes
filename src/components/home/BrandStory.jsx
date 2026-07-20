import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto">
        {/* Image side */}
        <div className="aspect-[4/5] md:aspect-auto bg-gradient-to-br from-gold/15 via-sand/40 to-rose/10 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gold/10 flex items-center justify-center">
            <span className="font-serif text-6xl text-gold/30">V</span>
          </div>
        </div>

        {/* Text side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-12 md:py-0 bg-sand/10">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
            Jewelry That Lives<br />in the Everyday
          </h2>
          <p className="text-taupe text-sm leading-relaxed mb-4">
            Velmora was founded on a simple belief: fine jewelry should be worn, not stored away.
            Every piece is crafted from 18K gold-plated brass — designed to move with you,
            from morning coffee to evening plans.
          </p>
          <p className="text-taupe text-sm leading-relaxed mb-8">
            We work directly with artisans who share our obsession with detail, creating
            demi-fine pieces that feel both timeless and utterly modern. No middlemen,
            no markups — just quality you can see and feel.
          </p>
          <Link to="/about" className="self-start text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
