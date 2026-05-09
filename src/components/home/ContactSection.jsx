import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const insuranceTypes = ['人寿保险', '健康保险', '车辆保险', '财产保险', '企业保险', '其他'];

const contactInfo = [
  {
    icon: Phone,
    color: 'bg-blue-100 text-blue-600',
    title: '客服热线',
    lines: ['400-888-8888', '工作日 9:00-18:00'],
  },
  {
    icon: Mail,
    color: 'bg-emerald-100 text-emerald-600',
    title: '电子邮件',
    lines: ['service@andun.com', '24小时内回复'],
  },
  {
    icon: MapPin,
    color: 'bg-violet-100 text-violet-600',
    title: '总部地址',
    lines: ['上海市浦东新区陆家嘴', '金融中心大厦18楼'],
  },
  {
    icon: Clock,
    color: 'bg-amber-100 text-amber-600',
    title: '服务时间',
    lines: ['周一至周五 9:00-18:00', '紧急理赔 24/7'],
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
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
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            联系我们
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            获取专属保险方案
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            填写以下信息，我们的专业顾问将在24小时内与您联系
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start gap-4"
                >
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                    {item.lines.map((line) => (
                      <div key={line} className="text-gray-500 text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">立即拨打咨询</h4>
              <p className="text-blue-100 text-sm mb-4">
                专业顾问在线，为您解答所有保险疑问
              </p>
              <a
                href="tel:400-888-8888"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                400-888-8888
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">提交成功！</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    感谢您的咨询，我们的专业顾问将在24小时内与您联系，请保持手机畅通。
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', type: '', message: '' }); }}
                    className="mt-6 text-blue-600 text-sm font-medium bg-transparent border-none hover:underline"
                  >
                    再次提交
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        您的姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="请输入您的姓名"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        手机号码 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="请输入手机号码"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="请输入电子邮箱（选填）"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      感兴趣的保险类型 <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {insuranceTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, type }))}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                            form.type === type
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      您的需求描述
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="请描述您的保险需求，例如：家庭人员情况、预算范围、特殊需求等..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !form.name || !form.phone || !form.type}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors border-none text-base"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        提交咨询申请
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    提交即表示您同意我们的隐私政策，您的信息将被严格保密
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
