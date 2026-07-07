import { Link } from "react-router-dom";

const categories = [
  { label: "Earrings", imgId: "cat-earrings" },
  { label: "Necklaces", imgId: "cat-necklaces" },
  { label: "Huggies", imgId: "cat-huggies" },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-accent font-medium mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-beige"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-label-${cat.label}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-label-${cat.label}`}
                  className="text-white text-xs uppercase tracking-[0.2em] font-medium border border-white/60 px-5 py-2 backdrop-blur-sm group-hover:bg-white group-hover:text-velmora-text transition-all"
                >
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
