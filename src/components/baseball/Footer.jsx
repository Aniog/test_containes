const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚾</span>
            <div>
              <div
                className="font-black text-xl text-white"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                BASE<span className="text-red-500">BALL</span>
              </div>
              <p className="text-slate-500 text-xs">美国国民消遣 · America's Pastime</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['关于棒球', '规则', '球队', '球星', '赛事'].map((item, i) => (
              <a
                key={item}
                href={`#${['about', 'rules', 'teams', 'players', 'events'][i]}`}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-600 text-sm">
            © 2026 Baseball · 热爱棒球，热爱生活 ⚾
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
