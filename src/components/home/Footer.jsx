const Footer = () => {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3d2314] text-[#e8d5b7] py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-[#fefcf8] mb-4">木语·家居</h3>
            <p className="text-[#c49a6c] leading-relaxed mb-6 max-w-sm">
              二十年专注木质家具，以天然原木为媒，以匠心工艺为魂，
              为每一个家庭打造温暖而永恒的居家空间。
            </p>
            <div className="flex gap-3">
              {['微信', '微博', '小红书'].map((platform) => (
                <button
                  key={platform}
                  className="bg-[#5c3d2e] text-[#e8d5b7] text-xs px-4 py-2 rounded-full hover:bg-[#8b5e3c] transition-colors"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#fefcf8] font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2.5">
              {[
                { label: '首页', href: '#hero' },
                { label: '品牌特色', href: '#features' },
                { label: '产品系列', href: '#products' },
                { label: '关于我们', href: '#about' },
                { label: '联系我们', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-[#c49a6c] hover:text-[#fefcf8] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#fefcf8] font-semibold mb-4">服务支持</h4>
            <ul className="space-y-2.5">
              {['定制服务', '售后保障', '配送安装', '保养指南', '常见问题'].map((item) => (
                <li key={item}>
                  <span className="text-[#c49a6c] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5c3d2e] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8b5e3c] text-sm">
            © 2024 木语·家居 版权所有
          </p>
          <p className="text-[#8b5e3c] text-sm">
            苏ICP备XXXXXXXX号 | 苏州市姑苏区木渎镇工匠街88号
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
