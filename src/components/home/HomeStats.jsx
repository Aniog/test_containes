const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '3,000+', label: 'Machines Delivered' },
  { value: '50+', label: 'Countries Served' },
  { value: '99.5%', label: 'Customer Satisfaction' },
];

const HomeStats = () => {
  return (
    <section className="py-12 lg:py-16 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-navy-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
