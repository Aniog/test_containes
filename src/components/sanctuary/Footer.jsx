import { PawPrint, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-6 h-6 text-amber-500" />
              <span className="font-black text-lg text-white">
                虎缘<span className="text-amber-500">救护站</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              致力于老虎救护、康复与保育的非营利机构。
              让每一只老虎都能在安全与尊严中生活。
            </p>
            <p className="text-xs mt-4 text-stone-600">
              注册号：滇民政字 [2012] 第 0088 号
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">快速导航</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {['关于我们', '救护的老虎', '我们的使命', '如何帮助', '联系我们'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-amber-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">关注我们</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {['微信公众号', '微博', '抖音', 'Instagram', 'Facebook'].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-amber-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2024 虎缘救护站. 保留所有权利.</p>
          <p className="flex items-center gap-1.5">
            用 <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> 守护每一只老虎
          </p>
        </div>
      </div>
    </footer>
  )
}
