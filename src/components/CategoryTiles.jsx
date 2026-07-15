import { Link } from "react-router-dom";

const categories = [
  {
    id: "earrings",
    label: "Earrings",
    query: "gold earrings editorial jewelry dark background",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    query: "gold necklace layered on neck editorial",
  },
  {
    id: "huggies",
    label: "Huggies",
    query: "gold huggie earrings ear stack",
  },
];

export function CategoryTiles() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
            Explore
          </p>
          <h2 className="font-serif text-3xl text-espresso md:text-4xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.label}`}
              className="group relative aspect-[3/4] overflow-hidden bg-parchment"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={`[category-${category.id}-label]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-espresso/20 transition-colors duration-300 group-hover:bg-espresso/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${category.id}-label`}
                  className="border border-ivory/80 px-8 py-3 font-serif text-xl uppercase tracking-widest text-ivory backdrop-blur-sm transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ivory"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
