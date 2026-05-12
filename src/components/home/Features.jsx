import { Leaf, Recycle, Sun, Droplets, Wind, TreePine } from 'lucide-react';

const features = [
  {
    icon: TreePine,
    title: '植树造林计划',
    description: '每购买一件产品，我们就在全球各地种植一棵树，共同恢复森林生态系统，为地球增添绿色。',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: Recycle,
    title: '循环经济模式',
    description: '我们采用100%可回收材料，推动循环经济，减少废弃物产生，让资源得到最大化利用。',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Sun,
    title: '清洁能源驱动',
    description: '我们的所有运营均由太阳能和风能等可再生能源驱动，实现零碳排放的绿色运营目标。',
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: Droplets,
    title: '水资源保护',
    description: '通过先进的水循环技术，我们将用水量减少了70%，并积极参与全球水资源保护项目。',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Wind,
    title: '碳中和承诺',
    description: '我们承诺在2030年前实现碳中和，通过减排、抵消和创新技术，共同应对气候变化挑战。',
    color: 'bg-sky-100 text-sky-700',
  },
  {
    icon: Leaf,
    title: '有机农业支持',
    description: '我们与全球数百家有机农场合作，支持无农药、无化肥的可持续农业，保护土壤健康。',
    color: 'bg-lime-100 text-lime-700',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            我们的特色
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight mb-4">
            为地球而生的解决方案
          </h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto leading-relaxed">
            我们提供全方位的绿色解决方案，从能源到农业，从水资源到碳排放，每一个环节都致力于可持续发展。
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-green-900 font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-green-700 leading-relaxed text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
