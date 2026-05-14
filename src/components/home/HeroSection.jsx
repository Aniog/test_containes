import { ArrowRight, Play } from 'lucide-react';

const stats = [
  { value: '10K+', label: '活跃用户' },
  { value: '99.9%', label: '服务可用率' },
  { value: '50+', label: '国家地区' },
  { value: '24/7', label: '全天候支持' },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 30%, #1d4ed8 60%, #0ea5e9 100%)' }}
    >
      {/* Background decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500 opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-48 h-48 bg-sky-300 opacity-15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500 bg-opacity-30 border border-blue-400 border-opacity-50 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
          全新版本 2.0 已上线
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          构建更美好的
          <br />
          <span style={{ background: 'linear-gradient(90deg, #7dd3fc, #a5f3fc, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            数字未来
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          我们提供领先的云端解决方案，帮助企业加速数字化转型，
          释放无限潜能，迈向成功的未来。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="flex items-center gap-2 text-blue-700 font-semibold px-8 py-3.5 rounded-full transition shadow-lg text-base"
            style={{ background: 'linear-gradient(90deg, #ffffff, #e0f2fe)' }}
          >
            立即开始
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 border-2 border-white border-opacity-60 text-white hover:bg-white hover:bg-opacity-10 font-semibold px-8 py-3.5 rounded-full transition text-base"
          >
            <Play className="w-4 h-4" />
            了解更多
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#EFF6FF"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
