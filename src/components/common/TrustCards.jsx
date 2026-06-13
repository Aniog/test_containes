function TrustCards({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
        </article>
      ))}
    </div>
  )
}

export default TrustCards
