import { Link } from 'react-router-dom';

export default function HeroSection() {
  const imgId = 'hero-img-main';
  const titleId = 'hero-title-main';
  const subId = 'hero-sub-main';

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          data-strk-img-id={imgId}
          data-strk-img={`[${subId}] [${titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/60 via-velmora-espresso/30 to-velmora-espresso/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1
          id={titleId}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight tracking-wide"
        >
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p
          id={subId}
          className="mt-5 md:mt-6 text-sm md:text-base text-white/80 font-light max-w-md mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry for the woman who knows that quiet luxury speaks the loudest.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 px-10 py-3.5 border border-velmora-gold text-velmora-gold text-xs tracking-[0.25em] uppercase font-medium hover:bg-velmora-gold hover:text-white transition-all duration-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Hidden text for image query */}
      <span id={subId} className="sr-only">warm lit close-up of model wearing gold jewelry editorial photography</span>
    </section>
  );
}
