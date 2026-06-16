import { productCards } from './content'

const ProductsSection = () => {
  return (
    <section id="products" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">Products</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Folding solutions built for precision, clarity, and everyday usability.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg">
            Whether you refer to them as a double folder, a metal folder machine, or a sheet metal folder, the focus remains the same: dependable output with an intuitive operating experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {productCards.map((card) => (
            <article key={card.title} className="rounded-[2rem] border border-slate-300 bg-white p-7 shadow-sm">
              <div className="h-1.5 w-16 rounded-full bg-amber-500" />
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-700">{card.description}</p>
              <ul className="mt-6 space-y-3">
                {card.points.map((point) => (
                  <li key={point} className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-950">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
