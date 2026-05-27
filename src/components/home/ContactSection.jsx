import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: '公司地址',
    value: '广东省广州市天河区科技园威尔德大厦18层',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
  },
  {
    icon: Phone,
    label: '客服热线',
    value: '400-888-9999（7×24小时）',
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/10',
  },
  {
    icon: Mail,
    label: '商务邮箱',
    value: 'business@weide-care.com',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Clock,
    label: '工作时间',
    value: '周一至周五 09:00 – 18:00',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-primary/10 text-brand-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            联系我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            期待与您携手合作
          </h2>
          <p className="text-neutral-600 text-lg max-w-xl mx-auto leading-relaxed">
            无论是产品咨询、经销合作还是定制化需求，我们的专业团队随时为您提供支持与解答。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 font-medium mb-1">{item.label}</div>
                      <div className="text-neutral-800 text-sm font-medium leading-snug">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 h-56 bg-neutral-100 flex items-center justify-center">
              <div className="text-center text-neutral-400">
                <MapPin className="w-10 h-10 mx-auto mb-2 text-neutral-300" />
                <p className="text-sm">广东省广州市天河区科技园</p>
                <p className="text-xs mt-1">威尔德大厦18层</p>
              </div>
            </div>

            {/* Cooperation types */}
            <div className="mt-6 p-5 bg-brand-primary/5 rounded-2xl border border-brand-primary/10">
              <h4 className="text-brand-primary font-semibold mb-3 text-sm">合作方式</h4>
              <div className="flex flex-wrap gap-2">
                {['区域经销商', '电商平台合作', '企业采购', '品牌联名', 'OEM/ODM定制', '海外出口'].map((type) => (
                  <span key={type} className="bg-white border border-brand-primary/20 text-brand-primary text-xs font-medium px-3 py-1.5 rounded-full">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-brand-accent mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">提交成功！</h3>
                <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                  感谢您的咨询，我们的专业顾问将在1个工作日内与您联系，请保持电话畅通。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', message: '' }); }}
                  className="mt-6 text-brand-primary text-sm font-medium hover:underline"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-neutral-900 mb-6">在线咨询</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="请输入您的姓名"
                        className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">公司名称</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="请输入公司名称"
                        className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary bg-white transition"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="请输入联系电话"
                        className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">电子邮箱</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="请输入电子邮箱"
                        className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary bg-white transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      咨询内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="请描述您的需求或问题，我们将为您提供专业解答..."
                      className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary bg-white transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold py-3.5 rounded-full hover:bg-brand-primary-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? '提交中...' : '提交咨询'}
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
