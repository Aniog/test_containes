import { Zap } from 'lucide-react';

const footerLinks = {
  产品服务: ['高压开关设备', '气体绝缘开关柜', '预装式变电站', '新能源并网系统', '智能运维平台'],
  解决方案: ['电网建设', '工业配电', '光伏并网', '风电集电', '储能系统'],
  关于我们: ['公司简介', '发展历程', '资质荣誉', '新闻动态', '加入我们'],
  支持服务: ['技术文档', '产品手册', '工程案例', '售后服务', '联系我们'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">温思达电力</div>
                <div className="text-blue-400 text-xs leading-tight tracking-wider">WENSIDA POWER</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              专注电力装备研发制造二十年，为电力基础设施建设提供可靠的产品与服务。
            </p>
            <div className="text-xs space-y-1">
              <div>电话：400-888-XXXX</div>
              <div>邮箱：sales@wensida.com</div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2024 温思达电力装备有限公司 版权所有
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-blue-400 transition-colors">法律声明</a>
            <a href="#" className="hover:text-blue-400 transition-colors">网站地图</a>
            <span>粤ICP备XXXXXXXX号</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
