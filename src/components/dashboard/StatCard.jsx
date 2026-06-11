const StatCard = ({ label, value, unit, icon: Icon, color, bg }) => (
  <div className={`rounded-2xl p-5 flex items-center gap-4 shadow-sm ${bg}`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
      <p className="text-2xl font-bold text-slate-800">
        {value}
        <span className="text-base font-medium text-slate-500 ml-1">{unit}</span>
      </p>
    </div>
  </div>
)

export default StatCard
