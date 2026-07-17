import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1920&q=85"
          alt="Warm-lit gold jewelry on a model"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-white/90">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.1] md:text-7xl lg:text-8xl">
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-white/90 md:text-base">
          Elegant pieces for everyday luxury, designed for women who collect moments as much as they do jewelry.
        </p>
        <Link
          to="/shop"
          className="mt-8 bg-velmora-accent px-10 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-velmora-base transition-all duration-300 hover:bg-white hover:text-velmora-base"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
