import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: '办公地址',
    lines: ['北京市朝阳区建国路88号', 'SOHO现代城A座2001室'],
  },
  {
    icon: Phone,
    title: '联系电话',
    lines: ['010-8888-9999', '400-888-0000（免费咨询热线）'],
  },
  {
    icon: Mail,
    title: '电子邮件',
    lines: ['info@mingyuan-law.com', 'consult@mingyuan-law.com'],
  },
  {
    icon: Clock,
    title: '办公时间',
    lines: ['周一至周五 9:00 - 18:00', '周六 9:00 - 12:00（预约制）'],
  },
];

const services = [
  '商事诉讼', '公司法务', '刑事辩护',
  '知识产权', '婚姻家事', '涉外法律', '其他',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">联系我们</p>
          <h2 className="font-serif font-bold text-navy text-3xl md:text-4xl lg:text-5xl mb-5">
            预约免费法律咨询
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            无论您面临何种法律问题，我们的专业律师团队随时准备为您提供帮助
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">{info.title}</p>
                    {info.lines.map((line) => (
                      <p key={line} className="text-gray-600 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="mt-6 rounded-lg overflow-hidden h-48 bg-navy/10 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-gray-500 text-sm">北京市朝阳区建国路88号</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-navy text-2xl mb-3">提交成功！</h3>
                  <p className="text-gray-600 leading-relaxed">
                    感谢您的咨询预约，我们的律师将在1个工作日内与您联系。
                    <br />如有紧急事项，请直接拨打我们的咨询热线。
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }); }}
                    className="mt-6 text-gold font-semibold hover:text-gold-light transition-colors"
                  >
                    再次提交
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        placeholder="请输入您的姓名"
                        className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        required
                        placeholder="请输入您的手机号"
                        className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">电子邮件</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="请输入您的邮箱地址"
                      className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      咨询业务 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      required
                      className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition bg-white"
                    >
                      <option value="">请选择咨询业务类型</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      案情描述 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={5}
                      placeholder="请简要描述您的法律问题或需求，我们将为您安排最合适的律师..."
                      className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-navy text-white py-4 font-semibold rounded hover:bg-navy/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        提交咨询预约
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    提交即表示您同意我们的隐私政策，您的信息将严格保密
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
