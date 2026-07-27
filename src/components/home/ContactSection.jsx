import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: '邮箱', value: 'hello@greenlife.com' },
  { icon: Phone, label: '电话', value: '+86 400-888-9999' },
  { icon: MapPin, label: '地址', value: '上海市浦东新区绿色大道 88 号' },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="bg-pale py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald bg-mint px-4 py-1.5 rounded-full">
            联系我们
          </span>
          <h2 className="text-4xl font-bold text-forest mt-4 mb-4">
            一起创造绿色未来
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            无论您有任何问题、合作意向或建议，我们都很乐意听取。请填写下方表单，我们将在 24 小时内回复您。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="rounded-3xl p-10 text-white h-full flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #1a5c38 0%, #2d9e5f 100%)' }}>
              <div>
                <h3 className="text-2xl font-bold mb-2">联系方式</h3>
                <p className="text-white/70 text-sm mb-10">
                  我们的团队随时准备为您提供帮助和支持。
                </p>
                <ul className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-mint" />
                        </div>
                        <div>
                          <div className="text-xs text-white/50 mb-0.5">{item.label}</div>
                          <div className="text-sm font-medium">{item.value}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Decorative */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-white/60 text-xs">
                  工作时间：周一至周五 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-10 border border-mint shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-forest" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">消息已发送！</h3>
                <p className="text-gray-500 text-sm">感谢您的留言，我们将尽快与您联系。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-emerald text-sm font-medium hover:underline"
                >
                  再次发送
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5" htmlFor="name">
                    您的姓名
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="请输入您的姓名"
                    className="w-full border border-mint rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/40 focus:border-emerald transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5" htmlFor="email">
                    电子邮箱
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-mint rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/40 focus:border-emerald transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5" htmlFor="message">
                    留言内容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="请告诉我们您的想法或问题..."
                    className="w-full border border-mint rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/40 focus:border-emerald transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-forest text-white py-3.5 rounded-xl font-semibold hover:bg-emerald transition-colors text-sm disabled:opacity-70"
                >
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      发送消息
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
