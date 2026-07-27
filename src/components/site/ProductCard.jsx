const ProductCard = ({ category }) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
        Category
      </div>
      <h3 id={`${category.id}-title`} className="mt-5 text-xl font-semibold text-slate-900">
        {category.title}
      </h3>
      <p id={`${category.id}-description`} className="mt-4 text-sm leading-7 text-slate-600">
        {category.description}
      </p>
      <p className="mt-5 rounded-2xl bg-teal-50 px-4 py-4 text-sm font-medium text-teal-800">
        {category.fit}
      </p>
    </article>
  )
}

export default ProductCard
