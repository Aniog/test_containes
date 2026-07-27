const stats = [
  { number: '500+', label: 'Global Buyers Served' },
  { number: '12+', label: 'Years in Operation' },
  { number: '2,000+', label: 'Factory Audits Completed' },
  { number: '98%', label: 'On-Time Delivery Rate' },
];

const highlights = [
  'ISO 9001 certified quality management system',
  'Team based in Shenzhen — China\'s manufacturing hub',
  'Native English-speaking project managers',
  'Full transparency — you see what we see',
  'No factory commission — we work only for you',
  'Comprehensive NNN and IP protection agreements',
];

export default function HomeTrust() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Why Global Buyers Trust SSourcing China
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              We are not a directory or a marketplace. We are your boots on the ground in China —
              a dedicated team that works exclusively in your interest.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-lg p-5 text-center">
                  <p className="text-3xl font-bold text-brand-navy">{stat.number}</p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
              <ul className="space-y-4">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <div
                className="relative rounded-lg overflow-hidden aspect-[16/9]"
                data-strk-bg-id="home-trust-office-b8c9d0"
                data-strk-bg="[home-trust-subtitle] [home-trust-title]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="800"
              >
                <div className="absolute inset-0 bg-brand-navy/60 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <p className="text-lg font-semibold">Our Shenzhen Office</p>
                    <p className="text-sm text-gray-200 mt-1">Located in the heart of China's manufacturing ecosystem</p>
                  </div>
                </div>
              </div>
              <div className="hidden" id="home-trust-title">modern office in shenzhen china business district</div>
              <div className="hidden" id="home-trust-subtitle">professional team working at desks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
