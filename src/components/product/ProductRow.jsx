import ProductCard from "./ProductCard";

export default function ProductRow({ products, title = "You may also like", subtitle }) {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="velmora-container">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Curated for you</p>
            <h2 className="serif-heading mt-3 text-4xl md:text-6xl">{title}</h2>
          </div>
          {subtitle && <p className="max-w-md text-sm leading-7 text-velmora-cocoa">{subtitle}</p>}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
