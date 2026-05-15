import { Zap } from 'lucide-react';

const footerLinks = [
  {
    title: '产品中心',
    links: ['高压开关柜', '干式变压器', '智能配电系统', '环网柜', '综合自动化'],
  },
  {
    title: '行业应用',
    links: ['电力行业', '轨道交通', '工矿冶金', '数据中心', '新能源'],
  },
  {
    title: '关于我们',
    links: ['公司简介', '发展历程', '资质荣誉', '新闻动态', '加入我们'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] border-t border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#2196F3] p-2 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base">温思达电力装备有限公司</div>
                <div className="text-[#8BA3C1] text-xs tracking-widest">WENSIDA POWER EQUIPMENT CO., LTD.</div>
              </div>
            </div>
            <p className="text-[#8BA3C1] text-sm leading-relaxed mb-5 max-w-xs">
              专注电力装备制造二十年，以技术创新驱动产业升级，为客户提供安全、高效、可靠的电力解决方案。
            </p>
            <div className="text-[#8BA3C1] text-xs space-y-1">
              <div>电话：+86 400-888-XXXX</div>
              <div>邮箱：sales@wensida-power.com</div>
              <div>地址：湖南省长沙市高新区麓谷大道88号</div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="text-[#8BA3C1] hover:text-[#2196F3] text-sm cursor-pointer transition-colors">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1E3A5F] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8BA3C1] text-xs">
            © 2024 温思达电力装备有限公司 版权所有
          </p>
          <p className="text-[#8BA3C1] text-xs">
            湘ICP备XXXXXXXX号 | 增值电信业务经营许可证：湘B2-XXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}
