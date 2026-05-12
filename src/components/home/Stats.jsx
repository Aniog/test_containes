const stats = [
  { value: '10万+', label: '棵树木种植', description: '遍布全球50个国家' },
  { value: '98%', label: '可再生能源', description: '驱动我们的全部运营' },
  { value: '500吨', label: '碳排放减少', description: '每年持续降低中' },
  { value: '200万', label: '升水资源节约', description: '通过循环技术实现' },
];

const Stats = () => {
  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            我们的绿色成就
          </h2>
          <p className="text-emerald-100 text-lg">
            数字背后，是我们对地球的承诺与行动
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-emerald-100 font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-emerald-200 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
