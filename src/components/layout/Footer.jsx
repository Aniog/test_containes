import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  '保险产品': ['人寿保险', '健康保险', '车辆保险', '财产保险', '企业保险'],
  '服务支持': ['在线报价', '理赔申请', '保单查询', '常见问题', '服务网点'],
  '关于我们': ['公司简介', '发展历程', '荣誉资质', '新闻动态', '加入我们'],
  '法律信息': ['隐私政策', '服务条款', '免责声明', '监管信息'],
};

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xl font-bold">安盾保险</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              专注保险服务20年，为500万+客户提供专业、可靠的保险保障方案。
            </p>
            <div className="space-y-2">
              <a href="tel:400-888-8888" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                400-888-8888
              </a>
              <a href="mailto:service@andun.com" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                service@andun.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                上海市浦东新区陆家嘴金融中心大厦18楼
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#contact')}
                      className="text-gray-400 hover:text-white text-sm transition-colors bg-transparent border-none p-0 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2024 安盾保险股份有限公司 · 保险业务许可证：沪保监许可[2004]0001号
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-gray-500 text-sm">受中国银行保险监督管理委员会监管</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
