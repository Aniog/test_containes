import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', concern: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            联系我们
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            预约免费口腔咨询
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            填写您的信息，我们的专业顾问将在24小时内与您联系
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: '咨询热线', value: '400-888-9999', color: 'bg-blue-100 text-blue-600' },
                  { icon: Mail, label: '电子邮件', value: 'care@chihu.com', color: 'bg-teal-100 text-teal-600' },
                  { icon: MapPin, label: '服务地区', value: '全国各大城市均有合作诊所', color: 'bg-orange-100 text-orange-500' },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className={`${color} rounded-xl p-3 flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">{label}</div>
                      <div className="text-gray-900 font-semibold">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">我们的承诺</h4>
              <div className="space-y-3">
                {[
                  '专业口腔医师团队提供建议',
                  '免费初次咨询，无隐藏费用',
                  '24小时内回复您的咨询',
                  '严格保护您的个人隐私',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="bg-teal-100 rounded-full p-5">
                  <CheckCircle className="w-12 h-12 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">提交成功！</h3>
                <p className="text-gray-600">感谢您的咨询，我们将在24小时内与您联系。</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', concern: '', message: '' }); }}
                  className="mt-4 text-blue-600 font-semibold hover:underline"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-6">填写咨询信息</h3>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                    您的姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="请输入您的姓名"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
                    联系电话 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="请输入您的手机号码"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="concern">
                    主要关注问题
                  </label>
                  <select
                    id="concern"
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">请选择您关注的问题</option>
                    <option value="cavity">龋齿/蛀牙</option>
                    <option value="gum">牙龈问题</option>
                    <option value="whitening">牙齿美白</option>
                    <option value="sensitivity">牙齿敏感</option>
                    <option value="children">儿童口腔</option>
                    <option value="other">其他问题</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
                    详细描述
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="请描述您的具体情况或问题..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-full py-3.5 font-bold text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
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
};

export default ContactSection;
