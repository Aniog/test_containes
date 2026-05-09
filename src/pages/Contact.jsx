import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Check } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: '客服热线',
    lines: ['400-888-8888', '周一至周日 9:00-21:00'],
    color: 'blue',
  },
  {
    icon: Mail,
    title: '电子邮件',
    lines: ['service@yudong.com', '24小时内回复'],
    color: 'green',
  },
  {
    icon: MapPin,
    title: '实体门店',
    lines: ['北京市朝阳区体育馆路88号', '羽动天下旗舰店'],
    color: 'purple',
  },
  {
    icon: Clock,
    title: '营业时间',
    lines: ['周一至周五 9:00-20:00', '周六至周日 10:00-21:00'],
    color: 'orange',
  },
];

const faqItems = [
  { q: '如何确认商品是正品？', a: '我们所有商品均来自品牌官方授权渠道，每件商品都附有正品保证卡和品牌防伪标识，假一赔十。' },
  { q: '发货时间是多久？', a: '工作日下午3点前下单，当日发货；3点后下单，次日发货。一般2-3个工作日内送达。' },
  { q: '可以退换货吗？', a: '支持7天无理由退换货。商品需保持原包装完好，未使用状态。退换货运费由我们承担。' },
  { q: '如何选择适合自己的球拍？', a: '建议根据您的打球风格（进攻/防守/全面）、技术水平和预算来选择。可以联系我们的专业顾问，我们会为您提供个性化建议。' },
  { q: '是否提供穿线服务？', a: '是的，我们提供专业穿线服务，可根据您的需求调整磅数。购买球拍时可选择穿线服务，也可单独预约。' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
            联系我们
          </div>
          <h1 className="text-4xl font-bold mb-3">随时为您服务</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            有任何问题或需要专业建议，我们的团队随时准备为您提供帮助
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map(({ icon: Icon, title, lines, color }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className={`w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center ${
                color === 'blue' ? 'bg-blue-100' : color === 'green' ? 'bg-green-100' : color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
              }`}>
                <Icon className={`w-6 h-6 ${
                  color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                }`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              {lines.map((line, i) => (
                <p key={i} className={`text-sm ${i === 0 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="w-5 h-5 text-blue-700" />
              <h2 className="text-xl font-bold text-gray-900">发送消息</h2>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">消息已发送！</h3>
                <p className="text-gray-500 text-sm">我们会在24小时内回复您，感谢您的联系。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="您的姓名"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">手机号</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="您的手机号"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">邮箱 *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="您的邮箱地址"
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">咨询主题</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="">请选择主题</option>
                    <option value="product">商品咨询</option>
                    <option value="order">订单问题</option>
                    <option value="return">退换货</option>
                    <option value="stringing">穿线服务</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">留言内容 *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="请详细描述您的问题或需求..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition-colors border-0"
                >
                  <Send className="w-4 h-4" />
                  发送消息
                </button>
              </form>
            )}
          </div>

          {/* Map placeholder + WeChat */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-100 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">北京市朝阳区体育馆路88号</p>
                  <p className="text-gray-500 text-sm mt-1">羽动天下旗舰店</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">交通指引</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>🚇 地铁：10号线劲松站B出口步行5分钟</li>
                  <li>🚌 公交：体育馆路站下车即到</li>
                  <li>🚗 自驾：地下停车场免费停车2小时</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">微信客服</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-3xl">📱</div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">扫描二维码添加微信客服</p>
                  <p className="text-xs text-gray-500">微信号：yudong_service</p>
                  <p className="text-xs text-gray-500 mt-1">响应时间：5分钟内</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">常见问题</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors border-0"
                >
                  <span className="font-medium text-gray-900 text-sm">{item.q}</span>
                  <span className={`text-gray-400 text-lg transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-gray-50">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
