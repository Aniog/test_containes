import { Sword, Github, Twitter, Youtube, MessageCircle } from 'lucide-react'

const footerLinks = [
  {
    title: '游戏',
    links: ['英雄', '皮肤', '游戏模式', '地图', '排位赛'],
  },
  {
    title: '社区',
    links: ['论坛', '社交媒体', '创作中心', '玩家支持', '违规举报'],
  },
  {
    title: '电竞',
    links: ['LPL', 'LCK', '世界赛', 'MSI', '全明星赛'],
  },
  {
    title: '支持',
    links: ['帮助中心', '安全中心', '账号管理', '反馈建议', '下载游戏'],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-lol-blue-dark/80 border-t border-lol-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sword className="w-6 h-6 text-lol-gold" />
              <span className="text-lg font-bold tracking-wider">
                <span className="text-lol-gold">LEAGUE</span>
                <span className="text-white/60 ml-1">OF</span>
                <span className="text-lol-gold ml-1">LEGENDS</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              《英雄联盟》是由 Riot Games 开发运营的
              <br />全球最受欢迎的多人在线竞技游戏。
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-lol-gold/10 text-white/40 hover:text-lol-gold transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-lol-gold/10 text-white/40 hover:text-lol-gold transition-all" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-lol-gold/10 text-white/40 hover:text-lol-gold transition-all" aria-label="Discord">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-lol-gold/10 text-white/40 hover:text-lol-gold transition-all" aria-label="Github">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white/80 mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-lol-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; 2026 Riot Games, Inc. 版权所有。《英雄联盟》及其相关标志是 Riot Games, Inc. 的商标或注册商标。
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">隐私政策</a>
              <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">服务条款</a>
              <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">Cookie 设置</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}