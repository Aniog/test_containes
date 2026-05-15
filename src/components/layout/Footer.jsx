import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const productLinks = [
  { path: '/products', label: '监护设备' },
  { path: '/products', label: '影像设备' },
  { path: '/products', label: '手术器械' },
  { path: '/products', label: '康复设备' },
  { path: '/products', label: '检验设备' },
]

const companyLinks = [
  { path: '/about', label: '公司简介' },
  { path: '/about', label: '发展历程' },
  { path: '/about', label: '资质认证' },
  { path: '/news', label: '新闻资讯' },
  { path: '/contact', label: '联系我们' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-sky rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">星</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">星闪医疗器械</div>
                <div className="text-blue-300 text-xs">有限公司</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              专注医疗器械研发与制造二十余年，以精湛工艺和严格质控为医疗机构提供可靠的设备解决方案。
            </p>
            <div className="flex gap-3">
              {['微信', '微博', '领英'].map((s) => (
                <div key={s} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs hover:bg-brand-sky cursor-pointer transition-colors">
                  {s[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">产品中心</h3>
            <ul className="space-y-2">
              {productLinks.map(({ path, label }) => (
                <li key={label}>
                  <Link to={path} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">公司信息</h3>
            <ul className="space-y-2">
              {companyLinks.map(({ path, label }) => (
                <li key={label}>
                  <Link to={path} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-blue-200">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-sky" />
                <span>400-888-9999</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-blue-200">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand-sky" />
                <span>info@xingshan-medical.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-blue-200">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-sky" />
                <span>上海市浦东新区张江高科技园区医疗器械产业基地</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-blue-200">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-brand-sky" />
                <span>周一至周五 8:30 – 17:30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-blue-300 text-xs">
          <span>© 2024 星闪医疗器械有限公司 版权所有</span>
          <span>沪ICP备XXXXXXXX号 | 医疗器械生产许可证：沪械生产许20XXXXXXXX号</span>
        </div>
      </div>
    </footer>
  )
}
