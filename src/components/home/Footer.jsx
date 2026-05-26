import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: '产品系列',
    links: ['卧室系列', '客厅系列', '厨房系列', '浴室系列', '礼品套装'],
  },
  {
    title: '关于我们',
    links: ['品牌故事', '设计理念', '工艺标准', '社会责任', '加入我们'],
  },
  {
    title: '客户服务',
    links: ['购买指南', '配送说明', '退换政策', '常见问题', '联系客服'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-[#F5F0E8]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#8B6F47] flex items-center justify-center">
                <span className="text-white font-bold font-serif-sc">罗</span>
              </div>
              <div>
                <p className="font-serif-sc font-bold text-white text-base leading-tight">罗克岚家居用品有限公司</p>
                <p className="text-[#B8A898] text-xs">温暖每一个家的角落</p>
              </div>
            </div>
            <p className="text-[#B8A898] text-sm leading-relaxed mb-6 max-w-xs">
              自2014年起，我们用天然材质与匠心设计，为超过50万个家庭带来温馨与美好。
              每一件产品，都是我们对生活的热爱。
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#B8A898] text-sm">
                <Phone size={14} className="text-[#8B6F47]" />
                <span>400-888-6688</span>
              </div>
              <div className="flex items-center gap-2 text-[#B8A898] text-sm">
                <Mail size={14} className="text-[#8B6F47]" />
                <span>hello@luokelan.com</span>
              </div>
              <div className="flex items-center gap-2 text-[#B8A898] text-sm">
                <MapPin size={14} className="text-[#8B6F47]" />
                <span>上海市静安区南京西路1788号</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-white text-sm mb-4">{group.title}</h4>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#B8A898] text-sm hover:text-[#D4B896] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#5C3D1E] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#7A6552] text-xs">
            © 2024 罗克岚家居用品有限公司 版权所有
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#7A6552] text-xs hover:text-[#B8A898] transition-colors">隐私政策</a>
            <a href="#" className="text-[#7A6552] text-xs hover:text-[#B8A898] transition-colors">服务条款</a>
            <a href="#" className="text-[#7A6552] text-xs hover:text-[#B8A898] transition-colors">沪ICP备2024XXXXXX号</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
