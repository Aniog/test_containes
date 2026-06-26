const links = [
  { label: '何为非遗', href: '#about' },
  { label: '非遗项目', href: '#items' },
  { label: '传承故事', href: '#stories' },
  { label: '参与保护', href: '#join' },
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#F8F3EA]/60 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-calligraphy text-[#C9A84C] text-3xl leading-none">非遗</span>
            <div>
              <p className="text-[#F8F3EA] text-sm font-medium tracking-widest">文化传承</p>
              <p className="text-[#F8F3EA]/40 text-xs tracking-wider">守护 · 传承 · 发扬</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm hover:text-[#C9A84C] transition-colors bg-transparent border-none cursor-pointer text-[#F8F3EA]/60"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-[#F8F3EA]/30 text-center md:text-right">
            © 2026 非遗文化传承中心
            <br />
            守护中华文明，传承千年智慧
          </p>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 pt-6 border-t border-[#F8F3EA]/10 text-center">
          <p className="font-calligraphy text-[#C9A84C]/40 text-lg">
            薪火相传，生生不息
          </p>
        </div>
      </div>
    </footer>
  );
}
