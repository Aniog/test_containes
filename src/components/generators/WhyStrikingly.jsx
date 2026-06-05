import strings from '../../data/strings.en.js';

const IconLive = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <circle cx="18" cy="12" r="6" stroke="#8159BB" strokeWidth="1.2" />
    <path d="M8 28a10 10 0 0120 0" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M14 24a4 4 0 018 0" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconMobile = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <rect x="10" y="4" width="16" height="28" rx="3" stroke="#8159BB" strokeWidth="1.2" />
    <rect x="13" y="8" width="10" height="16" rx="1" stroke="#8159BB" strokeWidth="0.8" />
    <circle cx="18" cy="27" r="1.5" fill="#8159BB" />
  </svg>
);

const IconFree = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <rect x="8" y="6" width="20" height="24" rx="3" stroke="#8159BB" strokeWidth="1.2" />
    <path d="M18 14v8M14 18h8" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const icons = [IconLive, IconMobile, IconFree];

export default function WhyStrikingly() {
  return (
    <section className="section-padding bg-white">
      <div className="content-container">
        <h2 className="text-heading-gray text-[22px] md:text-[28px] mb-[30px] mt-0 text-center">
          {strings.whyHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {strings.whyItems.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="text-center max-w-[320px] mx-auto">
                <div className="mb-[15px] flex justify-center">
                  <Icon />
                </div>
                <span className="block text-hero-dark text-[15px] mb-[10px] font-heading font-bold uppercase">
                  {item.title}
                </span>
                <p className="text-body-gray text-[14px] m-0 leading-[1.5]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}