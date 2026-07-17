import { Link } from "react-router-dom";

const categories = [
  {
    name: "Earrings",
    slug: "Earrings",
    image: "https://placehold.co/600x400/FFF5EB/8B6914?text=Earrings&font=playfair-display",
  },
  {
    name: "Necklaces",
    slug: "Necklaces",
    image: "https://placehold.co/600x400/FFF5EB/8B6914?text=Necklaces&font=playfair-display",
  },
  {
    name: "Huggies",
    slug: "Huggies",
    image: "https://placehold.co/600x400/FFF5EB/8B6914?text=Huggies&font=playfair-display",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container-velmora">
        <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal text-center mb-10 sm:mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.slug}`}
              className="group relative overflow-hidden aspect-[4/3] sm:aspect-square"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl text-white tracking-widest uppercase drop-shadow-lg">
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
