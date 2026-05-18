import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: '联系电话', value: '400-888-6688' },
  { icon: Mail, label: '电子邮箱', value: 'service@jinli-kitchen.com' },
  { icon: MapPin, label: '公司地址', value: '广东省佛山市顺德区厨具产业园A区8号' },
  { icon: Clock, label: '服务时间', value: '周一至周六 9:00 - 18:00' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-warm-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            联系我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">
            有任何问题，随时联系我们
          </h2>
          <p className="text-text-sub text-lg max-w-2xl mx-auto">
            无论是产品咨询、批发合作还是售后服务，我们的专业团队随时为您服务
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="space-y-6 mb-10">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-text-sub text-sm">{c.label}</p>
                      <p className="text-brand-brown font-semibold mt-0.5">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WeChat QR placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-md inline-block">
              <div className="w-28 h-28 bg-warm-card rounded-xl flex items-center justify-center mx-auto mb-3">
                <div className="grid grid-cols-5 gap-0.5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-sm ${Math.random() > 0.5 ? 'bg-brand-brown' : 'bg-transparent'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-text-sub text-xs text-center">扫码添加微信客服</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">感谢您的留言！</h3>
                <p className="text-text-sub">我们将在1个工作日内与您联系，请保持手机畅通。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-orange font-semibold hover:underline"
                >
                  再次留言
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-brand-brown mb-6">在线留言</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-text-main text-sm font-medium mb-1.5">您的姓名</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的姓名"
                      className="w-full border border-warm-card rounded-xl px-4 py-3 text-text-main placeholder-text-sub/60 focus:outline-none focus:border-brand-orange transition bg-warm-bg"
                    />
                  </div>
                  <div>
                    <label className="block text-text-main text-sm font-medium mb-1.5">联系电话</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的手机号码"
                      className="w-full border border-warm-card rounded-xl px-4 py-3 text-text-main placeholder-text-sub/60 focus:outline-none focus:border-brand-orange transition bg-warm-bg"
                    />
                  </div>
                  <div>
                    <label className="block text-text-main text-sm font-medium mb-1.5">留言内容</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="请描述您的需求或问题，我们将尽快回复..."
                      className="w-full border border-warm-card rounded-xl px-4 py-3 text-text-main placeholder-text-sub/60 focus:outline-none focus:border-brand-orange transition bg-warm-bg resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-orange text-white rounded-full py-3 font-semibold hover:bg-orange-600 transition shadow-md"
                  >
                    提交留言
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
