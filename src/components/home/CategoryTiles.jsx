import { Link } from 'react-router-dom'

const CATEGORIES = [
  {
    name: 'Earrings',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3d3e6824?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Necklaces',
    image:
      'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Huggies',
    image:
      'https://images.unsplash.com/photo-1617038224557-69d61629fd8e?auto=format&fit=crop&w=800&q=80',
  },
]

export function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velvet-secondary">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">Find Your Finish</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.name}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden bg-velvet"
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velvet/30 group-hover:bg-velvet/45 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-cream translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {category.name}
                  </h3>
                  <span className="mt-3 inline-block font-sans text-xs uppercase tracking-[0.16em] text-cream/0 group-hover:text-cream/90 transition-colors duration-500 delay-75">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
