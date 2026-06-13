const ProductGrid = ({ items }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Category
          </div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  )
}

export default ProductGrid
