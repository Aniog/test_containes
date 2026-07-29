const ProductGrid = ({ items }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.name} className="rounded-3xl border border-brand-line bg-white p-6 shadow-card md:p-7">
          <h3 className="text-xl font-semibold text-brand-ink">{item.name}</h3>
          <p className="mt-3 text-base leading-7 text-brand-slate">{item.description}</p>
        </article>
      ))}
    </div>
  )
}

export default ProductGrid
