import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="bg-[#0d0d0d] py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* CTA Banner */}
        <div className="relative rounded-3xl bg-black border border-neutral-800 overflow-hidden p-12 md:p-16 mb-20 text-center">
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,110,0.06)_0%,_transparent_70%)]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                开始合作
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6">
              准备好打造
              <br />
              <span className="text-[#c8a96e]">非凡体验</span>了吗？
            </h2>

            <p className="text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
              无论您是初创企业还是成熟品牌，我们都能为您提供量身定制的解决方案，
              将您的愿景转化为现实。
            </p>

            <button
              onClick={() => scrollTo('#contact-form')}
              className="group inline-flex items-center gap-2 bg-[#c8a96e] text-black font-semibold rounded-full px-10 py-4 hover:bg-[#d4b87a] transition-all duration-200 border-none cursor-pointer text-base"
            >
              立即联系我们
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Contact Info + Form */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">联系方式</h3>
            <div className="space-y-6">
              {[
                { icon: Mail, label: '邮箱', value: 'hello@noir-studio.com' },
                { icon: Phone, label: '电话', value: '+86 138 0000 0000' },
                { icon: MapPin, label: '地址', value: '上海市黄浦区南京东路100号' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#c8a96e]" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-600 uppercase tracking-wider mb-1">{label}</div>
                    <div className="text-neutral-300 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">发送消息</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-2">姓名</label>
                  <input
                    type="text"
                    placeholder="您的姓名"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-2">邮箱</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-2">项目类型</label>
                <input
                  type="text"
                  placeholder="品牌设计 / 网站开发 / 其他"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-2">项目描述</label>
                <textarea
                  rows={4}
                  placeholder="请简要描述您的项目需求..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c8a96e] text-black font-semibold rounded-xl py-3.5 hover:bg-[#d4b87a] transition-colors border-none cursor-pointer text-sm"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
