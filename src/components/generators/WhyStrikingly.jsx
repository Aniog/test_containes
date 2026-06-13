import strings from '../../data/strings';

const whyIcons = [
  // Lightning bolt - Live in seconds
  <svg key="lightning" aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M22 6L10 24H18L16 34L30 16H22L24 6H22Z" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
  </svg>,
  // Phone - Mobile by default
  <svg key="phone" aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="12" y="6" width="16" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
    <line x1="17" y1="29" x2="23" y2="29" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Tag - Free to start
  <svg key="tag" aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M8 20L8 10C8 8.9 8.9 8 10 8L20 8L32 20L20 32L8 20Z" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="2" fill="#8159BB" opacity="0.4" />
  </svg>,
];

const WhyStrikingly = () => {
  const { whyStrikingly } = strings.en;

  return (
    <section className="py-10 md:py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="font-heading uppercase text-h2-mobile md:text-h2-desktop text-heading m-0">
            {whyStrikingly.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyStrikingly.items.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="mb-4">
                {whyIcons[index]}
              </div>
              <h3 className="font-heading uppercase text-sm text-heading m-0 mb-2 tracking-wide font-bold">
                {item.title}
              </h3>
              <p className="text-sm text-body m-0 leading-relaxed max-w-[300px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStrikingly;
