import { Link } from "react-router-dom";
import { placeholderSvg, categories } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="velmora-container">
        <div className="mb-10 text-center">
          <p className="section-kicker">Find your ritual</p>
          <h2 id="category-section-title" className="serif-heading mt-3 text-5xl md:text-7xl">
            Shop by Category
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={category.href} className="group relative overflow-hidden rounded-[2rem] bg-velmora-parchment shadow-sm">
              <img
                alt={category.name}
                className="aspect-[4/5] w-full object-cover transition duration-700 ease-velmora group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}] [category-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={placeholderSvg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-velmora-espresso/10 to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-ivory">
                <h3 id={category.titleId} className="font-serifDisplay text-4xl font-medium">
                  {category.name}
                </h3>
                <p id={category.descId} className="mt-3 translate-y-3 text-sm leading-6 text-velmora-parchment opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:min-h-12">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
