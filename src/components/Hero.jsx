import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-200 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-300 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-900/10 text-yellow-900 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-yellow-900/20">
          <Sparkles className="w-4 h-4" />
          全新上线 · 限时免费体验
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-900 leading-tight mb-6 max-w-4xl">
          让每一天都
          <span className="relative inline-block mx-3">
            <span className="relative z-10">闪耀</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-500 opacity-60 rounded" />
          </span>
          如阳光
        </h1>

        <p className="text-lg md:text-xl text-yellow-800 max-w-2xl mb-10 leading-relaxed">
          我们提供最优质的服务，帮助您的业务蓬勃发展。简单、高效、充满活力——就像阳光一样温暖您的每一步。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="flex items-center gap-2 bg-yellow-900 text-yellow-50 font-bold text-base px-8 py-4 rounded-full hover:bg-yellow-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            立即开始
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-white/60 text-yellow-900 font-bold text-base px-8 py-4 rounded-full hover:bg-white/80 transition-all border border-yellow-900/20">
            了解更多
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16 text-center">
          {[
            { num: '10万+', label: '活跃用户' },
            { num: '99.9%', label: '服务稳定性' },
            { num: '4.9★', label: '用户评分' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl md:text-3xl font-extrabold text-yellow-900">{item.num}</div>
              <div className="text-sm text-yellow-700 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 0C1200 50 240 50 0 0L0 60Z" fill="#fffbeb" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
