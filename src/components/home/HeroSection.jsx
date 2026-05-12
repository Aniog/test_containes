import { ArrowRight, Play, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-violet-950 pt-16"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-800/50 border border-purple-600/40 text-purple-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
          <Star className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
          全新版本 2.0 正式发布
          <ArrowRight className="w-3.5 h-3.5" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          释放你的
          <span className="block bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
            无限创意
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Lumina 是一个专为创意人士打造的紫色宇宙平台，
          帮助你将灵感转化为令人惊叹的作品，连接全球创作者社区。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#cta"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-purple-600/40 transition-all duration-200 hover:scale-105"
          >
            立即免费体验
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 border border-purple-500/60 text-purple-200 hover:bg-purple-800/40 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
          >
            <Play className="w-4 h-4 fill-current" />
            观看演示
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-300 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D'].map((l, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 border-2 border-purple-900 flex items-center justify-center text-white text-xs font-bold"
                >
                  {l}
                </div>
              ))}
            </div>
            <span>10,000+ 创作者已加入</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-purple-700" />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-1">4.9 / 5 评分</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
