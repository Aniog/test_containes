const ProblemCard = ({ item }) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
    </article>
  )
}

export default ProblemCard
