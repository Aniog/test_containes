import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const COLLECTIONS = [
  {
    id: "the-floral-edit",
    title: "The Floral Edit",
    blurb: "Pastel crystal clusters, hand-set in warm gold.",
    categoryFilter: "necklaces",
  },
  {
    id: "everyday-huggies",
    title: "Everyday Huggies",
    blurb: "The hoops you reach for, on rotation.",
    categoryFilter: "huggies",
  },
  {
    id: "the-heirloom-edit",
    title: "The Heirloom Edit",
    blurb: "Keepsake sets, velvet-boxed for gifting.",
    categoryFilter: "sets",
  },
];

export default function CollectionsPage() {
  return (
    <main className="bg-cream">
      <section className="border-b border-mist bg-ivory">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">Collections</p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.05] text-charcoal md:text-6xl">
            Three edits, told in pieces.
          </h1>
          <p className="mt-3 max-w-md font-sans text-[15px] text-mocha">
            Curated stories from the bench — built to be mixed, gifted, and
            worn on repeat.
          </p>
        </div>
      </section>

      <section className="container-editorial py-12 md:py-16">
        <div className="space-y-20 md:space-y-28">
          {COLLECTIONS.map((c, i) => {
            const items = products.filter((p) => p.category === c.categoryFilter);
            return (
              <div key={c.id}>
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <p className="eyebrow">Collection · 0{i + 1}</p>
                    <h2 className="mt-2 font-serif text-3xl text-charcoal md:text-4xl">
                      {c.title}
                    </h2>
                    <p className="mt-2 max-w-md font-sans text-[15px] text-mocha">
                      {c.blurb}
                    </p>
                  </div>
                  <Link
                    to={`/shop?category=${c.categoryFilter}`}
                    className="btn-ghost"
                  >
                    Shop the collection →
                  </Link>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
