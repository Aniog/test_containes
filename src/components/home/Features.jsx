import { Leaf, Hammer, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '天然原木',
    subtitle: '精选材质',
    desc: '严选北美黑胡桃、白橡木、樱桃木等优质木材，每一块木料都经过严格筛选，保留木材最自然的纹理与色泽。',
    color: '#4a7c59',
    bg: '#f0f7f2',
  },
  {
    icon: Hammer,
    title: '手工匠造',
    subtitle: '传承工艺',
    desc: '传承百年榫卯工艺，结合现代精密加工技术。每件家具由经验丰富的工匠手工打磨，历经数十道工序方才完成。',
    color: '#8b5e3c',
    bg: '#fdf5ec',
  },
  {
    icon: Sparkles,
    title: '永恒设计',
    subtitle: '简约美学',
    desc: '摒弃繁复装饰，以简约线条彰显木材本身的美感。经典的设计语言让每件家具都能跨越时代，历久弥新。',
    color: '#c49a6c',
    bg: '#fdf8f3',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-[#fefcf8] py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[#8b5e3c] text-sm font-medium tracking-[0.25em] uppercase mb-3">
            为什么选择我们
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d2314] mb-5">
            品质源于对细节的执着
          </h2>
          <p className="text-[#5c3d2e] text-lg max-w-2xl mx-auto leading-relaxed">
            二十年专注木质家具，我们深知每一个细节都关乎您的居家体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                style={{ backgroundColor: f.bg }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: f.color + '20' }}
                >
                  <Icon className="w-7 h-7" style={{ color: f.color }} />
                </div>
                <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: f.color }}>
                  {f.subtitle}
                </p>
                <h3 className="font-serif text-2xl font-bold text-[#3d2314] mb-4">{f.title}</h3>
                <p className="text-[#5c3d2e] leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '20+', label: '年匠心经验' },
            { num: '5000+', label: '满意客户' },
            { num: '200+', label: '产品系列' },
            { num: '100%', label: '天然原木' },
          ].map((stat) => (
            <div key={stat.label} className="py-6">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-[#8b5e3c] mb-2">{stat.num}</p>
              <p className="text-[#5c3d2e] text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
