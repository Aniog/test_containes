import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#f5ede0] py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#8b5e3c] text-sm font-medium tracking-[0.25em] uppercase mb-3">
            联系我们
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d2314] mb-5">
            开启您的定制之旅
          </h2>
          <p className="text-[#5c3d2e] text-lg max-w-xl mx-auto">
            无论是选购成品还是定制专属家具，我们的顾问团队随时为您服务
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#3d2314] mb-6">联系方式</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: '地址', value: '江苏省苏州市姑苏区木渎镇工匠街88号' },
                  { icon: Phone, label: '电话', value: '400-888-8888' },
                  { icon: Mail, label: '邮箱', value: 'hello@muyu-furniture.com' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#8b5e3c]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#8b5e3c]" />
                    </div>
                    <div>
                      <p className="text-[#8b5e3c] text-xs font-medium uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-[#3d2314] font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#8b5e3c] rounded-2xl p-8 text-[#fefcf8]">
              <h4 className="font-serif text-xl font-bold mb-3">工坊参观</h4>
              <p className="text-[#e8d5b7] leading-relaxed mb-4">
                欢迎预约参观我们的工坊，亲眼见证每一件家具的诞生过程，感受木材的温度与工匠的匠心。
              </p>
              <p className="text-[#c49a6c] text-sm font-medium">
                周一至周六 09:00 — 18:00
              </p>
            </div>
          </div>

          <div className="bg-[#fefcf8] rounded-2xl p-8 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#4a7c59]/10 flex items-center justify-center mb-5">
                  <Send className="w-7 h-7 text-[#4a7c59]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3d2314] mb-3">感谢您的留言！</h3>
                <p className="text-[#5c3d2e]">我们的顾问将在24小时内与您联系。</p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-[#3d2314] mb-6">发送留言</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[#5c3d2e] text-sm font-medium mb-2">您的姓名</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的姓名"
                      className="w-full border border-[#e8d5b7] rounded-xl px-4 py-3 text-[#3d2314] placeholder-[#c49a6c]/60 bg-[#fdf8f3] focus:outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#8b5e3c]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5c3d2e] text-sm font-medium mb-2">联系电话</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的手机号码"
                      className="w-full border border-[#e8d5b7] rounded-xl px-4 py-3 text-[#3d2314] placeholder-[#c49a6c]/60 bg-[#fdf8f3] focus:outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#8b5e3c]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5c3d2e] text-sm font-medium mb-2">留言内容</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="请描述您的需求，例如：房间尺寸、风格偏好、预算范围等"
                      className="w-full border border-[#e8d5b7] rounded-xl px-4 py-3 text-[#3d2314] placeholder-[#c49a6c]/60 bg-[#fdf8f3] focus:outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#8b5e3c]/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#5c3d2e] text-[#fefcf8] rounded-full py-3.5 font-semibold hover:bg-[#3d2314] transition-colors duration-200 shadow-md flex items-center justify-center gap-2"
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
};

export default Contact;
