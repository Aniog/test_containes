import { Leaf, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="bg-green-900 text-white py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-extrabold text-xl mb-4">
            <Leaf className="w-6 h-6 text-green-400" />
            <span>GreenLife</span>
          </div>
          <p className="text-green-300 text-sm leading-relaxed mb-5">
            致力于打造更绿色、更健康的未来，让每一个人都能享受可持续的生活方式。
          </p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 bg-green-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4 text-green-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          {
            title: '产品服务',
            links: ['有机产品', '环保包装', '清洁能源', '节水方案'],
          },
          {
            title: '公司信息',
            links: ['关于我们', '团队介绍', '新闻动态', '合作伙伴'],
          },
          {
            title: '支持帮助',
            links: ['常见问题', '联系客服', '退换政策', '隐私条款'],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-bold text-white mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-green-300 hover:text-green-100 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-green-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-green-400">
        <p>© 2026 GreenLife. 保留所有权利。</p>
        <p className="flex items-center gap-1">
          用 <Leaf className="w-3.5 h-3.5 text-green-500 mx-0.5" /> 为地球而建
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
