import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — deep warm gradient simulating editorial jewelry photography */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #1A1614 0%, #2C2018 35%, #3D2E1A 55%, #1A1614 100%)',
        }}
      >
        {/* Warm light bloom */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 60% 45%, rgba(201,169,110,0.18) 0%, rgba(201,169,110,0.06) 45%, transparent 70%)',
          }}
        />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative gold ring element */}
      <div
        className="absolute right-[8%] top-[20%] w-64 h-64 lg:w-96 lg:h-96 rounded-full opacity-10 border border-velmora-gold"
        style={{ borderWidth: '1px' }}
      />
      <div
        className="absolute right-[10%] top-[22%] w-52 h-52 lg:w-80 lg:h-80 rounded-full opacity-6 border border-velmora-gold"
        style={{ borderWidth: '1px' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="font-manrope text-xs uppercase tracking-widest3 text-velmora-gold mb-6 animate-fadeIn">
            New Collection · 2026
          </p>

          {/* Headline */}
          <h1
            className="font-cormorant text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-velmora-ivory leading-[1.05] mb-6 animate-fadeIn"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be
            <br />
            <em className="italic text-velmora-gold-light">Treasured</em>
          </h1>

          {/* Subhead */}
          <p
            className="font-manrope text-sm lg:text-base text-velmora-ivory/60 leading-relaxed mb-10 max-w-md animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            Demi-fine gold jewelry for the woman who moves through the world with intention. Designed to be worn every day, treasured forever.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fadeIn"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              to="/shop"
              className="inline-block bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:bg-velmora-gold-light transition-colors duration-200 text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#about"
              className="inline-block border border-velmora-ivory/30 text-velmora-ivory font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-200 text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <span className="font-manrope text-[10px] uppercase tracking-widest text-velmora-ivory/30">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-gold/40 to-transparent" />
      </div>
    </section>
  );
}
