import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cuhk-purple-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cuhk-gold rounded-full flex items-center justify-center">
                <span className="text-cuhk-purple font-bold text-sm">中大</span>
              </div>
              <div>
                <div className="font-bold text-white">香港中文大学</div>
                <div className="text-cuhk-gold text-sm">内地生校友会</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              连接中大内地生校友，共建互助成长的校友网络。
              传承中大精神，服务校友社群。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">快速链接</h3>
            <ul className="space-y-2">
              {[
                { to: '/events', label: '活动资讯' },
                { to: '/alumni', label: '校友录' },
                { to: '/membership', label: '加入会员' },
                { to: '/about', label: '关于我们' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 hover:text-cuhk-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-cuhk-gold flex-shrink-0" />
                <span>alumni@cuhk-mainland.org</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-cuhk-gold flex-shrink-0" />
                <span>香港新界沙田香港中文大学</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} 香港中文大学内地生校友会. 保留所有权利.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-white/50 hover:text-white/80 text-sm transition-colors">
              隐私政策
            </Link>
            <Link to="/terms" className="text-white/50 hover:text-white/80 text-sm transition-colors">
              使用条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
