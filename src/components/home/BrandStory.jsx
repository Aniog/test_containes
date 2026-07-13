import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image left */}
          <div className="relative">
            <div
              className="aspect-[4/5] overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #2C2018 0%, #3D2E1A 40%, #1A1614 100%)',
              }}
            >
              {/* Warm editorial glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse 60% 50% at 55% 40%, rgba(201,169,110,0.22) 0%, transparent 65%)',
                }}
              />
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border border-velmora-gold/20" />
                  <div className="absolute inset-4 rounded-full border border-velmora-gold/15" />
                  <div className="absolute inset-8 rounded-full border border-velmora-gold/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-cormorant text-5xl text-velmora-gold/40 font-light">V</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offset accent block */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 hidden lg:block"
              style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #A07840 100%)' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-cormorant text-velmora-obsidian/30 text-4xl">◇</span>
              </div>
            </div>
          </div>

          {/* Text right */}
          <div className="lg:pl-8">
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-5">
              Our Story
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-velmora-obsidian font-light leading-tight mb-6">
              Made with intention,
              <br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-8" />
            <p className="font-manrope text-sm text-velmora-stone leading-relaxed mb-5">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move seamlessly from morning coffee to evening out — jewelry that becomes part of you.
            </p>
            <p className="font-manrope text-sm text-velmora-stone leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over a hypoallergenic base, designed to last and to be loved. We believe in accessible luxury — quality you can feel, at a price that doesn't ask you to choose.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-3 font-manrope text-xs uppercase tracking-widest text-velmora-charcoal hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-charcoal/30 hover:border-velmora-gold pb-0.5"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
