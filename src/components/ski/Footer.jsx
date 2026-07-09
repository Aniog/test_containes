import { Mountain, Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  '目的地': ['欧洲滑雪场', '北美滑雪场', '亚洲滑雪场', '南美滑雪场'],
  '技巧教程': ['初级课程', '中级课程', '高级课程', '越野滑雪'],
  '装备指南': ['滑雪板推荐', '滑雪靴选购', '安全装备', '服装指南'],
  '关于我们': ['我们的故事', '联系我们', '合作伙伴', '隐私政策'],
};

export default function Footer() {
  return (
    <footer id="about" className="bg-frost border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-7 h-7 text-sky-blue" />
              <span className="text-snow-white font-black text-xl tracking-tight">
                SNOW<span className="text-sky-blue">PEAK</span>
              </span>
            </div>
            <p className="text-glacier text-sm leading-relaxed mb-6">
              专注于滑雪文化与运动，为每一位雪山爱好者提供最专业的内容与服务。
            </p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-deep-navy/60 border border-white/10 rounded-full flex items-center justify-center text-glacier hover:text-sky-blue hover:border-sky-blue/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-snow-white font-bold text-sm uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-glacier text-sm hover:text-sky-blue transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-glacier text-sm">
            © 2026 SNOWPEAK. 保留所有权利。
          </p>
          <p className="text-glacier text-sm">
            用热情与专业，连接每一位雪山爱好者
          </p>
        </div>
      </div>
    </footer>
  );
}
