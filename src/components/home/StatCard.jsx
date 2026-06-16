const StatCard = ({ value, label }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-lg shadow-slate-900/5">
    <p className="text-3xl font-bold tracking-tight text-slate-950">{value}</p>
    <p className="mt-2 text-sm font-medium uppercase tracking-widest text-slate-500">
      {label}
    </p>
  </div>
)

export default StatCard
