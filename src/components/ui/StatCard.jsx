export function StatCard({ icon, label, value, sub, color = 'gold' }) {
  const colors = {
    gold: { icon: 'text-[#f0b830]', bg: 'bg-[#f0b830]/10' },
    purple: { icon: 'text-[#b48af8]', bg: 'bg-[#8b5cf6]/10' },
    green: { icon: 'text-[#34d399]', bg: 'bg-[#34d399]/10' },
    red: { icon: 'text-[#f04040]', bg: 'bg-[#f04040]/10' },
    amber: { icon: 'text-[#f09030]', bg: 'bg-[#f09030]/10' },
    blue: { icon: 'text-blue-400', bg: 'bg-blue-900/20' },
  }
  const c = colors[color] || colors.gold

  return (
    <div className="bg-[#181230] border border-[#2e2650] rounded-xl p-5 flex items-start gap-4">
      <div className={`${c.bg} rounded-lg p-2.5 flex-shrink-0`}>
        <span className={`${c.icon} text-xl`}>{icon}</span>
      </div>
      <div className="min-w-0">
        <p className="text-xs text-[#9890b8] uppercase tracking-widest font-medium">{label}</p>
        <p className="text-xl font-bold text-[#f0ecff] mt-0.5">{value}</p>
        {sub && <p className="text-xs text-[#5a5278] mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}
