const PLATFORMS = [
  { name: 'Steam', color: 'bg-[#1b2838] border-[#66c0f4]/20', text: 'text-[#c7d5e0]', deals: '1,200+' },
  { name: 'Epic Games', color: 'bg-gray-800 border-gray-600/30', text: 'text-gray-100', deals: '300+' },
  { name: 'Nintendo', color: 'bg-red-900/50 border-red-500/20', text: 'text-red-200', deals: '450+' },
  { name: 'PlayStation', color: 'bg-blue-950/60 border-blue-500/20', text: 'text-blue-200', deals: '600+' },
  { name: 'Xbox', color: 'bg-green-950/60 border-green-500/20', text: 'text-green-200', deals: '500+' },
];

export default function PlatformBanner() {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-900/30 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">
          Covering All Major Platforms
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {PLATFORMS.map(p => (
            <div
              key={p.name}
              className={`${p.color} border rounded-xl p-4 text-center transition-all hover:scale-105 cursor-pointer`}
            >
              <div className={`text-lg font-black ${p.text} mb-1`}>{p.name}</div>
              <div className="text-xs text-gray-500">{p.deals} deals tracked</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
