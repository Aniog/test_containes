import { Link } from 'react-router-dom'
import { Package, Phone, MapPin, Shield, Truck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Trust badges */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: '正品保障', sub: '100%正品承诺' },
              { icon: Truck, label: '极速配送', sub: '全国包邮' },
              { icon: Package, label: '7天退换', sub: '无理由退换货' },
              { icon: Phone, label: '客服支持', sub: '7×24小时服务' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">华购商城</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              专注中国优质商品，为您提供便捷、安全的网上购物体验。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">商品分类</h4>
            <ul className="space-y-2 text-sm">
              {['电子产品', '时尚服饰', '食品', '美妆护肤', '家居用品', '运动户外'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-gray-400 hover:text-red-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">客户服务</h4>
            <ul className="space-y-2 text-sm">
              {['购物指南', '支付方式', '配送说明', '退换货政策', '售后服务', '投诉建议'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 cursor-pointer hover:text-red-400 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">联系我们</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>北京市朝阳区</span>
              </div>
              <p className="mt-3">接受支付方式：</p>
              <div className="flex gap-2 flex-wrap">
                {['支付宝', '微信支付', '银联', '货到付款'].map((pay) => (
                  <span key={pay} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                    {pay}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © 2026 华购商城 · 京ICP备XXXXXXXX号 · 增值电信业务经营许可证
      </div>
    </footer>
  )
}
