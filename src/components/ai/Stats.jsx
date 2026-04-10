const stats = [
  { value: '$1.8T', label: 'Projected AI market by 2030' },
  { value: '300M+', label: 'Jobs impacted globally' },
  { value: '97%', label: 'Accuracy in top vision models' },
  { value: '1T+', label: 'Parameters in frontier models' },
];

const Stats = () => (
  <section className="bg-gradient-to-r from-violet-900/40 to-indigo-900/40 border-y border-white/10 py-16 px-6">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map(({ value, label }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
            {value}
          </span>
          <span className="text-gray-400 text-sm">{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
