import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-500 text-sm font-bold px-4 py-2 rounded-full mb-6">
              📞 联系我们
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              专属顾问，<span className="text-orange-500">一对一服务</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              不知道选哪款玩具？告诉我们孩子的年龄和喜好，我们的专业顾问将为您量身推荐最适合的产品！
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '📱', label: '客服热线', value: '400-888-8888（9:00-21:00）' },
                { icon: '💬', label: '微信客服', value: 'gaogaole_toys' },
                { icon: '📧', label: '邮箱', value: 'service@gaogaole.com' },
                { icon: '📍', label: '总部地址', value: '广东省广州市天河区玩具产业园A栋' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">{item.label}</div>
                    <div className="text-gray-800 font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Urgency */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl p-5 text-white">
              <div className="font-black text-lg mb-1">🎁 现在咨询，立享专属优惠！</div>
              <div className="text-sm text-white text-opacity-90">
                留下联系方式，专属顾问将在30分钟内与您联系，并赠送精美玩具礼品一份！
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">提交成功！</h3>
                <p className="text-gray-500 mb-6">
                  感谢您的留言！我们的专属顾问将在30分钟内联系您，请保持手机畅通。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-colors"
                >
                  再次留言
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-gray-900 mb-6">免费获取专属推荐方案</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      您的姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的姓名"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的手机号码"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      孩子年龄 / 需求说明
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="例如：孩子5岁，喜欢拼图，想买一套适合的礼物..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-black py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-orange-300 hover:-translate-y-0.5"
                  >
                    🎁 免费获取专属方案
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    您的信息将严格保密，仅用于为您提供服务
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
