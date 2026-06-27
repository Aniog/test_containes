import { Link } from "react-router-dom";

const categories = [
  { name: "Earrings", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80", slug: "Earrings" },
  { name: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", slug: "Necklaces" },
  { name: "Huggies", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80", slug: "Huggies" },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-3">Explore</p>
          <h2 className="serif text-3xl md:text-4xl font-light">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/25 group-hover:bg-charcoal/35 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="serif text-2xl md:text-3xl text-cream font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-5 left-0 right-0 text-center md:group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-cream text-xs font-medium uppercase tracking-[0.2em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
