import { ArrowUpRight } from 'lucide-react';

const ecosystems = [
  {
    category: 'DeFi 去中心化金融',
    color: 'text-[#627eea]',
    bg: 'bg-[#627eea]/10',
    border: 'border-[#627eea]/30',
    items: [
      { name: 'Uniswap', desc: '最大去中心化交易所，日交易量超$10亿', tvl: '$5B+' },
      { name: 'Aave', desc: '去中心化借贷协议，支持多种资产', tvl: '$12B+' },
      { name: 'MakerDAO', desc: 'DAI稳定币发行方，DeFi基础设施', tvl: '$8B+' },
      { name: 'Curve Finance', desc: '稳定币兑换专用DEX，低滑点', tvl: '$3B+' },
    ],
  },
  {
    category: 'NFT 数字资产',
    color: 'text-[#a855f7]',
    bg: 'bg-[#a855f7]/10',
    border: 'border-[#a855f7]/30',
    items: [
      { name: 'OpenSea', desc: '全球最大NFT交易市场', tvl: '累计$30B+' },
      { name: 'Blur', desc: '专业NFT交易平台，低手续费', tvl: '月交易$1B+' },
      { name: 'CryptoPunks', desc: '最早的NFT项目，文化地标', tvl: '地板价$100K+' },
      { name: 'Bored Ape YC', desc: '顶级NFT社区，明星持有', tvl: '地板价$50K+' },
    ],
  },
  {
    category: 'Layer 2 扩展方案',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/30',
    items: [
      { name: 'Arbitrum', desc: 'Optimistic Rollup，最大L2生态', tvl: '$15B+' },
      { name: 'Optimism', desc: 'OP Stack，超链架构先驱', tvl: '$8B+' },
      { name: 'zkSync Era', desc: 'ZK Rollup，原生账户抽象', tvl: '$3B+' },
      { name: 'Polygon', desc: '多链扩展方案，企业级应用', tvl: '$1B+' },
    ],
  },
  {
    category: '基础设施',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/30',
    items: [
      { name: 'Chainlink', desc: '去中心化预言机，链上数据来源', tvl: '服务$75T+' },
      { name: 'The Graph', desc: '区块链数据索引协议', tvl: '索引$1T+' },
      { name: 'IPFS/Filecoin', desc: '去中心化存储网络', tvl: '存储EB级' },
      { name: 'ENS', desc: '以太坊域名服务，Web3身份', tvl: '3M+域名' },
    ],
  },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 bg-[#0a0b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#627eea]/10 border border-[#627eea]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#8b9ff5] text-sm font-medium">生态全景</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            以太坊
            <span className="bg-gradient-to-r from-[#627eea] to-[#a855f7] bg-clip-text text-transparent">
              {' '}生态系统
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            价值超过$1000亿的去中心化应用生态，覆盖金融、艺术、游戏、社交等各个领域。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ecosystems.map((eco) => (
            <div
              key={eco.category}
              className={`bg-[#141530] border ${eco.border} rounded-2xl p-6`}
            >
              <h3 className={`text-lg font-bold mb-5 ${eco.color}`}>{eco.category}</h3>
              <div className="space-y-3">
                {eco.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 bg-[#0f1035] rounded-xl hover:bg-[#1a1d45] transition-colors duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${eco.bg} rounded-lg flex items-center justify-center`}>
                        <span className={`text-xs font-bold ${eco.color}`}>
                          {item.name.slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{item.name}</div>
                        <div className="text-slate-500 text-xs">{item.desc}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-bold ${eco.color}`}>{item.tvl}</span>
                      <ArrowUpRight className={`w-4 h-4 ${eco.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#627eea]/10 to-[#a855f7]/10 border border-[#627eea]/20 rounded-2xl p-8 text-center">
          <h3 className="text-white text-2xl font-bold mb-3">以太坊生态规模</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {[
              { value: '$50B+', label: 'DeFi 总锁仓量' },
              { value: '4,000+', label: '活跃DApp数量' },
              { value: '200M+', label: '以太坊钱包地址' },
              { value: '1M+', label: '日活跃用户' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl md:text-3xl font-bold font-mono bg-gradient-to-r from-[#627eea] to-[#a855f7] bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-slate-400 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
