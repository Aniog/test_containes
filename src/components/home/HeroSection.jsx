import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[600px] flex items-end md:items-center">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a1c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/70 via-velmora-deep/20 to-transparent md:bg-gradient-to-r md:from-velmora-deep/40 md:to-transparent" />
      </div>

      {/* Text overlay */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pb-16 md:pb-0">
        <div className="max-w-lg">
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] text-balance"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subhead"
            className="mt-5 text-white/70 font-sans text-base md:text-lg font-light leading-relaxed max-w-md"
          >
            Demi-fine gold jewelry designed for the moments that matter. 18K gold-plated pieces made to last, worn every day.
          </p>
          <div className="mt-8">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
