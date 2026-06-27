import { Link } from "react-router-dom";

const categories = [
  {
    name: "Earrings",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
  {
    name: "Necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-17477f983af0?w=800&q=80",
  },
  {
    name: "Huggies",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e2523c0188b?w=800&q=80",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/shop"
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-serif text-xl md:text-2xl tracking-[0.12em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
