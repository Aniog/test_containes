import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    lines: ['中国广东省深圳市南山区', '科技园北区星闪医疗大厦'],
  },
  {
    icon: Phone,
    title: '联系电话',
    lines: ['+86 400-888-9999', '+86 0755-8888-9999'],
  },
  {
    icon: Mail,
    title: '电子邮件',
    lines: ['sales@xingshan-medical.com', 'support@xingshan-medical.com'],
  },
  {
    icon: Clock,
    title: '工作时间',
    lines: ['周一至周五 08:30 - 18:00', '售后服务 7×24小时'],
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
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
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">联系我们</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            期待与您合作
          </h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            无论您有产品咨询、采购需求还是技术支持，我们的专业团队随时为您提供帮助。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm mb-1">{title}</div>
                  {lines.map((line) => (
                    <div key={line} className="text-slate-500 text-sm">{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">提交成功！</h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  感谢您的咨询，我们的销售团队将在1个工作日内与您联系。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', message: '' }); }}
                  className="mt-6 text-blue-700 hover:text-blue-800 font-semibold text-sm"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-900 mb-6">发送询价/咨询</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="请输入您的姓名"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">公司名称</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="请输入公司名称"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="请输入联系电话"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        电子邮件 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="请输入邮箱地址"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      咨询内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="请描述您的需求或问题，例如：产品型号、采购数量、使用场景等..."
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors mt-2"
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

export default ContactSection;
