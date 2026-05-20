import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    content: '江苏省苏州市工业园区星湖街328号梅露可大厦',
  },
  {
    icon: Phone,
    title: '客服热线',
    content: '400-888-6688（周一至周日 9:00-21:00）',
  },
  {
    icon: Mail,
    title: '电子邮件',
    content: 'service@meiruke.com',
  },
  {
    icon: Clock,
    title: '营业时间',
    content: '周一至周日 9:00 - 21:00（节假日不休）',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-brand-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-sans font-medium tracking-widest uppercase text-brand-gold mb-3">
            联系我们
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-4">
            让我们一起打造您的理想家居
          </h2>
          <p className="font-sans text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            无论您有任何问题或需求，我们的专业顾问团队随时为您服务，
            为您提供最贴心的家居解决方案。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-white text-2xl mb-8">联系方式</h3>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand-brown/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-white/60 text-xs tracking-wider uppercase mb-1">{item.title}</p>
                      <p className="font-sans text-white text-sm leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social / WeChat */}
            <div className="bg-brand-brown/20 rounded-2xl p-6 border border-brand-brown/30">
              <p className="font-sans font-medium text-brand-gold text-sm mb-3">关注我们</p>
              <p className="font-sans text-white/70 text-sm leading-relaxed mb-4">
                关注梅露可官方微信公众号，获取最新产品资讯、家居搭配灵感与专属优惠活动。
              </p>
              <div className="flex gap-3">
                {['微信公众号', '微博', '小红书', '抖音'].map((platform) => (
                  <span
                    key={platform}
                    className="bg-brand-brown/30 text-white/80 text-xs font-sans px-3 py-1.5 rounded-full border border-brand-brown/40 hover:bg-brand-brown/50 cursor-pointer transition-colors"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-beige rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mb-5">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4 className="font-serif font-bold text-brand-dark text-2xl mb-3">感谢您的留言！</h4>
                <p className="font-sans text-brand-muted text-base leading-relaxed mb-6">
                  我们已收到您的信息，专属顾问将在24小时内与您联系，请保持手机畅通。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-brown text-white px-8 py-3 rounded-full font-sans font-medium hover:bg-brand-dark transition-colors"
                >
                  再次留言
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif font-semibold text-brand-dark text-2xl mb-6">在线留言</h3>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-brand-muted text-xs font-medium mb-1.5 tracking-wide">
                        您的姓名 <span className="text-brand-brown">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        placeholder="请输入姓名"
                        className="w-full bg-white border border-brand-beige rounded-xl px-4 py-3 font-sans text-brand-dark text-sm placeholder-brand-muted/50 focus:outline-none focus:border-brand-brown transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-brand-muted text-xs font-medium mb-1.5 tracking-wide">
                        联系电话 <span className="text-brand-brown">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        required
                        placeholder="请输入手机号"
                        className="w-full bg-white border border-brand-beige rounded-xl px-4 py-3 font-sans text-brand-dark text-sm placeholder-brand-muted/50 focus:outline-none focus:border-brand-brown transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-sans text-brand-muted text-xs font-medium mb-1.5 tracking-wide">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="请输入邮箱地址"
                      className="w-full bg-white border border-brand-beige rounded-xl px-4 py-3 font-sans text-brand-dark text-sm placeholder-brand-muted/50 focus:outline-none focus:border-brand-brown transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-brand-muted text-xs font-medium mb-1.5 tracking-wide">
                      留言内容 <span className="text-brand-brown">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={4}
                      placeholder="请描述您的需求或问题，我们将为您提供专属解决方案..."
                      className="w-full bg-white border border-brand-beige rounded-xl px-4 py-3 font-sans text-brand-dark text-sm placeholder-brand-muted/50 focus:outline-none focus:border-brand-brown transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-brown text-white py-3.5 rounded-xl font-sans font-semibold text-base hover:bg-brand-dark transition-colors"
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
