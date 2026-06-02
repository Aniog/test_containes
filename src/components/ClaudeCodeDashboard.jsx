import { useState, useEffect } from 'react';

const DITHER_TRACK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' x='0' y='0' fill='%23666' opacity='0.45'/%3E%3Crect width='1' height='1' x='2' y='2' fill='%23666' opacity='0.45'/%3E%3C/svg%3E")`;

function EinkProgressBar({ pct, height = 7 }) {
  const clamped = Math.min(100, Math.max(0, pct));
  return (
    <div
      className="w-full border border-[#1a1a1a] overflow-hidden"
      style={{ height, backgroundImage: DITHER_TRACK, backgroundColor: '#d0ccc4' }}
    >
      <div
        className="h-full bg-[#1a1a1a]"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

function ModelBar({ name, value, pct }) {
  return (
    <div className="mb-[10px]">
      <div className="flex items-baseline gap-1 mb-[3px]">
        <span className="font-bold text-[13px] text-[#1a1a1a]">{name}</span>
        <span className="text-[12px] text-[#1a1a1a]">{value} · {pct}%</span>
      </div>
      <EinkProgressBar pct={pct} height={8} />
    </div>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="flex justify-between items-baseline py-[2px]">
      <span className="text-[12px] text-[#1a1a1a]">{label}</span>
      <span className="text-[13px] font-medium text-[#1a1a1a]">{value}</span>
    </div>
  );
}

function MiniBarChart({ bars }) {
  const maxH = 20;
  const maxVal = Math.max(...bars.map(b => b.value), 1);
  return (
    <div className="flex items-end gap-[3px]" style={{ height: maxH }}>
      {bars.map((b, i) => {
        const h = b.value === 0 ? 3 : Math.max(4, Math.round((b.value / maxVal) * maxH));
        return (
          <div
            key={i}
            style={{
              width: 8,
              height: h,
              backgroundColor: b.value === 0 ? '#888' : '#1a1a1a',
            }}
          />
        );
      })}
    </div>
  );
}

function SpinnerIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="inline-block mr-[5px] align-middle">
      <circle cx="7" cy="7" r="5.5" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="7" cy="7" r="2" fill="#1a1a1a" />
    </svg>
  );
}

function SortArrow() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="inline-block ml-[4px] align-middle">
      <path d="M4.5 1.5L7 4.5H2L4.5 1.5Z" fill="#1a1a1a" />
      <path d="M4.5 7.5L2 4.5H7L4.5 7.5Z" fill="#1a1a1a" />
    </svg>
  );
}

