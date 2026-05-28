import { Info, Cpu, Globe, TrendingUp } from 'lucide-react';

const sections = [
  {
    icon: Info,
    color: 'text-[#627eea]',
    bg: 'bg-[#627eea]/10',
    title: '什么是以太坊？',
    content: [
      '以太坊（Ethereum）是由 Vitalik Buterin 于2013年提出、2015年正式上线的开源区块链平台。与比特币专注于点对点电子现金不同，以太坊的核心创新是引入了"智能合约"——一种可以在区块链上自动执行的程序代码。',
      '以太坊的原生货币 ETH（以太币）不仅是一种价值存储工具，更是整个网络的"燃料"（Gas）。每一笔交易、每一次合约调用都需要消耗 ETH 作为手续费，支付给维护网络安全的验证者。',
      '以太坊虚拟机（EVM）是以太坊的核心组件，它是一个图灵完备的计算环境，可以执行任意复杂的程序逻辑，这使得开发者可以在以太坊上构建几乎任何类型的去中心化应用。',
    ],
  },
  {
    icon: Cpu,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    title: 'ETH 的经济模型',
    content: [
      'EIP-1559（2021年8月）彻底改变了以太坊的费用机制。每笔交易的基础费用会被永久销毁（burn），而不是支付给矿工/验证者。这使得 ETH 在网络活跃时成为通缩资产。',
      '以太坊合并后，验证者通过质押 ETH 来参与共识，目前年化收益约为3-5%。质押的 ETH 锁定在信标链上，为网络安全提供经济保障。',
      '截至2024年，以太坊已累计销毁超过400万枚 ETH，价值超过100亿美元。在网络高度活跃时，ETH 的销毁速度甚至超过新发行速度，实现净通缩。',
    ],
  },
  {
    icon: Globe,
    color: 'text-[#a855f7]',
    bg: 'bg-[#a855f7]/10',
    title: '以太坊 vs 比特币',
    content: [
      '比特币是"数字黄金"，专注于价值存储和点对点支付，设计简单、安全性极高。以太坊则是"可编程区块链"，支持复杂的智能合约和去中心化应用，功能更为丰富。',
      '在共识机制上，比特币使用工作量证明（PoW），以太坊已升级为权益证明（PoS），能耗降低99.95%，更加环保。在供应量上，比特币上限2100万枚，以太坊没有硬性上限但通过销毁机制控制通胀。',
      '两者并非竞争关系，而是互补。比特币作为价值储备，以太坊作为去中心化计算平台，共同构成了加密货币生态系统的两大支柱。',
    ],
  },
  {
    icon: TrendingUp,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    title: '如何获取 ETH？',
    content: [
      '购买：通过币安、Coinbase、OKX等中心化交易所购买 ETH，这是最简单的方式。需要完成KYC身份验证，支持法币直接购买。',
      '质押：持有32枚 ETH 可以成为独立验证者，或通过 Lido、Rocket Pool 等流动性质押协议以更少的 ETH 参与质押，获得年化3-5%的收益。',
      '参与DeFi：通过提供流动性、借贷等方式在DeFi协议中赚取收益。但需注意智能合约风险和无常损失等风险因素。',
    ],
  },
];

export default function WhatIsEthSection() {
  return (
    <section id="what-is-eth" className="py-24 bg-[#0f1035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#627eea]/10 border border-[#627eea]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#8b9ff5] text-sm font-medium">深度解析</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            全面了解
            <span className="bg-gradient-to-r from-[#627eea] to-[#a855f7] bg-clip-text text-transparent">
              {' '}以太坊
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从技术原理到经济模型，从生态系统到投资逻辑，深入理解以太坊的每一个维度。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="bg-[#141530] border border-[#627eea]/20 rounded-2xl p-8 hover:border-[#627eea]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${section.bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <h3 className="text-white text-xl font-bold">{section.title}</h3>
                </div>
                <div className="space-y-4">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-slate-400 text-sm leading-relaxed">
                      {para}
                    </p>
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
