const stats = [
  { value: '10M+', label: 'Requests per day' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50+', label: 'Languages supported' },
  { value: '4.9★', label: 'Average rating' },
];

export default function Stats() {
  return (
    <section className="py-16 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
