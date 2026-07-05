import { Link } from "react-router-dom";

const categories = [
  {
    name: "Earrings",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3ddc1d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Huggies",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a51?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
            Find Your Gold
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${category.name}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/25 group-hover:bg-espresso/35 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-cream tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {category.name}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-cream text-xs uppercase tracking-[0.25em] border-b border-cream/50 pb-1">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
