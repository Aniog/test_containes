import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: '产品中心',
    links: ['精密结构件', '液压传动元件', '精密齿轮传动系统', '自动化装配模组', '高压密封组件', '定制化机械总成'],
  },
  {
    title: '服务支持',
    links: ['DFM 设计优化', '样件试制', '批量生产', '质量检测报告', '物流配送', '售后技术支持'],
  },
  {
    title: '关于我们',
    links: ['公司简介', '发展历程', '资质认证', '新闻动态', '招贤纳士', '联系我们'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D2137] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#D4820A] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">溪</span>
              </div>
              <span className="text-white font-bold text-base">溪流谷机械智造</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              专注高精度机械零部件研发与制造，以先进技术与严苛品质，服务全球工业客户。
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-[#D4820A] flex-shrink-0" />
                <span>+86 769-8888-0000</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-[#D4820A] flex-shrink-0" />
                <span>sales@xiliugu-mfg.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="text-[#D4820A] flex-shrink-0 mt-0.5" />
                <span>广东省东莞市松山湖高新区溪流谷工业园</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="text-sm hover:text-[#D4820A] cursor-pointer transition-colors">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A5276] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2024 溪流谷机械智造有限公司 版权所有
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">隐私政策</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">服务条款</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">粤ICP备XXXXXXXX号</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
