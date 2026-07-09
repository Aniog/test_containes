import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-warm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/5] lg:aspect-auto bg-velmora-base overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-velmora-gold/15 via-velmora-gold-dark/8 to-transparent blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full border border-velmora-gold/30 flex items-center justify-center">
                    <span className="font-serif text-3xl text-velmora-gold/60">V</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex items-center px-6 py-16 lg:px-20 lg:py-0">
          <div className="max-w-md">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-6">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide leading-[1.15] text-balance">
              Fine Jewelry,<br />Without the Markup
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-velmora-base/70">
              <p>
                Velmora was born from a simple belief: that every woman deserves
                jewelry that feels precious — without the traditional luxury markup.
              </p>
              <p>
                We work directly with artisans and use 18K gold plating over brass,
                creating pieces that are rich in feel, timeless in design, and
                accessible in price. No middlemen. No retail markups. Just beautiful
                jewelry, delivered to your door.
              </p>
            </div>
            <Link
              to="/"
              className="inline-block mt-8 text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors underline underline-offset-4"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}