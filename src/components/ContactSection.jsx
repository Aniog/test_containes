import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: '公司地址',
    value: '上海市黄浦区南京东路100号创意大厦18层',
  },
  {
    icon: Phone,
    label: '联系电话',
    value: '+86 021-8888-9999',
  },
  {
    icon: Mail,
    label: '电子邮件',
    value: 'hello@qiuyi-ad.com',
  },
  {
    icon: Clock,
    label: '工作时间',
    value: '周一至周五 09:00 - 18:00',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', company: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0D1220]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">联系我们</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            开启您的<span className="gold-gradient-text">品牌之旅</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            无论您有任何广告需求，我们都期待与您深入交流，共同探索品牌增长的无限可能。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">{item.label}</div>
                    <div className="text-gray-200 text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              );
            })}

            {/* CTA card */}
            <div className="mt-4 bg-gradient-to-br from-gold/10 to-amber/5 border border-gold/20 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">免费品牌诊断</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                填写表单，我们的专业顾问将在24小时内与您联系，为您提供免费的品牌诊断报告。
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card border border-white/10 rounded-2xl p-7 md:p-9">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                  <Send size={24} className="text-gold" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">感谢您的留言！</h3>
                <p className="text-gray-400 text-sm">我们的顾问将在24小时内与您联系。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-gold text-sm hover:underline"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">您的姓名 *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="请输入姓名"
                      className="w-full bg-navy border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">公司名称</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="请输入公司名称"
                      className="w-full bg-navy border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">联系电话 *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="请输入手机号码"
                      className="w-full bg-navy border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">电子邮件</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="请输入邮箱地址"
                      className="w-full bg-navy border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">需求描述 *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="请简要描述您的广告需求或项目背景..."
                    className="w-full bg-navy border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-amber text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  提交咨询
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
