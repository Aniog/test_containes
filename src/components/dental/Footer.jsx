import { Smile, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white rounded-xl p-2">
                <Smile className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">
                齿<span className="text-blue-400">护</span>健康
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              专注于口腔健康科普与防护指导，致力于帮助每一位用户建立科学的口腔护理习惯，拥有健康自信的笑容。
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>守护您和家人的口腔健康</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">快速导航</h4>
            <ul className="space-y-3">
              {[
                { label: '健康知识', href: '#knowledge' },
                { label: '日常护理', href: '#care' },
                { label: '常见问题', href: '#faq' },
                { label: '免费咨询', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                400-888-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                care@chihu.com
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                全国各大城市均有合作诊所
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 齿护健康. 保留所有权利。
          </p>
          <p className="text-gray-600 text-xs">
            本网站内容仅供参考，不构成医疗建议，如有口腔问题请咨询专业医师。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
