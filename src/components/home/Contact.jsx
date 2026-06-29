import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 rounded-full px-4 py-1 text-sm font-semibold mb-4">
            联系我们
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
            开始您的绿色之旅
          </h2>
          <p className="text-green-700 text-lg max-w-xl mx-auto">
            有任何问题或合作意向？我们随时欢迎您的来信。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-6">联系方式</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: '邮箱', value: 'hello@greenlife.com' },
                  { icon: Phone, label: '电话', value: '+86 400-888-8888' },
                  { icon: MapPin, label: '地址', value: '北京市朝阳区绿色大道 88 号' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-green-500 font-medium uppercase tracking-wide">{label}</div>
                      <div className="text-green-800 font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">加入绿色社区</h3>
              <p className="text-green-100 text-sm leading-relaxed mb-4">
                订阅我们的通讯，获取最新的环保资讯和独家优惠。
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="您的邮箱地址"
                  className="flex-1 bg-white/20 text-white placeholder-green-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:bg-white/30 transition"
                />
                <button className="bg-white text-green-700 rounded-xl px-4 py-2.5 font-semibold text-sm hover:bg-green-50 transition">
                  订阅
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">发送成功！</h3>
                <p className="text-green-700">感谢您的留言，我们将在 24 小时内回复您。</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                  className="mt-6 text-green-600 font-semibold hover:text-green-700 underline underline-offset-2"
                >
                  再次发送
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-green-900 mb-6">发送消息</h3>
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1.5">您的姓名</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="请输入您的姓名"
                    className="w-full bg-white border border-green-200 rounded-xl px-4 py-3 text-green-900 placeholder-green-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1.5">电子邮箱</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="请输入您的邮箱"
                    className="w-full bg-white border border-green-200 rounded-xl px-4 py-3 text-green-900 placeholder-green-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1.5">留言内容</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="请输入您的留言..."
                    className="w-full bg-white border border-green-200 rounded-xl px-4 py-3 text-green-900 placeholder-green-300 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  发送消息
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
