import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const plans = [
  {
    name: '入门版',
    price: '免费',
    desc: '适合个人开发者和小型项目',
    features: ['5GB 存储空间', '每月 10万次 API 调用', '基础数据分析', '社区支持'],
    cta: '免费开始',
    highlight: false,
  },
  {
    name: '专业版',
    price: '¥299',
    period: '/月',
    desc: '适合成长中的团队和企业',
    features: ['500GB 存储空间', '无限 API 调用', '高级数据分析', '优先技术支持', '自定义域名', 'SSO 单点登录'],
    cta: '立即升级',
    highlight: true,
  },
  {
    name: '企业版',
    price: '定制',
    desc: '适合大型企业和特殊需求',
    features: ['无限存储空间', '专属服务器', '定制化开发', '专属客户经理', 'SLA 保障', '私有化部署'],
    cta: '联系销售',
    highlight: false,
  },
];

const CTA = () => {
  const containerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="about" ref={containerRef} className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            价格方案
          </span>
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            选择适合您的方案
          </h2>
          <p id="cta-subtitle" className="text-slate-600 text-lg max-w-xl mx-auto">
            透明定价，无隐藏费用，随时可以升级或降级。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col border transition-shadow ${
                plan.highlight
                  ? 'bg-blue-800 border-blue-600 shadow-2xl scale-105'
                  : 'bg-white border-blue-100 shadow-md hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <span className="self-start bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  最受欢迎
                </span>
              )}
              <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-slate-800'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>
                {plan.desc}
              </p>
              <div className="flex items-end gap-1 mb-6">
                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-800'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle
                      className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-blue-300' : 'text-blue-500'}`}
                    />
                    <span className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-slate-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center font-semibold py-3 rounded-full transition ${
                  plan.highlight
                    ? 'bg-white text-blue-800 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Email CTA */}
        <div
          id="contact"
          className="relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"
            data-strk-bg-id="cta-bg-h7i8j9"
            data-strk-bg="[cta-email-title] [cta-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          />
          <div className="relative">
            <h2 id="cta-email-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
              准备好开始了吗？
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
              立即注册，免费体验 30 天专业版全部功能，无需信用卡。
            </p>
            {submitted ? (
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-300 px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>感谢您的注册！我们会尽快联系您。</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="输入您的邮箱地址"
                  required
                  className="flex-1 bg-white/10 border border-white/30 text-white placeholder-blue-300 px-5 py-3 rounded-full focus:outline-none focus:border-white/60 transition"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  立即注册
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
