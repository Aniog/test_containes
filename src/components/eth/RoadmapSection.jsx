import { CheckCircle2, Clock, Circle } from 'lucide-react';

const milestones = [
  {
    year: '2013',
    title: '以太坊白皮书发布',
    desc: 'Vitalik Buterin 发布以太坊白皮书，提出可编程区块链的概念，引发加密货币领域的革命性思考。',
    status: 'done',
    tags: ['白皮书', '概念提出'],
  },
  {
    year: '2015',
    title: '以太坊主网上线',
    desc: '以太坊创世区块诞生，Frontier版本正式上线。智能合约时代开启，开发者开始在以太坊上构建应用。',
    status: 'done',
    tags: ['主网上线', 'Frontier'],
  },
  {
    year: '2016',
    title: 'The DAO 事件与硬分叉',
    desc: 'The DAO 遭受黑客攻击，损失360万ETH。以太坊社区投票决定硬分叉，以太坊经典（ETC）由此诞生。',
    status: 'done',
    tags: ['DAO', '硬分叉', 'ETC'],
  },
  {
    year: '2017',
    title: 'ICO 热潮与 ERC-20',
    desc: 'ERC-20代币标准推动ICO热潮，以太坊成为代币发行的首选平台。ETH价格从$10飙升至$1400。',
    status: 'done',
    tags: ['ERC-20', 'ICO', '牛市'],
  },
  {
    year: '2020',
    title: 'DeFi 夏天 & 信标链',
    desc: 'DeFi生态爆发，Uniswap、Compound等协议TVL突破百亿。信标链上线，PoS时代的序幕拉开。',
    status: 'done',
    tags: ['DeFi', '信标链', 'PoS准备'],
  },
  {
    year: '2021',
    title: 'EIP-1559 & NFT 元年',
    desc: 'EIP-1559升级引入ETH销毁机制，改变经济模型。NFT市场爆发，OpenSea月交易量突破$30亿。',
    status: 'done',
    tags: ['EIP-1559', 'NFT', '销毁机制'],
  },
  {
    year: '2022',
    title: '以太坊合并（The Merge）',
    desc: '以太坊完成历史性的"合并"，从PoW切换到PoS，能耗降低99.95%。这是加密货币史上最重要的技术升级之一。',
    status: 'done',
    tags: ['The Merge', 'PoS', '节能'],
  },
  {
    year: '2023',
    title: 'Shanghai 升级 & EIP-4844',
    desc: 'Shanghai升级允许质押ETH提款，解锁流动性。EIP-4844（Proto-Danksharding）为Layer2大幅降低数据费用。',
    status: 'done',
    tags: ['Shanghai', 'EIP-4844', 'Blob'],
  },
  {
    year: '2024-2025',
    title: 'Pectra 升级',
    desc: '账户抽象（EIP-7702）、验证者改进、执行层优化。以太坊用户体验大幅提升，钱包功能更加强大。',
    status: 'done',
    tags: ['Pectra', '账户抽象', 'EIP-7702'],
  },
  {
    year: '2025+',
    title: 'Fusaka & Verkle Trees',
    desc: '完整的Danksharding分片方案，Verkle树替换Merkle树，无状态客户端，以太坊TPS突破10万。',
    status: 'upcoming',
    tags: ['Danksharding', 'Verkle', '无状态'],
  },
  {
    year: '未来',
    title: '以太坊的终局愿景',
    desc: '成为全球去中心化结算层，支撑数十亿用户的金融、社交、治理活动。Layer2生态繁荣，ETH成为互联网原生货币。',
    status: 'future',
    tags: ['愿景', '大规模采用', 'Web3'],
  },
];

const statusConfig = {
  done: { icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-400', label: '已完成' },
  upcoming: { icon: Clock, color: 'text-amber-400', bg: 'bg-amber-400', label: '进行中' },
  future: { icon: Circle, color: 'text-slate-500', bg: 'bg-slate-600', label: '规划中' },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 bg-[#0f1035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#627eea]/10 border border-[#627eea]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#8b9ff5] text-sm font-medium">发展历程</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            以太坊
            <span className="bg-gradient-to-r from-[#627eea] to-[#a855f7] bg-clip-text text-transparent">
              {' '}发展路线图
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从2013年白皮书到未来的全球结算层，以太坊的每一步都在改写历史。
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#627eea] via-[#a855f7] to-slate-700 md:-translate-x-px" />

          <div className="space-y-8">
            {milestones.map((item, idx) => {
              const cfg = statusConfig[item.status];
              const Icon = cfg.icon;
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-5 z-10 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full ${cfg.bg} ${item.status === 'upcoming' ? 'animate-pulse' : ''}`} />
                  </div>

                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className={`bg-[#141530] border rounded-2xl p-5 hover:border-[#627eea]/40 transition-all duration-300 ${
                        item.status === 'done'
                          ? 'border-[#627eea]/20'
                          : item.status === 'upcoming'
                          ? 'border-amber-400/30'
                          : 'border-slate-700/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#627eea] text-sm font-bold font-mono">{item.year}</span>
                        <div className={`flex items-center gap-1 text-xs ${cfg.color}`}>
                          <Icon className="w-3 h-3" />
                          {cfg.label}
                        </div>
                      </div>
                      <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-[#0f1035] text-slate-400 border border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
