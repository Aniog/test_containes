export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🧸</span>
            <div>
              <div className="font-black text-xl text-orange-400">高高乐</div>
              <div className="text-xs text-gray-400">儿童玩具有限公司</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            专注儿童玩具10年，致力于为每个孩子创造快乐、安全、益智的童年体验。
          </p>
          <div className="flex gap-3">
            {['微信', '微博', '抖音', '小红书'].map((platform) => (
              <div
                key={platform}
                className="w-8 h-8 bg-gray-700 hover:bg-orange-500 rounded-lg flex items-center justify-center text-xs cursor-pointer transition-colors"
              >
                {platform[0]}
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-black text-white mb-4">产品系列</h4>
          <ul className="space-y-2">
            {['创意积木系列', '超软毛绒玩具', '趣味拼图系列', '益智玩具套装', '节日礼品套装'].map((item) => (
              <li key={item}>
                <a href="#products" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-black text-white mb-4">关于我们</h4>
          <ul className="space-y-2">
            {['品牌故事', '质量认证', '企业文化', '加盟合作', '媒体报道'].map((item) => (
              <li key={item}>
                <a href="#features" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service */}
        <div>
          <h4 className="font-black text-white mb-4">客户服务</h4>
          <ul className="space-y-2">
            {['购买指南', '配送说明', '退换货政策', '常见问题', '联系客服'].map((item) => (
              <li key={item}>
                <a href="#contact" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 bg-gray-800 rounded-xl p-3">
            <div className="text-orange-400 font-bold text-sm">📱 客服热线</div>
            <div className="text-white font-black">400-888-8888</div>
            <div className="text-gray-400 text-xs">周一至周日 9:00-21:00</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-gray-500 text-sm">
            © 2024 高高乐儿童玩具有限公司 版权所有
          </div>
          <div className="flex gap-4 text-gray-500 text-xs">
            <a href="#" className="hover:text-gray-300 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-300 transition-colors">服务条款</a>
            <a href="#" className="hover:text-gray-300 transition-colors">粤ICP备XXXXXXXX号</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
