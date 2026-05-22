const features = [
  {
    icon: '🔐',
    title: '去中心化',
    code: 'decentralized',
    desc: '没有中央机构控制。全球数千个节点共同维护网络，任何人都无法单独关闭或篡改它。',
    color: 'btc-orange',
    border: 'border-btc-orange/30',
    glow: 'hover:shadow-[0_0_20px_rgba(247,147,26,0.2)]',
  },
  {
    icon: '🔗',
    title: '区块链',
    code: 'blockchain',
    desc: '所有交易记录在一条不可篡改的链式账本上。每个区块包含前一个区块的哈希值，形成密码学保证的历史记录。',
    color: 'btc-cyan',
    border: 'border-btc-cyan/30',
    glow: 'hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]',
  },
  {
    icon: '⛏️',
    title: '工作量证明',
    code: 'proof_of_work',
    desc: '矿工通过消耗算力竞争记账权。这种机制确保了网络安全，使得攻击成本极高。',
    color: 'btc-green',
    border: 'border-btc-green/30',
    glow: 'hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]',
  },
  {
    icon: '🔑',
    title: '非对称加密',
    code: 'asymmetric_crypto',
    desc: '每个用户拥有公钥和私钥。私钥签名交易，公钥验证身份。只有私钥持有者才能动用资金。',
    color: 'btc-purple',
    border: 'border-btc-purple/30',
    glow: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]',
  },
  {
    icon: '📦',
    title: '有限供应',
    code: 'fixed_supply',
    desc: '总量永远不超过 2100 万枚。每 21 万个区块减半一次，模拟黄金的稀缺性，抵抗通货膨胀。',
    color: 'btc-orange',
    border: 'border-btc-orange/30',
    glow: 'hover:shadow-[0_0_20px_rgba(247,147,26,0.2)]',
  },
  {
    icon: '🌐',
    title: '无需许可',
    code: 'permissionless',
    desc: '任何人都可以参与，无需注册、无需身份验证。只需一个钱包地址，即可向全球任何人发送价值。',
    color: 'btc-cyan',
    border: 'border-btc-cyan/30',
    glow: 'hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]',
  },
];

const colorMap = {
  'btc-orange': 'text-btc-orange',
  'btc-cyan': 'text-btc-cyan',
  'btc-green': 'text-btc-green',
  'btc-purple': 'text-btc-purple',
};

const IntroSection = () => (
  <section id="intro" className="py-24 px-4 md:px-6 bg-btc-surface relative overflow-hidden">
    {/* Dot pattern background */}
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(247,147,26,0.2) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    />

    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-16 text-center">
        <p className="font-mono text-btc-cyan text-sm uppercase tracking-widest mb-3">
          // 基础知识
        </p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-btc-text mb-4">
          什么是 <span className="text-btc-orange text-glow-orange">Bitcoin</span>？
        </h2>
        <p className="text-btc-dim text-lg max-w-2xl mx-auto leading-relaxed">
          比特币是由中本聪（Satoshi Nakamoto）于 2008 年在白皮书中提出的点对点电子现金系统，
          2009 年 1 月 3 日正式上线创世区块。
        </p>
      </div>

      {/* Whitepaper quote */}
      <div className="mb-16 bg-btc-card border border-btc-border rounded-lg p-6 md:p-8 relative">
        <div className="absolute top-4 left-6 font-mono text-btc-orange text-4xl opacity-30 select-none">"</div>
        <blockquote className="font-mono text-btc-dim text-sm md:text-base leading-relaxed pl-6 italic">
          A purely peer-to-peer version of electronic cash would allow online payments to be sent
          directly from one party to another without going through a financial institution.
        </blockquote>
        <p className="font-mono text-btc-muted text-xs mt-4 pl-6">
          — Satoshi Nakamoto, Bitcoin: A Peer-to-Peer Electronic Cash System (2008)
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.code}
            className={`bg-btc-card border ${f.border} rounded-lg p-6 transition-all duration-300 ${f.glow} group cursor-default`}
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="font-mono text-btc-muted text-xs uppercase tracking-widest mb-1">
                  {f.code}
                </p>
                <h3 className={`font-mono text-lg font-bold ${colorMap[f.color]}`}>{f.title}</h3>
              </div>
            </div>
            <p className="text-btc-dim text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntroSection;
