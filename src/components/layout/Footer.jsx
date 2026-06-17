import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-6 h-6 text-orange-400" />
              <span className="text-white font-bold text-lg">办公优选</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              专注办公用品采购，为企业和个人提供高品质、高性价比的办公文具和设备。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">商品分类</h3>
            <ul className="space-y-2 text-sm">
              {['书写工具', '纸张文具', '办公设备', '收纳整理', '桌面用品', '打印耗材'].map(cat => (
                <li key={cat}>
                  <Link to={`/products?category=${encodeURIComponent(cat)}`} className="hover:text-white transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">全部商品</Link></li>
              <li><Link to="/cart" className="hover:text-white transition-colors">购物车</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>service@officeshop.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>北京市朝阳区办公大厦101室</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-slate-500">
          <p>© 2026 办公优选. 保留所有权利. | 京ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  )
}
