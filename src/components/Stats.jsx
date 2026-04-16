const stats = [
  { value: '10M+', label: 'Tasks Automated', color: 'text-violet-400' },
  { value: '99.9%', label: 'Uptime SLA', color: 'text-blue-400' },
  { value: '150+', label: 'Integrations', color: 'text-emerald-400' },
  { value: '4.9★', label: 'Average Rating', color: 'text-amber-400' },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-[#050816] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, color }) => (
            <div key={label} className="text-center">
              <div className={`text-4xl md:text-5xl font-black mb-2 ${color}`}>{value}</div>
              <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
