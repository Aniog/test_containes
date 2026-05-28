import { Github, Twitter, ExternalLink } from 'lucide-react';

const links = {
  '了解以太坊': [
    { label: '官方网站', href: 'https://ethereum.org/zh' },
    { label: '以太坊文档', href: 'https://ethereum.org/zh/developers/docs' },
    { label: '白皮书', href: 'https://ethereum.org/zh/whitepaper' },
    { label: '路线图', href: 'https://ethereum.org/zh/roadmap' },
  ],
  '开发者资源': [
    { label: 'Solidity 文档', href: 'https://docs.soliditylang.org' },
    { label: 'Hardhat 框架', href: 'https://hardhat.org' },
    { label: 'Ethers.js', href: 'https://ethers.org' },
    { label: 'OpenZeppelin', href: 'https://openzeppelin.com' },
  ],
  '生态工具': [
    { label: 'Etherscan 浏览器', href: 'https://etherscan.io' },
    { label: 'MetaMask 钱包', href: 'https://metamask.io' },
    { label: 'Uniswap DEX', href: 'https://uniswap.org' },
    { label: 'DeFiLlama', href: 'https://defillama.com' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080918] border-t border-[#627eea]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#627eea] to-[#a855f7] flex items-center justify-center shadow-[0_0_15px_rgba(98,126,234,0.4)]">
                <span className="text-white font-bold text-base">Ξ</span>
              </div>
              <span className="text-white font-bold text-lg">以太坊 ETH</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              去中心化的世界计算机，构建开放、无需许可的互联网未来。
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/ethereum"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#141530] border border-[#627eea]/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-[#627eea]/50 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/ethereum"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#141530] border border-[#627eea]/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-[#627eea]/50 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://ethereum.org"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#141530] border border-[#627eea]/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-[#627eea]/50 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-[#8b9ff5] text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {item.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#627eea]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 以太坊介绍网站 · 仅供教育目的，不构成投资建议
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>基于</span>
            <span className="text-[#627eea] font-semibold">React + Vite + Tailwind</span>
            <span>构建</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
