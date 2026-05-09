import { useState } from 'react';
import { Heart, Car, Home, Briefcase, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const products = [
  {
    id: 'life',
    icon: Heart,
    color: 'from-rose-500 to-pink-600',
    bgLight: 'bg-rose-50',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    title: '人寿保险',
    subtitle: '守护家人未来',
    description: '为您和家人提供全面的生命保障，确保在任何情况下家人的生活质量不受影响。',
    features: ['身故保障', '全残保障', '保费豁免', '分红收益'],
    price: '¥ 299',
    period: '/ 月起',
    popular: false,
  },
  {
    id: 'health',
    icon: Shield,
    color: 'from-blue-500 to-blue-700',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    title: '健康保险',
    subtitle: '全面医疗保障',
    description: '覆盖重大疾病、住院医疗、门诊费用，让您无后顾之忧地面对健康挑战。',
    features: ['重疾险保障', '住院报销', '门诊补贴', '手术费用'],
    price: '¥ 199',
    period: '/ 月起',
    popular: true,
  },
  {
    id: 'car',
    icon: Car,
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    title: '车辆保险',
    subtitle: '安全出行无忧',
    description: '提供交强险、商业险全套车险方案，保障您的爱车和行车安全。',
    features: ['交强险', '车损险', '第三者责任', '不计免赔'],
    price: '¥ 899',
    period: '/ 年起',
    popular: false,
  },
  {
    id: 'property',
    icon: Home,
    color: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    title: '财产保险',
    subtitle: '家财安全守护',
    description: '为您的房屋、家具及贵重物品提供全面保障，抵御火灾、盗窃等风险。',
    features: ['房屋结构险', '家庭财产险', '自然灾害', '盗窃保障'],
    price: '¥ 399',
    period: '/ 年起',
    popular: false,
  },
  {
    id: 'business',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    title: '企业保险',
    subtitle: '商业风险管理',
    description: '为企业提供员工团险、财产险、责任险等全方位商业保险解决方案。',
    features: ['员工团险', '企业财产', '雇主责任', '产品责任'],
    price: '¥ 1,299',
    period: '/ 月起',
    popular: false,
  },
];

const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState('health');

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            保险产品
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            全面的保险保障方案
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            根据您的需求，选择最适合的保险产品，我们提供个性化定制服务
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProduct(p.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeProduct === p.id
                    ? `bg-gradient-to-r ${p.color} text-white border-transparent shadow-md`
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            const isActive = activeProduct === product.id;
            return (
              <div
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`relative rounded-2xl border-2 p-6 cursor-pointer card-hover transition-all duration-300 ${
                  isActive
                    ? `${product.borderColor} bg-white shadow-xl`
                    : 'border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                      最受欢迎
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{product.title}</h3>
                <p className={`text-sm font-medium ${product.textColor} mb-3`}>{product.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${product.textColor} flex-shrink-0`} />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-gray-400 text-sm">{product.period}</span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); scrollToContact(); }}
                    className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-all border-none bg-gradient-to-r ${product.color} text-white shadow-sm`}
                  >
                    立即投保
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
