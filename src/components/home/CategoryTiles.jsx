import { Link } from "react-router-dom";
import { categories } from "../../data/products";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function CategoryTiles() {
  const [sectionRef, visible] = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-velmora-bg" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-12 reveal ${visible ? "visible" : ""}`}>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-text-secondary mb-3">
            Explore by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children ${visible ? "visible" : ""}`}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden block stagger-item"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
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