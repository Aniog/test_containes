import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            联系我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight mb-4">
            一起开启绿色之旅
          </h2>
          <p className="text-green-700 text-lg max-w-xl mx-auto">
            无论您有任何问题或合作意向，我们都期待与您交流，共同为地球的未来努力。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-green-900 font-bold text-xl mb-6">联系方式</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: '电子邮件', value: 'hello@greenlife.com' },
                  { icon: Phone, label: '联系电话', value: '+86 400-888-9999' },
                  { icon: MapPin, label: '办公地址', value: '上海市浦东新区绿色大道88号' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-green-600 text-sm font-medium">{label}</div>
                      <div className="text-green-900 font-semibold">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission card */}
            <div className="bg-green-900 rounded-2xl p-8 text-white">
              <h4 className="font-bold text-lg mb-3 text-emerald-300">我们的使命</h4>
              <p className="text-green-300 leading-relaxed text-sm">
                "让每一个人都能轻松参与到绿色行动中来，用科技和创新的力量，
                共同守护我们唯一的地球家园。"
              </p>
              <div className="mt-4 text-emerald-400 text-sm font-medium">— GreenLife 创始团队</div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-green-900 font-bold text-xl mb-2">感谢您的留言！</h3>
                <p className="text-green-700">我们将在24小时内与您联系。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                >
                  再次发送
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-green-800 text-sm font-medium mb-2" htmlFor="name">
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
                    className="w-full border border-green-200 rounded-xl px-4 py-3 text-green-900 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-green-800 text-sm font-medium mb-2" htmlFor="email">
                    电子邮件
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-green-200 rounded-xl px-4 py-3 text-green-900 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-green-800 text-sm font-medium mb-2" htmlFor="message">
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
                    className="w-full border border-green-200 rounded-xl px-4 py-3 text-green-900 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
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
  );
};

export default Contact;
