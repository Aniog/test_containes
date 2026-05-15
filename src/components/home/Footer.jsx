import { Zap, Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const footerLinks = [
  {
    title: '产品系列',
    links: ['高压开关柜', '智能变压器', '配电自动化系统', '新能源并网装备', '预装式变电站'],
  },
  {
    title: '解决方案',
    links: ['电力行业解决方案', '工矿企业配电', '新能源电站', '城市配网改造', '数据中心供电'],
  },
  {
    title: '服务支持',
    links: ['技术咨询', '安装调试', '运维检修', '备品备件', '技术培训'],
  },
];

export default function Footer() {
  const containerRef = useRef(null);
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <footer className="relative bg-brand-navy text-white" ref={containerRef}>
      {/* Background: aerial city power grid / night cityscape with electricity */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="footer-bg-d4f5g6"
        data-strk-bg="[footer-brand] aerial city power grid night electricity infrastructure"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-brand-navy/93" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div id="footer-brand" className="text-white font-bold text-base leading-tight">温思达电力装备有限公司</div>
                <div className="text-brand-orange text-xs tracking-widest">WENSIDA POWER EQUIPMENT</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              专注电力装备研发制造二十余年，以技术创新与品质服务为核心，
              为客户提供安全可靠的电力装备解决方案。
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>400-888-6688</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>sales@wensida-power.com</span>
              </div>
              <div className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>江苏省南京市江宁经济技术开发区电力装备产业园A区</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#contact')}
                      className="text-white/50 hover:text-brand-orange text-sm transition-colors duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2024 温思达电力装备有限公司 版权所有
          </p>
          <p className="text-white/40 text-xs">
            苏ICP备XXXXXXXX号 | 增值电信业务经营许可证：苏B2-XXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}
