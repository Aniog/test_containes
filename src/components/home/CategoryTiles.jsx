import { Link } from "react-router-dom";

const categoryTiles = [
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
  },
  {
    id: "huggies",
    name: "Huggies",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <span className="text-cream text-xs uppercase tracking-[0.3em] font-medium bg-charcoal/50 backdrop-blur-sm px-6 py-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
