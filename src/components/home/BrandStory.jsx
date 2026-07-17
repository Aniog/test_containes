import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-sand">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-stone relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-velmora-bronze/30 via-velmora-sand/40 to-velmora-gold/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-velmora-gold/15 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-6xl text-velmora-gold/20 italic">V</span>
            </div>
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="font-sans text-xs tracking-super uppercase text-velmora-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink mb-6 leading-tight">
              Jewelry That Lives<br />in the Everyday
            </h2>
            <div className="space-y-4 text-sm text-velmora-charcoal/80 leading-relaxed">
              <p>
                Velmora was born from the belief that fine jewelry shouldn't be reserved for special occasions. Our pieces are designed to be worn, loved, and lived in — every single day.
              </p>
              <p>
                Each design is crafted in 18K gold plate over brass or sterling silver, using ethically sourced materials and hypoallergenic finishes. We believe in quality you can feel, at a price that makes sense.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-8 text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-deep transition-colors font-medium border-b border-velmora-gold pb-1">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}