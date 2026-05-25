const TodoHeader = ({ activeCount, completedCount, totalCount }) => {
  const stats = [
    { label: 'Total tasks', value: totalCount },
    { label: 'In progress', value: activeCount },
    { label: 'Completed', value: completedCount },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
          Daily focus workspace
        </span>
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Keep every task on track.
          </h1>
          <p className="max-w-2xl text-base text-slate-600 md:text-lg">
            Capture new work, stay clear on what matters, and sweep away finished
            tasks in one tidy place.
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900"
          >
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoHeader
