import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  '产品': ['功能介绍', '定价方案', '更新日志', '路线图'],
  '公司': ['关于我们', '团队介绍', '新闻动态', '加入我们'],
  '支持': ['帮助中心', '文档', '社区论坛', '联系支持'],
};

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] text-[#F1FAEE]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#E63946] rounded-lg p-1.5">
                <Zap className="w-5 h-5 text-[#F1FAEE]" />
              </div>
              <span className="font-bold text-xl">
                Red<span className="text-[#FF6B6B]">Blue</span>
              </span>
            </div>
            <p className="text-[#A8DADC] text-sm leading-relaxed mb-6 max-w-xs">
              专注数字创新，驱动业务增长。我们是您最可靠的技术合作伙伴。
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#A8DADC] text-sm">
                <Mail className="w-4 h-4 text-[#FF6B6B]" />
                hello@redblue.com
              </div>
              <div className="flex items-center gap-2 text-[#A8DADC] text-sm">
                <Phone className="w-4 h-4 text-[#FF6B6B]" />
                +86 400-123-4567
              </div>
              <div className="flex items-center gap-2 text-[#A8DADC] text-sm">
                <MapPin className="w-4 h-4 text-[#FF6B6B]" />
                上海市浦东新区科技园区
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-[#F1FAEE] mb-4 text-sm uppercase tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#A8DADC] hover:text-[#F1FAEE] text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#457B9D] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A8DADC] text-sm">
            © 2026 RedBlue. 保留所有权利。
          </p>
          <div className="flex gap-6">
            {['隐私政策', '服务条款', 'Cookie 设置'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#A8DADC] hover:text-[#F1FAEE] text-sm transition-colors"
              >
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
