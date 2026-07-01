import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-100 text-pink-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            联系我们
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">随时与我们联系</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            无论您有任何问题或建议，我们都期待听到您的声音
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">联系方式</h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Mail, label: '邮箱', value: 'hello@blossom.com' },
                  { icon: Phone, label: '电话', value: '+86 400-888-8888' },
                  { icon: MapPin, label: '地址', value: '上海市浦东新区陆家嘴金融中心' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                      <p className="text-gray-700 font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-pink-500 rounded-3xl p-8 text-white">
              <p className="text-lg font-medium leading-relaxed mb-4">
                "Blossom 的产品彻底改变了我的护肤习惯，皮肤变得越来越好，真的太喜欢了！"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-lg">
                  🌸
                </div>
                <div>
                  <p className="font-semibold">小雨</p>
                  <p className="text-pink-200 text-sm">忠实用户 · 上海</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-pink-100 rounded-3xl p-8 shadow-lg shadow-pink-50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-3xl">
                  🌸
                </div>
                <h3 className="text-2xl font-bold text-gray-800">感谢您的留言！</h3>
                <p className="text-gray-500">我们会在24小时内回复您，请耐心等待。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-3 font-semibold transition-all duration-200"
                >
                  再次留言
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">发送消息</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">您的姓名</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的姓名"
                    className="w-full border border-pink-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">电子邮箱</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的邮箱"
                    className="w-full border border-pink-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">留言内容</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="请输入您的留言..."
                    className="w-full border border-pink-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-pink-200 transition-all duration-200 hover:scale-105"
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
}
