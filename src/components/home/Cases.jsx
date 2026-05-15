import { MapPin, Calendar, Zap } from 'lucide-react';

const cases = [
  {
    title: '某省级电网220kV智能变电站工程',
    location: '华东地区',
    year: '2023',
    capacity: '220kV / 2×180MVA',
    desc: '承担全站GIS设备供货及系统集成，实现无人值守智能运维，项目荣获省级优质工程奖。',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=80',
    tag: '变电站',
  },
  {
    title: '大型地面光伏电站并网工程',
    location: '西北地区',
    year: '2023',
    capacity: '200MW 光伏并网',
    desc: '提供升压变压器、35kV集电线路及并网保护系统，并网效率达98.7%，年发电量超3亿度。',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80',
    tag: '新能源',
  },
  {
    title: '工业园区10kV配电系统改造',
    location: '华南地区',
    year: '2022',
    capacity: '10kV / 50MVA',
    desc: '完成园区配电网智能化改造，部署综合自动化系统，供电可靠性提升至99.99%，停电时间减少85%。',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&q=80',
    tag: '工业配电',
  },
  {
    title: '海上风电场集电系统工程',
    location: '东南沿海',
    year: '2022',
    capacity: '300MW 海上风电',
    desc: '为300MW海上风电场提供35kV海缆集电系统整体解决方案，设备通过严苛的盐雾腐蚀测试。',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80',
    tag: '海上风电',
  },
];

const tagColors = {
  变电站: 'bg-blue-100 text-blue-700',
  新能源: 'bg-green-100 text-green-700',
  工业配电: 'bg-purple-100 text-purple-700',
  海上风电: 'bg-cyan-100 text-cyan-700',
};

export default function Cases() {
  return (
    <section id="cases" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            工程案例
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            典型工程项目展示
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            深耕电力行业二十年，我们的产品与服务遍布全国重点电力工程，以实绩赢得客户信赖。
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-lg ${tagColors[c.tag]}`}>
                    {c.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {c.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {c.year}年竣工
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-blue-500" />
                    {c.capacity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-8">合作客户与战略伙伴</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['国家电网', '南方电网', '华能集团', '大唐集团', '三峡能源', '中广核', '华润电力', '协鑫能科'].map((name) => (
              <div
                key={name}
                className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-500 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
