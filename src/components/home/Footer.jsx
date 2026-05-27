import { Shield } from 'lucide-react';

const footerLinks = [
  {
    title: '产品系列',
    links: ['个人清洁系列', '家居清洁系列', '婴幼儿护理系列', '老年护理系列', '口腔护理系列', '衣物护理系列'],
  },
  {
    title: '关于威尔德',
    links: ['公司简介', '发展历程', '荣誉资质', '社会责任', '新闻动态', '加入我们'],
  },
  {
    title: '合作服务',
    links: ['经销商合作', '企业采购', 'OEM/ODM定制', '海外出口', '电商合作', '售后服务'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-base">威尔德</div>
                <div className="text-white/50 text-xs">家庭护理产品有限公司</div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              专注家庭护理二十余年，以科学配方与严苛品控，守护千万家庭的健康与品质生活。
            </p>
            <div className="flex flex-col gap-1.5 text-sm text-neutral-400">
              <span>📍 广东省广州市天河区科技园威尔德大厦18层</span>
              <span>📞 400-888-9999</span>
              <span>✉️ business@weide-care.com</span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-neutral-400 text-sm hover:text-brand-accent-light transition-colors"
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
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs text-center md:text-left">
            © 2024 威尔德家庭护理产品有限公司 版权所有 |
            粤ICP备XXXXXXXX号 | 粤公网安备 44010602XXXXXXXX号
          </p>
          <div className="flex gap-4 text-xs text-neutral-500">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300 transition-colors">隐私政策</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300 transition-colors">使用条款</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300 transition-colors">Cookie设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
