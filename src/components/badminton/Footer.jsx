

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-display">
              羽球<span className="text-feather-400">天地</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              致力于推广羽毛球运动，为爱好者提供全面的资讯、装备指南和赛事信息。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">快速导航</h4>
            <ul className="space-y-3 text-sm">
              {['关于羽毛球', '装备指南', '传奇人物', '比赛规则', '赛事信息'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-400 hover:text-feather-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">资源推荐</h4>
            <ul className="space-y-3 text-sm">
              {['BWF 世界羽联', '中国羽毛球协会', '羽毛球教学视频', '赛事直播平台', '场馆查询'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-400 hover:text-feather-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">关注我们</h4>
            <div className="flex gap-4 mb-6">
              {[
                { label: '微信', icon: 'M' },
                { label: '微博', icon: 'W' },
                { label: '抖音', icon: 'T' },
                { label: 'B站', icon: 'B' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-feather-500 hover:text-white transition-all duration-300 text-sm font-bold"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-slate-400 text-sm">contact@badminton-world.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2026 羽球天地. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">隐私政策</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">服务条款</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


