import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
          Timeless pieces for life's most meaningful moments
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-block"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
