import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto relative overflow-hidden rounded-sm">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(196, 162, 101, 0.2) 0%, transparent 70%)',
              }}
            />
          </div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="w-24 h-[1px] bg-gold/40" />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-4 md:px-12 lg:px-16 py-12 md:py-0">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-sans">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-espresso mb-6 leading-tight">
            Jewelry That Lives With You
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mb-6" />
          <p className="text-muted text-sm leading-relaxed mb-4 font-sans">
            At Velmora, we believe fine jewelry shouldn't be reserved for special occasions. Every piece is designed in our London studio and crafted from 18K gold-plated brass — luxurious, hypoallergenic, and made to be worn every day.
          </p>
          <p className="text-muted text-sm leading-relaxed mb-8 font-sans">
            From the weight of our huggies to the sparkle of our crystals, every detail is considered. Because the pieces you reach for every morning deserve to be extraordinary.
          </p>
          <div>
            <Link to="/" className="btn-outline text-xs">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}