const stats = [
  { value: '$1.8T', label: 'Projected AI market by 2030', color: 'text-blue-400' },
  { value: '300M', label: 'Jobs potentially augmented by AI', color: 'text-purple-400' },
  { value: '97%', label: 'Accuracy in top image recognition models', color: 'text-cyan-400' },
  { value: '10x', label: 'Faster drug discovery with AI assistance', color: 'text-green-400' },
]

const Stats = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              AI by the Numbers
            </h2>
            <p className="text-gray-400">The scale of AI's impact in 2024 and beyond.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-4xl md:text-5xl font-extrabold mb-2 ${s.color}`}>
                  {s.value}
                </div>
                <div className="text-gray-400 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
