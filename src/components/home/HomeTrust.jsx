const stats = [
  { value: '500+', label: 'Sourcing Projects Completed' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const trustPoints = [
  'China-based team with local market expertise',
  'Bilingual staff — English and Mandarin',
  'No hidden fees — transparent pricing model',
  'Independent from suppliers — we work for you',
  'Established network across major manufacturing hubs',
  'Detailed written reports for every audit and inspection',
];

export default function HomeTrust() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Your Trusted Partner<br />on the Ground in China
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Unlike online platforms, we are physically present in China. Our team visits
              factories, speaks directly with suppliers, and represents your interests at
              every stage — from sourcing to delivery.
            </p>
            <ul className="space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Shenzhen', desc: 'Electronics & Tech Hub' },
              { title: 'Guangzhou', desc: 'Apparel & Trade Fairs' },
              { title: 'Yiwu', desc: 'Small Goods & Wholesale' },
              { title: 'Dongguan', desc: 'Furniture & Manufacturing' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/10 border border-white/20 rounded-xl p-5">
                <div className="text-white font-semibold mb-1">{title}</div>
                <div className="text-slate-400 text-sm">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
