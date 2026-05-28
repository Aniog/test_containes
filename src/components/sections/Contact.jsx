import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: '公司地址',
    value: '江苏省苏州市工业园区星湖街328号威达智造产业园',
  },
  {
    icon: Phone,
    label: '销售热线',
    value: '+86 (0512) 6888-8888',
  },
  {
    icon: Mail,
    label: '商务邮箱',
    value: 'business@weida-machinery.com',
  },
  {
    icon: Clock,
    label: '服务时间',
    value: '周一至周五 08:30 – 17:30（节假日除外）',
  },
];

export default function Contact() {
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
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#E87722] text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            联系我们
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: 'Noto Serif SC, serif' }}>
            开启合作，共创价值
          </h2>
          <div className="w-16 h-1 bg-[#E87722] mx-auto mb-6" />
          <p className="text-[#4A5568] max-w-2xl mx-auto text-base leading-relaxed" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            无论您有采购需求、技术咨询还是合作意向，我们的专业团队将在24小时内为您提供专属响应。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0A1628] p-8">
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Noto Serif SC, serif' }}>
                联系方式
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#E87722]/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[#E87722]" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs mb-1" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>{info.label}</div>
                        <div className="text-white text-sm font-medium" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div className="border border-[#E2E8F0] p-6">
              <h4 className="text-sm font-bold text-[#0A1628] mb-4" style={{ fontFamily: 'Noto Serif SC, serif' }}>
                资质认证
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'ISO 9001:2015',
                  'IATF 16949',
                  'AS9100D',
                  '国家高新技术企业',
                ].map((cert) => (
                  <div
                    key={cert}
                    className="bg-[#F8F9FB] border border-[#E2E8F0] px-3 py-2 text-center"
                  >
                    <span className="text-[#1A3A6B] text-xs font-semibold" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-[#E2E8F0]">
                <div className="w-16 h-16 bg-[#E87722]/10 flex items-center justify-center mb-6">
                  <Send size={28} className="text-[#E87722]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-3" style={{ fontFamily: 'Noto Serif SC, serif' }}>
                  感谢您的咨询
                </h3>
                <p className="text-[#4A5568] text-base max-w-sm" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                  我们已收到您的信息，专属客户经理将在24小时内与您取得联系。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A202C] mb-2" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                      姓名 <span className="text-[#E87722]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="请输入您的姓名"
                      className="w-full border border-[#E2E8F0] px-4 py-3 text-[#1A202C] text-sm focus:outline-none focus:border-[#1A3A6B] transition-colors bg-white"
                      style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A202C] mb-2" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                      公司名称 <span className="text-[#E87722]">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="请输入公司名称"
                      className="w-full border border-[#E2E8F0] px-4 py-3 text-[#1A202C] text-sm focus:outline-none focus:border-[#1A3A6B] transition-colors bg-white"
                      style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A202C] mb-2" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                      联系电话 <span className="text-[#E87722]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="请输入联系电话"
                      className="w-full border border-[#E2E8F0] px-4 py-3 text-[#1A202C] text-sm focus:outline-none focus:border-[#1A3A6B] transition-colors bg-white"
                      style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A202C] mb-2" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="请输入电子邮箱"
                      className="w-full border border-[#E2E8F0] px-4 py-3 text-[#1A202C] text-sm focus:outline-none focus:border-[#1A3A6B] transition-colors bg-white"
                      style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A202C] mb-2" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                    所属行业
                  </label>
                  <select
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className="w-full border border-[#E2E8F0] px-4 py-3 text-[#1A202C] text-sm focus:outline-none focus:border-[#1A3A6B] transition-colors bg-white"
                    style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                  >
                    <option value="">请选择所属行业</option>
                    <option value="aerospace">航空航天</option>
                    <option value="auto">汽车制造</option>
                    <option value="energy">能源装备</option>
                    <option value="rail">轨道交通</option>
                    <option value="engineering">工程机械</option>
                    <option value="medical">医疗器械</option>
                    <option value="other">其他行业</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A202C] mb-2" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                    需求描述 <span className="text-[#E87722]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="请简要描述您的需求，包括产品类型、数量、精度要求、交期等信息，以便我们为您提供更精准的方案。"
                    className="w-full border border-[#E2E8F0] px-4 py-3 text-[#1A202C] text-sm focus:outline-none focus:border-[#1A3A6B] transition-colors bg-white resize-none"
                    style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E87722] text-white py-4 font-semibold text-base hover:bg-[#F5A623] transition-colors duration-200 flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                >
                  <Send size={18} />
                  提交咨询
                </button>
                <p className="text-[#718096] text-xs text-center" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                  提交即表示您同意我们的隐私政策，您的信息将被严格保密。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
