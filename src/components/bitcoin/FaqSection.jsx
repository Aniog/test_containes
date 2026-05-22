import { useState } from 'react';

const FAQS = [
  {
    q: '比特币是谁发明的？',
    a: '比特币由化名"中本聪"（Satoshi Nakamoto）的人或团体于 2008 年发明。2009 年 1 月 3 日，中本聪挖出了第一个区块（创世区块），并在其中嵌入了一条信息："The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"，暗示了比特币诞生的背景。',
  },
  {
    q: '比特币是合法的吗？',
    a: '这取决于所在国家和地区。在美国、欧盟、日本等大多数国家，比特币是合法的，可以作为资产持有和交易。萨尔瓦多甚至将其列为法定货币。但部分国家对其有限制或禁止。',
  },
  {
    q: '比特币如何保证安全？',
    a: '比特币的安全性来自多个层面：SHA-256 密码学哈希函数、非对称加密（ECDSA 签名）、工作量证明共识机制，以及全球数千个独立节点的分布式验证。攻击比特币网络需要控制超过 51% 的全网算力，成本极高。',
  },
  {
    q: '比特币可以被复制或伪造吗？',
    a: '不能。每一枚比特币的所有权都记录在区块链上，所有节点共同维护这份账本。"双花攻击"（同一笔钱花两次）在理论上需要控制大量算力，在实践中几乎不可能实现。',
  },
  {
    q: '比特币挖矿是什么？',
    a: '挖矿是矿工通过消耗算力（电力）来竞争记账权的过程。矿工需要找到一个特殊的数字（Nonce），使得区块头的 SHA-256 哈希值小于当前难度目标。成功的矿工获得区块奖励（目前为 3.125 BTC）和交易手续费。',
  },
  {
    q: '比特币和以太坊有什么区别？',
    a: '比特币主要定位为"数字黄金"和价值存储工具，设计简洁，专注于安全性和去中心化。以太坊则是一个可编程的智能合约平台，支持 DeFi、NFT 等应用。两者在技术架构、共识机制和应用场景上都有显著差异。',
  },
  {
    q: '我如何购买比特币？',
    a: '可以通过中心化交易所（如 Coinbase、Binance、OKX）购买，也可以通过点对点平台或比特币 ATM 购买。购买后建议将比特币转移到自己控制私钥的硬件钱包中，遵循"Not your keys, not your coins"原则。',
  },
  {
    q: '比特币会消失吗？',
    a: '比特币是开源软件，只要有人运行节点，网络就会持续存在。即使某个国家禁止，全球其他地方的节点仍会继续运行。比特币已运行超过 15 年，从未停机，正常运行时间接近 100%。',
  },
];

const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-lg overflow-hidden transition-all duration-200 ${
        open ? 'border-btc-orange/50 bg-btc-card' : 'border-btc-border bg-btc-card hover:border-btc-border/80'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent border-0 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-btc-muted text-xs min-w-[2rem]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-mono text-btc-text text-sm font-medium">{faq.q}</span>
        </div>
        <span
          className={`font-mono text-btc-orange text-lg transition-transform duration-200 flex-shrink-0 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pl-[3.5rem]">
          <p className="text-btc-dim text-sm leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => (
  <section id="faq" className="py-24 px-4 md:px-6 bg-btc-bg relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-15 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    <div className="relative z-10 max-w-3xl mx-auto">
      <div className="mb-16 text-center">
        <p className="font-mono text-btc-purple text-sm uppercase tracking-widest mb-3">
          // 常见问题
        </p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-btc-text mb-4">
          FAQ<span className="text-btc-purple">_</span>
        </h2>
        <p className="text-btc-dim text-base">关于比特币你最想知道的问题</p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, i) => (
          <FaqItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
