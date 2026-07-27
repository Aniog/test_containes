import { Link } from 'react-router-dom';
import { Target } from 'lucide-react';

const Footer = () => (
  <footer className="bg-forest-dark text-text-light/70 py-12 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-6 h-6 text-gold" />
            <span className="font-serif text-lg font-bold text-text-light">箭道</span>
          </div>
          <p className="text-sm leading-relaxed">
            专注于射箭运动的专题网站，为爱好者和专业运动员提供全面的射箭知识与资源。
          </p>
        </div>

        <div>
          <h4 className="text-text-light font-semibold mb-4">快速导航</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: '关于射箭', path: '/about' },
              { label: '技术与装备', path: '/technique' },
              { label: '赛事历史', path: '/competition' },
              { label: '训练指南', path: '/training' },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-text-light font-semibold mb-4">关于本站</h4>
          <p className="text-sm leading-relaxed">
            本网站致力于推广射箭运动文化，内容涵盖历史、技术、赛事和训练等各个方面。
          </p>
        </div>
      </div>

      <div className="border-t border-forest-light/30 pt-6 text-center text-sm">
        <p>© 2026 箭道 · 射箭运动专题网站 · 精准 · 专注 · 力量</p>
      </div>
    </div>
  </footer>
);

export default Footer;
