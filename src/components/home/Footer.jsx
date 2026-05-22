import { MapPin, Phone, Mail, Clock, Home, Send } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">联系我们</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-800 mt-3 mb-4"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              期待与您相遇
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
              无论您有任何疑问或需求，我们的团队随时准备为您提供最贴心的服务。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div>
              <h3
                className="text-xl font-bold text-stone-800 mb-7"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                联系方式
              </h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: '公司地址', value: '江苏省苏州市庆巷路88号庆巷家居大厦' },
                  { icon: Phone, label: '服务热线', value: '400-888-6688' },
                  { icon: Mail, label: '电子邮箱', value: 'service@qingxiang-home.com' },
                  { icon: Clock, label: '服务时间', value: '周一至周日 9:00 - 21:00' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-xs text-stone-400 mb-0.5">{item.label}</div>
                      <div className="text-stone-700 font-medium text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden bg-amber-50 border border-amber-100 h-44 flex items-center justify-center">
                <div className="text-center text-stone-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-amber-300" />
                  <p className="text-sm">江苏省苏州市庆巷路88号</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3
                className="text-xl font-bold text-stone-800 mb-7"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                在线留言
              </h3>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-stone-800 mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    留言已发送！
                  </h4>
                  <p className="text-stone-500 text-sm">感谢您的留言，我们将在24小时内与您联系。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">您的姓名</label>
                    <input
                      type="text"
                      required
                      placeholder="请输入您的姓名"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 text-stone-800 placeholder-stone-300 text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">联系电话</label>
                    <input
                      type="tel"
                      required
                      placeholder="请输入您的联系电话"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 text-stone-800 placeholder-stone-300 text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">留言内容</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="请告诉我们您的需求或疑问..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 text-stone-800 placeholder-stone-300 text-sm bg-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-700 text-white font-semibold py-4 rounded-xl hover:bg-amber-800 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    发送留言
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-white" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    庆巷家居用品有限公司
                  </div>
                </div>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                专注家居用品十五年，用心为每个家庭提供温馨、舒适、高品质的生活用品，让家成为最美好的地方。
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">快速导航</h4>
              <ul className="space-y-2.5">
                {['关于我们', '产品系列', '品质承诺', '客户评价', '联系我们'].map((link) => (
                  <li key={link}>
                    <a href={`#${link === '关于我们' ? 'about' : link === '产品系列' ? 'products' : link === '品质承诺' ? 'features' : link === '客户评价' ? 'testimonials' : 'contact'}`}
                      className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">联系我们</h4>
              <ul className="space-y-2.5 text-stone-400 text-sm">
                <li>400-888-6688</li>
                <li>service@qingxiang-home.com</li>
                <li>苏州市庆巷路88号</li>
                <li>周一至周日 9:00-21:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-xs">
              © 2024 庆巷家居用品有限公司 版权所有
            </p>
            <p className="text-stone-500 text-xs">
              苏ICP备XXXXXXXX号 | 营业执照：91320500XXXXXXXXXX
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
