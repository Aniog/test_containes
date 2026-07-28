import { Scale, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  '业务领域': ['商事诉讼', '公司法务', '刑事辩护', '知识产权', '婚姻家事', '涉外法律'],
  '快速导航': ['关于我们', '律师团队', '成功案例', '新闻动态', '法律资讯', '联系我们'],
  '法律资源': ['法律法规查询', '司法解释汇编', '合同模板下载', '法律风险评估', '企业合规指南'],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold rounded flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white">明远律师事务所</div>
                <div className="text-xs text-gold tracking-widest uppercase">Law Firm</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              专注法律服务二十余年，以专业、诚信、卓越为核心价值，
              为企业和个人提供全方位的法律解决方案。
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>400-888-0000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>info@mingyuan-law.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>北京市朝阳区建国路88号</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-gray-400 text-sm hover:text-gold transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2024 明远律师事务所 版权所有 | 京ICP备XXXXXXXX号
          </p>
          <div className="flex gap-6">
            {['隐私政策', '使用条款', '免责声明'].map((item) => (
              <button key={item} className="text-gray-500 text-xs hover:text-gold transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
