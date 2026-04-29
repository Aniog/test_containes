import { Sun, Twitter, Github, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const links = {
    产品: ['功能介绍', '定价方案', '更新日志', '路线图'],
    公司: ['关于我们', '团队介绍', '加入我们', '新闻中心'],
    支持: ['帮助中心', '联系客服', '状态页面', '社区论坛'],
    法律: ['隐私政策', '服务条款', 'Cookie 设置', '合规声明'],
  }

  const socials = [
    { icon: Twitter, label: 'Twitter' },
    { icon: Github, label: 'GitHub' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-yellow-900 text-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-50 font-bold text-lg">阳光品牌</span>
            </div>
            <p className="text-yellow-300 text-sm leading-relaxed mb-5">
              让每一天都充满阳光，我们致力于为您提供最优质的服务体验。
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-yellow-800 flex items-center justify-center hover:bg-yellow-700 transition-colors"
                >
                  <Icon className="w-4 h-4 text-yellow-300" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-yellow-50 font-bold text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-yellow-400 text-sm hover:text-yellow-200 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-yellow-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-yellow-500 text-sm">
            © 2026 阳光品牌. 保留所有权利。
          </p>
          <p className="text-yellow-600 text-xs">
            用 ☀️ 和热情打造，献给每一位用户
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
