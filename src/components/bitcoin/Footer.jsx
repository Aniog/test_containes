const LINKS = [
  { label: 'bitcoin.org', href: 'https://bitcoin.org', desc: '官方网站' },
  { label: 'Bitcoin Whitepaper', href: 'https://bitcoin.org/bitcoin.pdf', desc: '中本聪白皮书' },
  { label: 'Bitcoin Wiki', href: 'https://en.bitcoin.it', desc: '技术文档' },
  { label: 'Mempool.space', href: 'https://mempool.space', desc: '区块链浏览器' },
];

const Footer = () => (
  <footer className="bg-btc-surface border-t border-btc-border py-12 px-4 md:px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded bg-btc-orange flex items-center justify-center glow-orange">
              <span className="text-black font-mono font-bold text-sm">₿</span>
            </div>
            <span className="font-mono text-btc-text font-bold tracking-wider">BITCOIN</span>
          </div>
          <p className="text-btc-muted text-sm leading-relaxed">
            去中心化的点对点电子现金系统。无需信任，只需数学。
          </p>
          <p className="font-mono text-btc-muted text-xs mt-4">
            <span className="text-btc-green">●</span> 网络运行中 · 区块 #893,421
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-mono text-btc-cyan text-xs uppercase tracking-widest mb-4">
            // 资源链接
          </h4>
          <ul className="space-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-btc-dim hover:text-btc-orange transition-colors text-sm group"
                >
                  <span className="font-mono text-btc-muted group-hover:text-btc-orange">&gt;</span>
                  <span>{l.label}</span>
                  <span className="text-btc-muted text-xs">— {l.desc}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Key facts */}
        <div>
          <h4 className="font-mono text-btc-orange text-xs uppercase tracking-widest mb-4">
            // 关键参数
          </h4>
          <div className="font-mono text-xs space-y-2">
            {[
              ['创世区块', '2009-01-03'],
              ['总供应量', '21,000,000 BTC'],
              ['出块时间', '~10 分钟'],
              ['共识机制', 'Proof of Work'],
              ['哈希算法', 'SHA-256'],
              ['当前奖励', '3.125 BTC'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-btc-border/40 pb-1">
                <span className="text-btc-muted">{k}</span>
                <span className="text-btc-dim">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-btc-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-btc-muted text-xs">
          © 2024 Bitcoin Introduction Site · 仅供教育目的
        </p>
        <p className="font-mono text-btc-muted text-xs">
          <span className="text-btc-orange">₿</span> Not your keys, not your coins.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
