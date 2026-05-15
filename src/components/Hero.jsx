import { ArrowRight, ShieldCheck, Award, Users } from 'lucide-react';

const stats = [
  { icon: ShieldCheck, value: '20+', label: '年行业经验' },
  { icon: Award, value: '500+', label: '认证产品' },
  { icon: Users, value: '3000+', label: '合作医院' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16"
    >
      {/* Background decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full opacity-40 blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              国家认证医疗器械制造商
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              精准医疗器械<br />
              <span className="text-blue-600">守护生命健康</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              华康医疗专注于高端医疗器械的研发与制造，以创新技术和严格品质管控，为全国3000余家医疗机构提供可靠的医疗解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-blue-300"
              >
                查看产品 <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-200 hover:border-blue-400 text-blue-700 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-blue-50"
              >
                联系我们
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg">智能监护系统</p>
                    <p className="text-slate-500 text-sm">实时生命体征监测</p>
                  </div>
                </div>
                {/* Fake ECG line */}
                <div className="bg-slate-900 rounded-2xl p-4 mb-4">
                  <p className="text-green-400 text-xs font-mono mb-2">ECG 实时监测</p>
                  <svg viewBox="0 0 300 60" className="w-full h-12">
                    <polyline
                      points="0,30 30,30 40,10 50,50 60,30 90,30 100,5 110,55 120,30 150,30 160,15 170,45 180,30 210,30 220,8 230,52 240,30 270,30 280,18 290,42 300,30"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: '心率', value: '72', unit: 'bpm', color: 'text-red-500' },
                    { label: '血氧', value: '98', unit: '%', color: 'text-blue-500' },
                    { label: '血压', value: '120/80', unit: 'mmHg', color: 'text-green-500' },
                  ].map((item) => (
                    <div key={item.label} className="bg-slate-50 rounded-xl p-3 text-center">
                      <p className={`text-lg font-bold ${item.color}`}>{item.value}</p>
                      <p className="text-slate-400 text-xs">{item.unit}</p>
                      <p className="text-slate-600 text-xs font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                ✓ CE 认证
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">ISO 13485</p>
                  <p className="text-xs text-slate-500">质量认证</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">{value}</p>
                <p className="text-slate-500 text-sm">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
