export function StatCard({ icon, label, value, sub, color = 'gold' }) {
  const colors = {
    gold: { icon: 'text-[#c9a84c]', bg: 'bg-[#c9a84c]/10' },
    purple: { icon: 'text-[#a07de0]', bg: 'bg-[#7c5cbf]/10' },
    green: { icon: 'text-[#4caf7d]', bg: 'bg-[#4caf7d]/10' },
    red: { icon: 'text-[#c94c4c]', bg: 'bg-[#c94c4c]/10' },
    amber: { icon: 'text-[#c9844c]', bg: 'bg-[#c9844c]/10' },
    blue: { icon: 'text-blue-400', bg: 'bg-blue-900/20' },
  }
  const c = colors[color] || colors.gold

  return (
    <div className="bg-[#1a1e35] border border-[#2a2f52] rounded-xl p-5 flex items-start gap-4">
      <div className={`${c.bg} rounded-lg p-2.5 flex-shrink-0`}>
        <span className={`${c.icon} text-xl`}>{icon}</span>
      </div>
      <div className="min-w-0">
        <p className="text-xs text-[#9a95a8] uppercase tracking-widest font-medium">{label}</p>
        <p className="text-xl font-bold text-[#e8e4d9] mt-0.5">{value}</p>
        {sub && <p className="text-xs text-[#5c5870] mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}
