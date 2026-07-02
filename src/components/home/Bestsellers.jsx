import ProductCard from '../common/ProductCard.jsx'

const Bestsellers = ({ products, onAdd, onSelect }) => (
  <section id="bestsellers" className="bg-velmora-ivory px-5 py-16 text-velmora-ink lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-line pb-7 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-clay">Bestsellers</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink md:text-6xl">Most treasured now</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-velmora-forest/75">
          Signature demi-fine pieces that move beautifully from everyday rituals to meaningful gifts.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} onSelect={onSelect} imageContext="bestseller" />
        ))}
      </div>
    </div>
  </section>
)

export default Bestsellers
