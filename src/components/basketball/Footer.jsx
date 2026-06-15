const footerLinks = {
  '球队': ['球员名单', '教练团队', '球队历史', '荣誉榜'],
  '赛事': ['赛程安排', '比赛结果', '积分榜', '季后赛'],
  '球迷': ['购票', '球迷俱乐部', '周边商品', '球迷活动'],
  '媒体': ['新闻中心', '图片库', '视频集锦', '联系我们'],
};

const Footer = () => {
  return (
    <footer className="bg-court-black border-t border-court-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="font-heading font-black text-hoop-orange text-4xl uppercase tracking-tight">SLAM</span>
              <p className="text-gray-500 text-xs font-body uppercase tracking-widest mt-1">Basketball</p>
            </div>
            <p className="text-gray-500 font-body text-sm leading-relaxed">
              热血篮球，燃烧赛场。
              <br />
              雷霆队，永远向前。
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {['微博', '微信', '抖音'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-court-border hover:border-hoop-orange flex items-center justify-center text-gray-500 hover:text-hoop-orange transition-all duration-200 text-xs font-body"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-200 font-body text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-court-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 font-body text-sm">
            © 2026 SLAM Basketball. 保留所有权利。
          </p>
          <div className="flex gap-6">
            {['隐私政策', '使用条款', 'Cookie 设置'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-400 font-body text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
