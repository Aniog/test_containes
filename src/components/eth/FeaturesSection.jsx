import { Code2, Shield, Zap, Globe, Layers, Lock } from 'lucide-react';

const features = [
  {
    icon: Code2,
    color: 'text-[#627eea]',
    bg: 'bg-[#627eea]/10',
    border: 'border-[#627eea]/30',
    title: '智能合约',
    subtitle: 'Smart Contracts',
    desc: '自动执行的程序代码，无需中间人。一旦部署到区块链，代码就不可篡改，按照预设逻辑自动运行，消除了信任问题。',
    tags: ['Solidity', 'EVM', '图灵完备'],
  },
  {
    icon: Globe,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/30',
    title: '去中心化应用',
    subtitle: 'DApps',
    desc: '运行在区块链上的应用程序，没有单点故障，无法被关闭或审查。用户真正拥有自己的数据和资产。',
    tags: ['DeFi', 'NFT', 'GameFi'],
  },
  {
    icon: Shield,
    color: 'text-[#a855f7]',
    bg: 'bg-[#a855f7]/10',
    border: 'border-[#a855f7]/30',
    title: '权益证明共识',
    subtitle: 'Proof of Stake',
    desc: '以太坊合并后采用PoS共识机制，能耗降低99.95%。验证者质押ETH参与共识，经济激励与网络安全深度绑定。',
    tags: ['PoS', '质押', '节能'],
  },
  {
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/30',
    title: 'Layer 2 扩展',
    subtitle: 'Scaling Solutions',
    desc: '通过Optimism、Arbitrum、zkSync等Layer2方案，交易速度提升100倍，手续费降低99%，同时继承以太坊主网的安全性。',
    tags: ['Rollup', 'zkEVM', '低Gas'],
  },
  {
    icon: Layers,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
    title: 'ERC 代币标准',
    subtitle: 'Token Standards',
    desc: 'ERC-20定义了同质化代币标准，ERC-721定义了NFT标准，ERC-1155支持多代币类型。这些标准使得以太坊生态互操作性极强。',
    tags: ['ERC-20', 'ERC-721', 'ERC-1155'],
  },
  {
    icon: Lock,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/30',
    title: '去中心化金融',
    subtitle: 'DeFi',
    desc: '无需银行账户即可访问金融服务。借贷、交易、理财、保险——所有传统金融功能都可以通过智能合约实现，向全球任何人开放。',
    tags: ['借贷', 'DEX', '流动性挖矿'],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#0a0b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#627eea]/10 border border-[#627eea]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#8b9ff5] text-sm font-medium">核心技术</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            以太坊的
            <span className="bg-gradient-to-r from-[#627eea] to-[#a855f7] bg-clip-text text-transparent">
              {' '}核心特性
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            六大核心技术支柱，构建去中心化互联网的基础设施。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`bg-[#141530] border ${feat.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 ${feat.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${feat.color}`} />
                </div>
                <h3 className="text-white text-lg font-bold mb-1">{feat.title}</h3>
                <p className="text-slate-500 text-xs mb-3">{feat.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{feat.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full ${feat.bg} ${feat.color} font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
