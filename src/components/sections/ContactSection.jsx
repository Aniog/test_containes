import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    lines: ['广东省东莞市松山湖高新技术产业开发区', '溪流谷工业园 A 栋'],
  },
  {
    icon: Phone,
    title: '联系电话',
    lines: ['+86 769-8888-0000', '+86 138-0000-8888（业务热线）'],
  },
  {
    icon: Mail,
    title: '电子邮箱',
    lines: ['sales@xiliugu-mfg.com', 'info@xiliugu-mfg.com'],
  },
  {
    icon: Clock,
    title: '工作时间',
    lines: ['周一至周五：08:30 — 18:00', '周六：09:00 — 12:00'],
  },
];

const industries = ['航空航天', '汽车制造', '能源装备', '工业机器人', '半导体电子', '医疗器械', '其他'];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F4F6F8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0D2137] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            联系我们
          </h2>
          <div className="w-16 h-1 bg-[#D4820A] mx-auto mb-6" />
          <p className="text-[#4A5568] text-lg max-w-2xl mx-auto leading-relaxed">
            无论您有采购需求、技术咨询还是合作意向，我们的专业团队将在 24 小时内与您取得联系
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex gap-4 bg-white rounded-lg p-5 border border-[#CBD5E0] shadow-sm">
                <div className="w-10 h-10 bg-[#0D2137] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#D4820A]" />
                </div>
                <div>
                  <h4 className="text-[#0D2137] font-semibold text-sm mb-1">{title}</h4>
                  {lines.map((line) => (
                    <p key={line} className="text-[#4A5568] text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-[#0D2137] rounded-lg p-6 text-center flex-1 flex flex-col items-center justify-center min-h-32">
              <MapPin size={32} className="text-[#D4820A] mb-3" />
              <p className="text-white font-semibold text-sm">溪流谷工业园</p>
              <p className="text-gray-400 text-xs mt-1">广东省东莞市松山湖高新区</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-lg border border-[#CBD5E0] shadow-md p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3
                  className="text-[#0D2137] text-xl font-bold mb-2"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  提交成功！
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed max-w-xs">
                  感谢您的咨询，我们的业务团队将在 24 小时内与您联系，请保持电话畅通。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#D4820A] text-sm font-semibold hover:underline"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-[#0D2137] font-bold text-lg mb-6"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  发送询价 / 合作咨询
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#0D2137] text-sm font-medium mb-1">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="您的姓名"
                        className="w-full border border-[#CBD5E0] rounded px-3 py-2.5 text-[#1C2B3A] text-sm focus:outline-none focus:border-[#D4820A] focus:ring-1 focus:ring-[#D4820A] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0D2137] text-sm font-medium mb-1">
                        公司名称 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="所在公司"
                        className="w-full border border-[#CBD5E0] rounded px-3 py-2.5 text-[#1C2B3A] text-sm focus:outline-none focus:border-[#D4820A] focus:ring-1 focus:ring-[#D4820A] transition"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#0D2137] text-sm font-medium mb-1">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="手机 / 座机"
                        className="w-full border border-[#CBD5E0] rounded px-3 py-2.5 text-[#1C2B3A] text-sm focus:outline-none focus:border-[#D4820A] focus:ring-1 focus:ring-[#D4820A] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[#0D2137] text-sm font-medium mb-1">电子邮箱</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-[#CBD5E0] rounded px-3 py-2.5 text-[#1C2B3A] text-sm focus:outline-none focus:border-[#D4820A] focus:ring-1 focus:ring-[#D4820A] transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#0D2137] text-sm font-medium mb-1">所属行业</label>
                    <select
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      className="w-full border border-[#CBD5E0] rounded px-3 py-2.5 text-[#1C2B3A] text-sm focus:outline-none focus:border-[#D4820A] focus:ring-1 focus:ring-[#D4820A] transition bg-white"
                    >
                      <option value="">请选择行业</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#0D2137] text-sm font-medium mb-1">
                      需求描述 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="请描述您的产品需求、数量、材料要求或其他技术参数，我们将为您提供专业报价..."
                      className="w-full border border-[#CBD5E0] rounded px-3 py-2.5 text-[#1C2B3A] text-sm focus:outline-none focus:border-[#D4820A] focus:ring-1 focus:ring-[#D4820A] transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#D4820A] text-white py-3 rounded font-semibold hover:bg-[#B8700A] transition flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    提交询价
                  </button>
                  <p className="text-[#4A5568] text-xs text-center">
                    提交即表示您同意我们的隐私政策，您的信息将被严格保密
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
