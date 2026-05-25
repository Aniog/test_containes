import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5 text-[#8B6F47]" />,
    label: '客服热线',
    value: '400-888-6688',
    sub: '周一至周日 9:00 - 21:00',
  },
  {
    icon: <Mail className="w-5 h-5 text-[#8B6F47]" />,
    label: '电子邮箱',
    value: 'service@weichun.com',
    sub: '24小时内回复',
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#8B6F47]" />,
    label: '公司地址',
    value: '上海市浦东新区张江高科技园区',
    sub: '维纯家居大厦 8楼',
  },
  {
    icon: <Clock className="w-5 h-5 text-[#8B6F47]" />,
    label: '营业时间',
    value: '周一至周日',
    sub: '9:00 - 21:00',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C4714A] text-sm font-medium tracking-widest uppercase mb-3">联系我们</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C1810] mb-4">
            让我们一起打造您的温馨家园
          </h2>
          <p className="text-[#6B5B4E] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            无论是产品咨询、定制需求还是售后服务，我们的专业团队随时为您提供贴心帮助。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="bg-[#FDFAF5] rounded-2xl p-5 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#F5F0E8] rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#6B5B4E] mb-1">{item.label}</div>
                    <div className="font-semibold text-[#2C1810] text-sm">{item.value}</div>
                    <div className="text-xs text-[#6B5B4E] mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WeChat QR Placeholder */}
            <div className="bg-[#F5F0E8] rounded-2xl p-6 flex items-center gap-5">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-4xl shadow-sm flex-shrink-0">
                📱
              </div>
              <div>
                <div className="font-serif font-semibold text-[#2C1810] mb-1">微信公众号</div>
                <div className="text-[#6B5B4E] text-sm leading-relaxed">
                  扫码关注「维纯家居」公众号，获取最新产品资讯、家居搭配灵感与专属优惠。
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FDFAF5] rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-serif font-bold text-[#2C1810] mb-2">感谢您的留言！</h3>
                <p className="text-[#6B5B4E] text-sm leading-relaxed">
                  我们已收到您的信息，客服团队将在24小时内与您联系。
                  期待为您打造更温馨的家居生活！
                </p>
                <button
                  className="mt-6 bg-[#8B6F47] text-white rounded-full px-8 py-2.5 text-sm font-medium hover:bg-[#C4714A] transition-colors border-none cursor-pointer"
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '' }); }}
                >
                  再次留言
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-serif font-semibold text-[#2C1810] mb-6">在线留言</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-1.5">您的姓名 *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="请输入您的姓名"
                        className="w-full border border-[#E8DDD0] rounded-xl px-4 py-2.5 text-sm text-[#2C1810] bg-white focus:outline-none focus:border-[#8B6F47] transition-colors placeholder:text-[#B0A090]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-1.5">联系电话 *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="请输入您的电话"
                        className="w-full border border-[#E8DDD0] rounded-xl px-4 py-2.5 text-sm text-[#2C1810] bg-white focus:outline-none focus:border-[#8B6F47] transition-colors placeholder:text-[#B0A090]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-1.5">电子邮箱</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="请输入您的邮箱（选填）"
                      className="w-full border border-[#E8DDD0] rounded-xl px-4 py-2.5 text-sm text-[#2C1810] bg-white focus:outline-none focus:border-[#8B6F47] transition-colors placeholder:text-[#B0A090]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-1.5">留言内容 *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="请描述您的需求或问题，我们将尽快为您解答..."
                      className="w-full border border-[#E8DDD0] rounded-xl px-4 py-2.5 text-sm text-[#2C1810] bg-white focus:outline-none focus:border-[#8B6F47] transition-colors resize-none placeholder:text-[#B0A090]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#8B6F47] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#C4714A] transition-colors border-none cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
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
