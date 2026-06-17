import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: 'url(/contact-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/80" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">
            联系我们
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
            获取专业采购建议
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            填写下方表单，我们的专业顾问将在 24 小时内与您联系，为您提供定制化的办公桌采购方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold">电话咨询</p>
                <p className="text-slate-400 text-sm mt-1">400-888-8888（工作日 9:00–18:00）</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold">邮件联系</p>
                <p className="text-slate-400 text-sm mt-1">purchase@deskguide.cn</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold">展厅地址</p>
                <p className="text-slate-400 text-sm mt-1">北京市朝阳区建国路 88 号 SOHO 现代城 B 座 12F</p>
              </div>
            </div>

            <div className="mt-8 p-5 bg-blue-600/10 border border-blue-600/20 rounded-2xl">
              <p className="text-blue-300 font-semibold text-sm mb-2">🎁 限时优惠</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                即日起至 2026 年 7 月 31 日，批量采购 10 张以上享 9 折优惠，20 张以上享 8.5 折，并赠送免费安装服务。
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle className="w-14 h-14 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">提交成功！</h3>
                <p className="text-slate-600 text-sm">
                  感谢您的咨询，我们的顾问将在 24 小时内与您联系。
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    您的姓名 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="请输入姓名"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    公司名称
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="请输入公司名称"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    联系电话 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    required
                    placeholder="请输入手机号码"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    采购需求
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    placeholder="请描述您的采购数量、预算范围及特殊需求..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <Send className="w-4 h-4" />
                  提交咨询
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
