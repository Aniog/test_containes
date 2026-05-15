import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: '公司地址',
    value: '中国·湖南省长沙市高新技术产业开发区麓谷大道88号',
  },
  {
    icon: Phone,
    label: '销售热线',
    value: '+86 400-888-XXXX',
  },
  {
    icon: Mail,
    label: '商务邮箱',
    value: 'sales@wensida-power.com',
  },
  {
    icon: Clock,
    label: '工作时间',
    value: '周一至周五 08:30 – 17:30（节假日除外）',
  },
];

const subjects = ['产品咨询', '技术支持', '项目合作', '售后服务', '其他'];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-[#0F1923]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block text-[#2196F3] text-xs font-semibold tracking-widest uppercase mb-3">
            CONTACT US
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">联系我们</h2>
          <div className="w-16 h-1 bg-[#2196F3] rounded-full mx-auto mb-6" />
          <p className="text-[#8BA3C1] text-lg max-w-2xl mx-auto">
            欢迎与我们的专业团队取得联系，获取定制化电力装备解决方案
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 p-5 bg-[#162032] border border-[#1E3A5F] rounded-xl">
                <div className="bg-[#1565C0]/20 p-3 rounded-lg flex-shrink-0 h-fit">
                  <Icon className="w-5 h-5 text-[#2196F3]" />
                </div>
                <div>
                  <div className="text-[#8BA3C1] text-xs mb-1">{label}</div>
                  <div className="text-[#E8EDF5] text-sm font-medium">{value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="flex-1 min-h-[160px] bg-[#162032] border border-[#1E3A5F] rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <MapPin className="w-8 h-8 text-[#2196F3]" />
                <span className="text-[#8BA3C1] text-sm">长沙高新技术产业开发区</span>
              </div>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(33,150,243,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(33,150,243,0.4) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-[#162032] border border-[#1E3A5F] rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="bg-[#2196F3]/15 p-5 rounded-full mb-5">
                  <CheckCircle className="w-12 h-12 text-[#2196F3]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">提交成功！</h3>
                <p className="text-[#8BA3C1] leading-relaxed max-w-sm">
                  感谢您的咨询，我们的专业顾问将在1个工作日内与您联系，请保持电话畅通。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 border border-[#2196F3]/50 text-[#2196F3] hover:bg-[#2196F3] hover:text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg mb-2">在线咨询</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#8BA3C1] text-xs mb-1.5 block">姓名 *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="您的姓名"
                      className="w-full bg-[#0A1628] border border-[#1E3A5F] text-[#E8EDF5] placeholder-[#4A6080] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2196F3] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#8BA3C1] text-xs mb-1.5 block">公司名称</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      placeholder="所在单位"
                      className="w-full bg-[#0A1628] border border-[#1E3A5F] text-[#E8EDF5] placeholder-[#4A6080] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2196F3] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#8BA3C1] text-xs mb-1.5 block">联系电话 *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      required
                      placeholder="手机或座机"
                      className="w-full bg-[#0A1628] border border-[#1E3A5F] text-[#E8EDF5] placeholder-[#4A6080] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2196F3] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#8BA3C1] text-xs mb-1.5 block">电子邮箱</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-[#0A1628] border border-[#1E3A5F] text-[#E8EDF5] placeholder-[#4A6080] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2196F3] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#8BA3C1] text-xs mb-1.5 block">咨询类型</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    className="w-full bg-[#0A1628] border border-[#1E3A5F] text-[#E8EDF5] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2196F3] transition-colors"
                  >
                    <option value="" className="bg-[#0A1628]">请选择咨询类型</option>
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-[#0A1628]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[#8BA3C1] text-xs mb-1.5 block">需求描述 *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={4}
                    placeholder="请简要描述您的项目需求或问题..."
                    className="w-full bg-[#0A1628] border border-[#1E3A5F] text-[#E8EDF5] placeholder-[#4A6080] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2196F3] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-[#2196F3] hover:bg-[#1565C0] disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 mt-1"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? '提交中...' : '提交咨询'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
