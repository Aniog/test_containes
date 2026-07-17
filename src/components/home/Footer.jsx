import { Leaf, Instagram, Youtube, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: '探索',
    links: [
      { label: '植物图鉴', href: '#gallery' },
      { label: '种植指南', href: '#guide' },
      { label: '新手入门', href: '#guide' },
    ],
  },
  {
    title: '关于',
    links: [
      { label: '关于我们', href: '#about' },
      { label: '联系我们', href: '#about' },
      { label: '合作咨询', href: '#about' },
    ],
  },
];

const Footer = () => (
  <footer id="about" className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
            <Leaf className="w-6 h-6 text-leaf-400" />
            <span>水培花园</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            致力于推广水培种植文化，让每个人都能在家中享受绿色生活的乐趣。
            从入门到精通，我们陪伴你的每一步成长。
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="w-9 h-9 bg-gray-800 hover:bg-leaf-600 rounded-full flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Youtube" className="w-9 h-9 bg-gray-800 hover:bg-leaf-600 rounded-full flex items-center justify-center transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Email" className="w-9 h-9 bg-gray-800 hover:bg-leaf-600 rounded-full flex items-center justify-center transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="text-white font-semibold mb-4">{group.title}</h4>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-leaf-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800 rounded-2xl p-6 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-white font-semibold mb-1">订阅种植资讯</h4>
            <p className="text-gray-400 text-sm">每周获取最新水培技巧和植物养护知识</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="输入你的邮箱"
              className="flex-1 md:w-64 bg-gray-700 text-white placeholder-gray-500 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-leaf-500"
            />
            <button className="bg-leaf-600 hover:bg-leaf-700 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors whitespace-nowrap">
              订阅
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500">
        <p>© 2026 水培花园. 保留所有权利。</p>
        <p>用 🌿 和 ❤️ 精心打造</p>
      </div>
    </div>
  </footer>
);

export default Footer;
