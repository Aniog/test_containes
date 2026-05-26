import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    content: '上海市静安区南京西路1788号\n由妮可家居体验中心',
  },
  {
    icon: Phone,
    title: '客服热线',
    content: '400-888-6688\n周一至周日 9:00 - 21:00',
  },
  {
    icon: Mail,
    title: '电子邮件',
    content: 'hello@younico.com\n我们将在24小时内回复',
  },
  {
    icon: Clock,
    title: '营业时间',
    content: '线上商城：全天候\n线下门店：10:00 - 21:00',
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#8B6F47] text-sm font-medium tracking-widest uppercase mb-3">
            联系我们
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            让我们一起，打造您的理想家居
          </h2>
          <p className="text-[#6B5B4E] text-lg max-w-xl mx-auto">
            无论是产品咨询、定制服务还是合作洽谈，我们都期待与您相遇
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#FAF7F2] rounded-2xl p-5 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#8B6F47]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#2C1810] text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-[#6B5B4E] leading-relaxed whitespace-pre-line">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WeChat QR placeholder */}
            <div className="bg-gradient-to-br from-[#8B6F47] to-[#6B5035] rounded-2xl p-6 text-white">
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                关注由妮可官方微信
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                扫码关注，获取最新产品资讯、家居搭配灵感，以及专属会员优惠。
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-xs text-white/60">
                  微信二维码
                </div>
                <div>
                  <div className="font-medium text-sm">@由妮可家居</div>
                  <div className="text-white/70 text-xs mt-0.5">10万+ 家居爱好者</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FAF7F2] rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-[#7A9E7E] mb-4" />
                <h3
                  className="text-2xl font-bold text-[#2C1810] mb-2"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  感谢您的留言！
                </h3>
                <p className="text-[#6B5B4E] mb-6">
                  我们的客服团队将在24小时内与您联系，期待为您服务。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#8B6F47] text-sm font-medium hover:underline"
                >
                  再次留言
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-xl font-bold text-[#2C1810] mb-6"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  给我们留言
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
                      您的姓名 <span className="text-[#8B6F47]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的姓名"
                      className="w-full bg-white border border-[#E8DDD4] rounded-xl px-4 py-3 text-[#2C1810] placeholder-[#C4A882] focus:outline-none focus:border-[#8B6F47] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
                      联系电话 <span className="text-[#8B6F47]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的手机号码"
                      className="w-full bg-white border border-[#E8DDD4] rounded-xl px-4 py-3 text-[#2C1810] placeholder-[#C4A882] focus:outline-none focus:border-[#8B6F47] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
                      留言内容 <span className="text-[#8B6F47]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="请告诉我们您的需求，例如：产品咨询、家居搭配建议、批量采购等..."
                      className="w-full bg-white border border-[#E8DDD4] rounded-xl px-4 py-3 text-[#2C1810] placeholder-[#C4A882] focus:outline-none focus:border-[#8B6F47] transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#8B6F47] text-white rounded-full px-8 py-3.5 font-medium hover:bg-[#6B5035] transition-colors mt-2"
                  >
                    <Send className="w-4 h-4" />
                    发送留言
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
