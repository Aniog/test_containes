const BLOCK_STEPS = [
  {
    step: '01',
    title: '广播交易',
    code: 'broadcast_tx',
    desc: 'Alice 用私钥签名一笔交易，广播到 P2P 网络中的所有节点。',
    color: 'text-btc-orange',
    border: 'border-btc-orange/40',
  },
  {
    step: '02',
    title: '进入内存池',
    code: 'mempool',
    desc: '节点验证交易合法性后，将其放入内存池（Mempool）等待被打包。',
    color: 'text-btc-cyan',
    border: 'border-btc-cyan/40',
  },
  {
    step: '03',
    title: '矿工竞争',
    code: 'mining',
    desc: '矿工从内存池选取交易，构建候选区块，并不断尝试找到满足难度目标的 Nonce 值。',
    color: 'text-btc-green',
    border: 'border-btc-green/40',
  },
  {
    step: '04',
    title: '找到哈希',
    code: 'hash_found',
    desc: '当矿工找到有效的 SHA-256 哈希值（小于目标值），立即广播新区块。',
    color: 'text-btc-purple',
    border: 'border-btc-purple/40',
  },
  {
    step: '05',
    title: '链上确认',
    code: 'confirmation',
    desc: '其他节点验证区块有效后，将其追加到链上。交易获得 6 次确认后视为不可逆。',
    color: 'text-btc-orange',
    border: 'border-btc-orange/40',
  },
];

const HASH_EXAMPLE = {
  input: 'Hello, Bitcoin!',
  output: '0000000000000000000a3e4b2c1d9f8e7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d',
};

const TechSection = () => (
  <section id="tech" className="py-24 px-4 md:px-6 bg-btc-bg relative overflow-hidden">
    {/* Grid background */}
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <p className="font-mono text-btc-green text-sm uppercase tracking-widest mb-3">
          // 技术原理
        </p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-btc-text mb-4">
          区块链如何<span className="text-btc-cyan text-glow-cyan">运作</span>？
        </h2>
        <p className="text-btc-dim text-lg max-w-2xl mx-auto">
          从一笔交易的诞生到永久记录在链上，每一步都由密码学保证安全。
        </p>
      </div>

      {/* Transaction flow */}
      <div className="mb-20">
        <h3 className="font-mono text-btc-cyan text-sm uppercase tracking-widest mb-8 text-center">
          &gt; 交易生命周期
        </h3>
        <div className="flex flex-col gap-4">
          {BLOCK_STEPS.map((s, i) => (
            <div
              key={s.code}
              className={`flex items-start gap-4 bg-btc-card border ${s.border} rounded-lg p-5 group hover:bg-btc-surface transition-all duration-200`}
            >
              <div className={`font-mono text-2xl font-bold ${s.color} opacity-60 min-w-[3rem] text-right`}>
                {s.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className={`font-mono font-bold ${s.color}`}>{s.title}</h4>
                  <span className="font-mono text-btc-muted text-xs">[{s.code}]</span>
                </div>
                <p className="text-btc-dim text-sm leading-relaxed">{s.desc}</p>
              </div>
              {i < BLOCK_STEPS.length - 1 && (
                <div className="hidden md:flex items-center">
                  <span className="text-btc-muted text-lg">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Two columns: SHA-256 + Block structure */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* SHA-256 */}
        <div className="bg-btc-card border border-btc-border rounded-lg p-6">
          <h3 className="font-mono text-btc-orange font-bold mb-4 flex items-center gap-2">
            <span className="text-btc-muted">#</span> SHA-256 哈希函数
          </h3>
          <p className="text-btc-dim text-sm mb-4 leading-relaxed">
            比特币使用双重 SHA-256 哈希。输入任意数据，输出固定 256 位的"指纹"。
            改变一个字符，输出完全不同。
          </p>
          <div className="bg-btc-bg rounded p-4 font-mono text-xs">
            <div className="text-btc-muted mb-2">// 示例</div>
            <div className="text-btc-dim mb-1">
              input: <span className="text-btc-cyan">"{HASH_EXAMPLE.input}"</span>
            </div>
            <div className="text-btc-dim mb-1">↓ SHA256(SHA256(input))</div>
            <div className="text-btc-green break-all">
              {HASH_EXAMPLE.output}
            </div>
            <div className="text-btc-muted mt-2 text-xs">
              // 注意开头的多个零 — 这就是"挖矿"
            </div>
          </div>
        </div>

        {/* Block structure */}
        <div className="bg-btc-card border border-btc-border rounded-lg p-6">
          <h3 className="font-mono text-btc-cyan font-bold mb-4 flex items-center gap-2">
            <span className="text-btc-muted">#</span> 区块结构
          </h3>
          <div className="font-mono text-xs space-y-1">
            {[
              { key: 'version', val: '0x20000000', color: 'text-btc-dim' },
              { key: 'prev_hash', val: '0000...a3f2', color: 'text-btc-orange' },
              { key: 'merkle_root', val: 'f3a1...9c4e', color: 'text-btc-cyan' },
              { key: 'timestamp', val: '1716000000', color: 'text-btc-dim' },
              { key: 'bits', val: '0x1703a30c', color: 'text-btc-dim' },
              { key: 'nonce', val: '2083236893', color: 'text-btc-green' },
              { key: 'tx_count', val: '2,847', color: 'text-btc-purple' },
            ].map(({ key, val, color }) => (
              <div key={key} className="flex justify-between items-center py-1 border-b border-btc-border/50">
                <span className="text-btc-muted">{key}:</span>
                <span className={color}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Halving info */}
      <div className="mt-8 bg-btc-card border border-btc-orange/30 rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-mono text-btc-orange font-bold text-xl mb-2">
              ⛏️ 减半机制 (Halving)
            </h3>
            <p className="text-btc-dim text-sm leading-relaxed">
              每挖出 210,000 个区块（约 4 年），矿工奖励减半。从最初的 50 BTC，
              到现在的 3.125 BTC。预计到 2140 年，所有 2100 万枚比特币将全部被挖出。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 min-w-[240px]">
            {[
              { year: '2009', reward: '50 BTC' },
              { year: '2012', reward: '25 BTC' },
              { year: '2016', reward: '12.5 BTC' },
              { year: '2020', reward: '6.25 BTC' },
              { year: '2024', reward: '3.125 BTC', current: true },
              { year: '2028', reward: '1.5625 BTC' },
            ].map(({ year, reward, current }) => (
              <div
                key={year}
                className={`font-mono text-xs p-2 rounded border ${
                  current
                    ? 'border-btc-orange bg-btc-orange/10 text-btc-orange'
                    : 'border-btc-border text-btc-muted'
                }`}
              >
                <div className="font-bold">{year}</div>
                <div>{reward}</div>
                {current && <div className="text-btc-green text-xs">← 当前</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechSection;
