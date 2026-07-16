import { Mail, Phone, MapPin } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
          随时为您服务
        </div>

        <h1 id="hero-title" className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          联系我们
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
          无论您有任何问题、合作意向或建议，我们都期待与您沟通。填写下方表单，我们将在 24 小时内回复您。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-indigo-100">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-cyan-300" />
            <span>400-888-8888</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-indigo-400" />
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-cyan-300" />
            <span>hello@example.com</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-indigo-400" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-300" />
            <span>上海市浦东新区</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
