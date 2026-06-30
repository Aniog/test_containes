import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[560px] max-h-[900px] lg:h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-charcoal-800"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(26,26,26,0.2) 60%, rgba(201,168,76,0.15) 100%), url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=1000&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Gold accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 lg:pb-28 text-center section-padding">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-label text-gold-300 mb-4 tracking-megawide">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] tracking-wide mb-6">
            Crafted to be
            <br />
            <span className="italic font-normal text-gold-300">Treasured</span>
          </h1>
          <p className="text-sm lg:text-base text-cream-200 max-w-md mx-auto mb-8 leading-relaxed font-light">
            18K gold-plated demi-fine jewelry, designed for everyday elegance.
            Hypoallergenic. Water-resistant. Made to last.
          </p>
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
