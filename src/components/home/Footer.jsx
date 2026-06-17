import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'

const footerLinks = {
  产品分类: ['办公椅', '办公桌', '文具耗材', '电脑配件', '收纳整理'],
  服务支持: ['企业采购', '批量报价', '售后服务', '配送说明', '退换货政策'],
  关于我们: ['公司介绍', '新闻动态', '合作伙伴', '加入我们', '联系我们'],
}

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Mail, label: 'Email' },
]

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-white font-bold text-xl">OfficeHub</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              专业办公用品一站式采购平台，为您的工作空间提供全方位解决方案。
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 OfficeHub. 保留所有权利。
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">隐私政策</a>
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">服务条款</a>
            <a href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
