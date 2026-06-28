function ProductGrid({ categories }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((category) => (
        <article
          key={category.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900">{category.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{category.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.examples.map((example) => (
              <span
                key={example}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
              >
                {example}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProductGrid
