const stats = [
  { value: '$1.8T', label: 'Projected AI market by 2030', sub: 'Global economic impact' },
  { value: '97M', label: 'New jobs created by AI', sub: 'World Economic Forum estimate' },
  { value: '40%', label: 'Productivity boost', sub: 'For AI-augmented workers' },
  { value: '10,000+', label: 'AI research papers', sub: 'Published every month' },
]

export default function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, sub }) => (
            <div
              key={label}
              className="text-center bg-gradient-to-b from-purple-900/20 to-blue-900/10 border border-white/10 rounded-2xl p-7"
            >
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{label}</div>
              <div className="text-gray-500 text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
