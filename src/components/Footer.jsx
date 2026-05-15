import { Activity } from 'lucide-react';

const footerLinks = [
  {
    title: '产品系列',
    links: ['监护设备', '影像诊断', '手术器械', '检验设备', '康复器械'],
  },
  {
    title: '服务支持',
    links: ['产品手册下载', '技术文档', '售后服务', '培训中心', '常见问题'],
  },
  {
    title: '关于华康',
    links: ['公司简介', '发展历程', '荣誉资质', '新闻动态', '加入我们'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">华康医疗</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              专注医疗器械研发制造二十年，以技术创新守护生命健康，为全国医疗机构提供专业可靠的器械解决方案。
            </p>
            <div className="flex gap-3">
              {['微信', '微博', '领英'].map((platform) => (
                <div
                  key={platform}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors text-xs text-slate-400 hover:text-white"
                >
                  {platform[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {['ISO 13485', 'CE 认证', 'NMPA 注册', 'FDA 认证', 'ISO 9001'].map((cert) => (
              <span
                key={cert}
                className="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700"
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 华康医疗科技有限公司 版权所有
          </p>
          <div className="flex gap-6">
            {['隐私政策', '使用条款', '法律声明'].map((item) => (
              <a key={item} href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
