const roster = [
  { number: '1', name: '陈志远', position: 'PG', height: '188cm', weight: '82kg' },
  { number: '3', name: '刘宇航', position: 'SG', height: '196cm', weight: '90kg' },
  { number: '7', name: '王浩天', position: 'C', height: '213cm', weight: '118kg' },
  { number: '11', name: '张宇飞', position: 'SF', height: '203cm', weight: '98kg' },
  { number: '14', name: '赵鹏飞', position: 'PF', height: '208cm', weight: '108kg' },
  { number: '23', name: '李明远', position: 'SG', height: '198cm', weight: '93kg' },
  { number: '32', name: '孙浩然', position: 'PG', height: '185cm', weight: '79kg' },
  { number: '41', name: '周建国', position: 'C', height: '218cm', weight: '125kg' },
];

const positionLabels = {
  PG: '控球后卫',
  SG: '得分后卫',
  SF: '小前锋',
  PF: '大前锋',
  C: '中锋',
};

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-court-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-hoop-orange text-xs font-body font-semibold uppercase tracking-[0.3em] mb-3">
            本赛季阵容
          </p>
          <h2 className="font-heading font-black text-white uppercase leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            球队名单
          </h2>
        </div>

        {/* Roster Table */}
        <div className="overflow-x-auto rounded-2xl border border-court-border">
          <table className="w-full">
            <thead>
              <tr className="bg-court-dark border-b border-court-border">
                <th className="text-left px-6 py-4 text-gray-500 font-body text-xs uppercase tracking-widest font-semibold">号码</th>
                <th className="text-left px-6 py-4 text-gray-500 font-body text-xs uppercase tracking-widest font-semibold">姓名</th>
                <th className="text-left px-6 py-4 text-gray-500 font-body text-xs uppercase tracking-widest font-semibold hidden md:table-cell">位置</th>
                <th className="text-left px-6 py-4 text-gray-500 font-body text-xs uppercase tracking-widest font-semibold hidden md:table-cell">身高</th>
                <th className="text-left px-6 py-4 text-gray-500 font-body text-xs uppercase tracking-widest font-semibold hidden md:table-cell">体重</th>
              </tr>
            </thead>
            <tbody>
              {roster.map((player, i) => (
                <tr
                  key={player.number}
                  className={`border-b border-court-border last:border-0 hover:bg-court-dark/60 transition-colors duration-150 ${i % 2 === 0 ? 'bg-court-card/30' : 'bg-transparent'}`}
                >
                  <td className="px-6 py-4">
                    <span className="font-heading font-black text-hoop-orange text-xl">#{player.number}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-heading font-bold text-white text-lg uppercase">{player.name}</span>
                    <span className="md:hidden ml-2 text-gray-500 font-body text-xs">{positionLabels[player.position]}</span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="inline-block bg-hoop-orange/15 text-hoop-orange text-xs font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      {positionLabels[player.position]}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-gray-300 font-body text-sm">{player.height}</span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-gray-300 font-body text-sm">{player.weight}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Team;
