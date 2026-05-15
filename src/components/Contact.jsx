import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: '销售热线',
    value: '400-888-6688',
    sub: '周一至周五 9:00-18:00',
  },
  {
    icon: Mail,
    label: '邮箱',
    value: 'sales@huakang-med.com',
    sub: '24小时内回复',
  },
  {
    icon: MapPin,
    label: '总部地址',
    value: '广东省深圳市南山区科技园',
    sub: '华康医疗科技大厦 18楼',
  },
  {
    icon: Clock,
    label: '服务时间',
    value: '7×24小时技术支持',
    sub: '全国200+服务网点',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', company: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            联系我们
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            期待与您合作
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            无论是产品咨询、技术支持还是合作洽谈，我们的专业团队随时为您服务
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium mb-1">{label}</p>
                  <p className="text-slate-800 font-semibold text-sm">{value}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-7 text-white">
              <h3 className="text-xl font-bold mb-2">申请免费产品演示</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                我们的专业工程师将为您提供一对一的产品演示服务，帮助您了解产品功能与适用场景。
              </p>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-300" />
                <span>免费上门演示</span>
                <CheckCircle2 className="w-4 h-4 text-blue-300 ml-3" />
                <span>专业方案定制</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">提交成功！</h3>
                <p className="text-slate-500 text-sm">感谢您的咨询，我们的销售顾问将在24小时内与您联系。</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', message: '' }); }}
                  className="mt-6 text-blue-600 hover:text-blue-700 text-sm font-semibold"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-900 mb-6">发送咨询</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">姓名 *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="请输入您的姓名"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">单位名称</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="医院/机构名称"
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">联系电话 *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="请输入您的手机号码"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">咨询内容</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="请描述您的需求或问题..."
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 shadow-md shadow-blue-200"
                  >
                    <Send className="w-4 h-4" />
                    提交咨询
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
