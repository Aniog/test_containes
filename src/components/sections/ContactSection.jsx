import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: '公司地址', value: '上海市黄浦区南京东路100号创意大厦18层' },
  { icon: Phone, label: '联系电话', value: '400-888-9999' },
  { icon: Mail, label: '电子邮箱', value: 'hello@qiuyi-ad.com' },
  { icon: Clock, label: '工作时间', value: '周一至周五 9:00 - 18:00' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#F5A623] font-semibold text-sm uppercase tracking-widest">联系我们</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">开启您的品牌之旅</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            无论您有任何广告需求，我们都期待与您深入交流
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">联系方式</h3>
            <div className="space-y-5 mb-10">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8431A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#E8431A]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">{label}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-48 bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="text-center text-white/30">
                <MapPin size={32} className="mx-auto mb-2" />
                <p className="text-sm">上海市黄浦区</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E8431A]/20 flex items-center justify-center mb-4">
                  <Send size={28} className="text-[#E8431A]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">感谢您的咨询！</h3>
                <p className="text-white/60 text-sm">我们的专业顾问将在24小时内与您联系，请保持电话畅通。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 rounded-full border border-[#E8431A] text-[#E8431A] text-sm hover:bg-[#E8431A] hover:text-white transition-colors"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-6">免费咨询申请</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">您的姓名 *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="请输入姓名"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#E8431A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">公司名称</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="请输入公司名称"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#E8431A] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">联系电话 *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="请输入手机号码"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#E8431A] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">需求类型</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#E8431A] transition-colors"
                  >
                    <option value="" className="bg-[#1A1A2E]">请选择服务类型</option>
                    <option value="brand" className="bg-[#1A1A2E]">品牌视觉设计</option>
                    <option value="marketing" className="bg-[#1A1A2E]">整合营销传播</option>
                    <option value="digital" className="bg-[#1A1A2E]">数字广告投放</option>
                    <option value="video" className="bg-[#1A1A2E]">影视广告制作</option>
                    <option value="social" className="bg-[#1A1A2E]">社交媒体运营</option>
                    <option value="other" className="bg-[#1A1A2E]">其他需求</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">需求描述</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="请简要描述您的广告需求..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#E8431A] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#E8431A] text-white font-semibold hover:bg-[#F5A623] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  提交咨询申请
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
