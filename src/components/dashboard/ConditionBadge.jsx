const conditionStyles = {
  Sunny:    "bg-amber-500/20 text-amber-300 border border-amber-500/30",
  "Partly Cloudy": "bg-slate-600/40 text-slate-300 border border-slate-500/30",
  Cloudy:   "bg-slate-600/40 text-slate-300 border border-slate-500/30",
  Rainy:    "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  Stormy:   "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  Snowy:    "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  Foggy:    "bg-slate-500/20 text-slate-300 border border-slate-400/30",
  Windy:    "bg-teal-500/20 text-teal-300 border border-teal-500/30",
}

const ConditionBadge = ({ condition }) => {
  const style = conditionStyles[condition] || "bg-slate-600/40 text-slate-300 border border-slate-500/30"
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style}`}>
      {condition}
    </span>
  )
}

export default ConditionBadge
