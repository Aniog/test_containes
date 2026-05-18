const stats = [
  { value: '200+', label: 'Years of natural filtration' },
  { value: '2,400m', label: 'Source elevation' },
  { value: '99.9%', label: 'Purity rating' },
  { value: '50+', label: 'Countries served' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-blue-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{value}</p>
              <p className="text-sky-200 text-sm md:text-base font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
