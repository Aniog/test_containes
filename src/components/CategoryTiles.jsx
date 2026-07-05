import { Link } from "react-router-dom";

const categories = [
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop&crop=center",
    to: "/shop?category=earrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop&crop=center",
    to: "/shop?category=necklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop&crop=center",
    to: "/shop?category=huggies",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-section md:py-section-lg bg-cream-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-overline uppercase text-gold tracking-[0.2em] mb-3">
            Explore
          </p>
          <h2
            className="text-display-md text-charcoal-800 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Shop by Category
          </h2>
          <div className="section-divider" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[3/4] sm:aspect-[2/3] rounded-2xl overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal-800/20 group-hover:bg-charcoal-800/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-center p-6">
                <div className="text-center">
                  <h3
                    className="text-cream-50 text-display-sm font-medium tracking-[0.08em] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {cat.name}
                  </h3>
                  <span className="inline-block text-cream-100 text-overline uppercase tracking-[0.14em] border-b border-cream-100/50 pb-0.5 group-hover:border-gold-light group-hover:text-gold-light transition-colors duration-300">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
