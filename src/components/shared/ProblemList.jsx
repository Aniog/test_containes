const ProblemList = ({ items }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm"
        >
          <p className="text-base leading-7 text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  )
}

export default ProblemList
