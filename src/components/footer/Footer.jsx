import { Activity } from 'lucide-react';

const footerLinks = {
  '产品系列': ['内窥镜系统', '监护设备', '影像设备', '超声设备', '手术设备', '检验仪器'],
  '公司信息': ['关于我们', '发展历程', '荣誉资质', '新闻动态', '招贤纳士'],
  '服务支持': ['售后服务', '技术支持', '产品培训', '配件供应', '维修保养'],
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base">星闪医疗器械有限公司</div>
                <div className="text-slate-500 text-xs tracking-widest">XINGSHAN MEDICAL DEVICES</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              专注医疗器械研发制造二十年，以精准技术守护生命健康，
              为全球医疗机构提供可靠的医疗解决方案。
            </p>
            <div className="flex gap-3">
              {['微信', '微博', 'LinkedIn'].map((social) => (
                <div
                  key={social}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors text-xs text-slate-400 hover:text-white"
                >
                  {social[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2024 星闪医疗器械有限公司 版权所有
          </p>
          <div className="flex items-center gap-6">
            {['隐私政策', '使用条款', '法律声明'].map((item) => (
              <a key={item} href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
          <p className="text-slate-600 text-xs">粤ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