export default function ClaudeCodeDashboard() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const pad = n => String(n).padStart(2, '0');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const updatedStr = `${months[now.getMonth()]} ${now.getDate()}, ${pad(now.getHours())}:${pad(now.getMinutes())}`;

  const data = {
    sessionPct: 0,
    weekPct: 7,
    sonnetPct: 0,
    maxMultiplier: '20x',
    activeCount: 1,
    resetInfo: 'Resets Jun 9, 5am (Europe/Dublin)',
    today: {
      input: '2K',
      output: '184K',
      cacheRead: '82.1M',
      cacheWrite: '2.1M',
      total: '84.4M',
      apiEquiv: '~$167',
      sessions: 3,
      messages: 550,
    },
    models: [
      { name: 'Opus', value: '327.0M', pct: 99 },
      { name: 'Haiku', value: '317K', pct: 0 },
      { name: 'Sonnet', value: '171K', pct: 0 },
    ],
    week: {
      tokens: '240.3M',
      cost: '~$463',
      sessions: 5,
      messages: 908,
      streak: 2,
      bars: [
        { value: 1 }, { value: 0 }, { value: 0 }, { value: 0 },
        { value: 3 }, { value: 8 }, { value: 5 },
      ],
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div
        className="w-full max-w-[820px] border-2 border-[#1a1a1a] rounded-[5px] overflow-hidden"
        style={{
          backgroundColor: '#e4e0d8',
          boxShadow: '4px 4px 0 #1a1a1a',
        }}
      >
        {/* ── Header ── */}
        <div className="px-4 pt-3 pb-2 border-b-2 border-[#1a1a1a]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[17px] font-bold tracking-[0.18em] text-[#1a1a1a] uppercase">
              CLAUDE CODE
            </span>
            <span className="text-[12px] text-[#1a1a1a] font-medium">
              Max {data.maxMultiplier}
              <span className="mx-[6px] text-[10px]">●</span>
              {data.activeCount} active
            </span>
          </div>

          {/* Usage bars */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div className="flex items-start gap-5">
              {[
                { label: 'Session', pct: data.sessionPct },
                { label: 'Week', pct: data.weekPct },
                { label: 'Sonnet', pct: data.sonnetPct },
              ].map(({ label, pct }) => (
                <div key={label} style={{ minWidth: 88 }}>
                  <div className="text-[11px] font-bold text-[#1a1a1a] mb-[3px]">
                    {label} {pct}%
                  </div>
                  <EinkProgressBar pct={pct} height={6} />
                </div>
              ))}
            </div>
            <span className="text-[11px] text-[#1a1a1a] sm:text-right sm:mt-[1px]">
              {data.resetInfo}
            </span>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="flex flex-col sm:flex-row">
          {/* Left panel — Today */}
          <div className="flex-1 px-4 py-3 border-b-2 sm:border-b-0 sm:border-r-2 border-[#1a1a1a]">
            <div className="flex items-center mb-[10px]">
              <span className="text-[13px] font-bold text-[#1a1a1a]">Today</span>
              <SortArrow />
            </div>

            <div className="space-y-[1px] mb-3">
              <StatRow label="Input" value={data.today.input} />
              <StatRow label="Output" value={data.today.output} />
              <StatRow label="Cache Read" value={data.today.cacheRead} />
              <StatRow label="Cache Write" value={data.today.cacheWrite} />
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-[#888] mb-2" />

            {/* Total — large */}
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-[12px] text-[#1a1a1a]">Total</span>
              <span className="text-[30px] font-bold leading-none text-[#1a1a1a]">
                {data.today.total}
              </span>
            </div>

            <div className="space-y-[1px]">
              <StatRow label="API equiv." value={data.today.apiEquiv} />
              <StatRow label="Sessions" value={data.today.sessions} />
              <StatRow label="Messages" value={data.today.messages} />
            </div>
          </div>

          {/* Right panel — Models + This Week */}
          <div className="flex-1 px-4 py-3">
            <div className="mb-3">
              <span className="text-[13px] font-bold text-[#1a1a1a] block mb-[10px]">
                Models (7d)
              </span>
              {data.models.map(m => (
                <ModelBar key={m.name} name={m.name} value={m.value} pct={m.pct} />
              ))}
            </div>

            <div className="border-t-2 border-[#1a1a1a] pt-3">
              <span className="text-[13px] font-bold text-[#1a1a1a] block mb-2">
                This Week
              </span>

              <div className="flex justify-between items-baseline mb-[3px]">
                <span className="text-[13px] font-bold text-[#1a1a1a]">
                  {data.week.tokens} tokens
                </span>
                <span className="text-[13px] font-bold text-[#1a1a1a]">
                  {data.week.cost}
                </span>
              </div>

              <div className="flex justify-between items-baseline mb-3">
                <span className="text-[12px] text-[#1a1a1a]">
                  {data.week.sessions} sessions
                </span>
                <span className="text-[12px] text-[#1a1a1a]">
                  {data.week.messages} msgs
                </span>
              </div>

              <div className="flex justify-between items-end">
                <MiniBarChart bars={data.week.bars} />
                <span className="text-[12px] font-bold text-[#1a1a1a]">
                  {data.week.streak}d streak
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div
          className="flex justify-between items-center px-4 py-[7px] border-t-2 border-[#1a1a1a]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' x='0' y='0' fill='%23555' opacity='0.25'/%3E%3Crect width='1' height='1' x='2' y='2' fill='%23555' opacity='0.25'/%3E%3C/svg%3E")`,
            backgroundColor: '#ccc8c0',
          }}
        >
          <span className="text-[11px] text-[#1a1a1a] font-medium">
            <SpinnerIcon />
            Claude Code Dashboard
          </span>
          <span className="text-[11px] text-[#1a1a1a]">
            Updated on {updatedStr}
          </span>
        </div>
      </div>
    </div>
  );
}
