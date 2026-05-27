import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#1E5FA8] text-xs font-semibold uppercase tracking-widest mb-4">
            联系我们
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A2332] mb-4">
            开启合作，共创精密未来
          </h2>
          <div className="w-12 h-1 bg-[#C8922A] mx-auto mb-6" />
          <p className="text-[#8A9BB0] text-lg max-w-2xl mx-auto">
            无论您有定制加工需求、技术咨询还是合作意向，
            我们的专业团队将在 24 小时内为您提供专属响应。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-[#1A2332] font-bold text-2xl mb-8">联系方式</h3>
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: MapPin,
                  label: '公司地址',
                  value: '中国·广东省深圳市宝安区智造产业园 A 栋 8 楼',
                },
                {
                  icon: Phone,
                  label: '销售热线',
                  value: '+86 755-8888-9999',
                },
                {
                  icon: Mail,
                  label: '商务邮箱',
                  value: 'sales@luokebaidao.com',
                },
                {
                  icon: Clock,
                  label: '服务时间',
                  value: '周一至周五 08:30 – 18:00（UTC+8）',
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1E5FA8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#1E5FA8]" />
                  </div>
                  <div>
                    <div className="text-[#8A9BB0] text-xs font-semibold uppercase tracking-widest mb-1">{label}</div>
                    <div className="text-[#1A2332] text-base font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="bg-[#0A1628] rounded-2xl p-8">
              <div className="text-[#2E9CDB] text-sm font-semibold uppercase tracking-widest mb-3">快速报价</div>
              <p className="text-white text-base leading-relaxed mb-5">
                提供图纸或技术规格，我们将在 24 小时内为您出具详细报价单及工艺方案。
              </p>
              <div className="text-[#C8922A] font-bold text-lg">+86 755-8888-9999</div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-[#F4F6F9] rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-[#1E5FA8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-[#1E5FA8]" />
                </div>
                <h3 className="text-[#1A2332] font-bold text-2xl mb-3">感谢您的留言</h3>
                <p className="text-[#8A9BB0] text-base">
                  我们已收到您的需求，专属客户经理将在 24 小时内与您联系。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#1A2332] text-sm font-semibold mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="您的姓名"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1A2332] text-sm focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1A2332] text-sm font-semibold mb-2">公司名称</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="所在公司"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1A2332] text-sm focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#1A2332] text-sm font-semibold mb-2">
                      电子邮箱 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1A2332] text-sm focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1A2332] text-sm font-semibold mb-2">联系电话</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+86 138 0000 0000"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1A2332] text-sm focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#1A2332] text-sm font-semibold mb-2">
                    需求描述 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="请描述您的加工需求、材料、数量、精度要求等信息，以便我们为您提供精准报价..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1A2332] text-sm focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1E5FA8] hover:bg-[#2E9CDB] text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-4 h-4" />
                  提交需求
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
