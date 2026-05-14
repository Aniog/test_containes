import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1A] text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#E8431A] flex items-center justify-center font-bold text-white text-lg">
                秋
              </div>
              <span className="text-white font-bold text-xl">秋易广告</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              创意无界，广告有道。秋易广告致力于为每一个品牌提供最具创意与价值的广告服务。
            </p>
            <div className="flex gap-3 mt-5">
              {['微信', '微博', '抖音', '小红书'].map((platform) => (
                <div
                  key={platform}
                  className="px-3 py-1.5 rounded-full bg-white/10 text-xs hover:bg-[#E8431A] hover:text-white transition-colors cursor-pointer"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">服务项目</h4>
            <ul className="space-y-2 text-sm">
              {['品牌视觉设计', '整合营销传播', '数字广告投放', '影视广告制作', '社交媒体运营'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-[#F5A623] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#E8431A] mt-0.5 flex-shrink-0" />
                上海市黄浦区南京东路100号
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#E8431A] flex-shrink-0" />
                400-888-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#E8431A] flex-shrink-0" />
                hello@qiuyi-ad.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2024 秋易广告 版权所有</p>
          <p>沪ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}
