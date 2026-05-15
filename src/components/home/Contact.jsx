import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: '销售热线',
    content: '400-888-XXXX',
    sub: '工作日 08:30 - 18:00',
  },
  {
    icon: Mail,
    title: '商务邮箱',
    content: 'sales@wensida.com',
    sub: '48小时内回复',
  },
  {
    icon: MapPin,
    title: '公司地址',
    content: '中国·某省某市高新技术产业开发区',
    sub: '温思达电力装备产业园',
  },
  {
    icon: Clock,
    title: '紧急服务',
    content: '7×24小时应急响应',
    sub: '全国服务热线随时待命',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-4">
            联系我们
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            开启您的电力项目合作
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            无论是产品咨询、技术支持还是工程合作，我们的专业团队随时为您提供服务。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map(({ icon: Icon, title, content, sub }) => (
                <div key={title} className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-slate-400 text-xs mb-1">{title}</div>
                  <div className="text-white font-semibold text-sm">{content}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-56 relative">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="公司位置"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-medium">温思达电力装备产业园</div>
                  <div className="text-slate-300 text-sm">高新技术产业开发区</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">提交成功！</h3>
                <p className="text-slate-400">
                  感谢您的咨询，我们的技术顾问将在48小时内与您联系。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', type: '', message: '' }); }}
                  className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-6">在线咨询</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">姓名 *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="您的姓名"
                        className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">公司名称</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="所在单位"
                        className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">联系电话 *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="手机号码"
                        className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">电子邮箱</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="邮箱地址"
                        className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5">咨询类型</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="" className="text-slate-500">请选择咨询类型</option>
                      <option value="product">产品咨询</option>
                      <option value="project">工程合作</option>
                      <option value="service">售后服务</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5">项目描述</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="请简要描述您的项目需求或问题..."
                      className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-200"
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
}
