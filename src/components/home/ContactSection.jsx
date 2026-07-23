import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            联系我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            预约听力检查
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            填写以下表单，我们的专业听力师将在24小时内与您联系，为您安排免费听力评估。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl p-8 text-white mb-6">
              <h3 className="text-xl font-bold mb-6">联系方式</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">电话咨询</div>
                    <div className="text-cyan-100 text-sm mt-0.5">400-888-1234</div>
                    <div className="text-cyan-200/70 text-xs mt-0.5">周一至周六 9:00-18:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">电子邮件</div>
                    <div className="text-cyan-100 text-sm mt-0.5">hearing@health.com</div>
                    <div className="text-cyan-200/70 text-xs mt-0.5">24小时内回复</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">诊所地址</div>
                    <div className="text-cyan-100 text-sm mt-0.5">北京市朝阳区健康路88号</div>
                    <div className="text-cyan-200/70 text-xs mt-0.5">听力健康中心大楼3层</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service highlights */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h4 className="font-semibold text-slate-800 mb-4">我们提供的服务</h4>
              <ul className="space-y-2">
                {[
                  '免费基础听力筛查',
                  '专业纯音测听检查',
                  '助听器选配与调试',
                  '儿童听力评估',
                  '职业性听力损失评估',
                  '听力康复训练指导',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">预约成功！</h3>
                <p className="text-slate-600 mb-6">
                  感谢您的预约，我们的专业听力师将在24小时内与您联系。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-semibold px-6 py-2.5 rounded-xl transition-all"
                >
                  再次预约
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="请输入您的姓名"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    电子邮件 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="请输入您的手机号码"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    咨询内容
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    placeholder="请描述您的听力问题或咨询需求..."
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60"
                >
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? '提交中...' : '提交预约'}
                </button>
                <p className="text-xs text-slate-400 text-center">
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
