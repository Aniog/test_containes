import strings from '../../data/strings';

const ClosingCTA = () => {
  const { closingCta } = strings.en;

  return (
    <section className="py-10 md:py-[60px]">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="font-heading uppercase text-h2-mobile md:text-h2-desktop text-heading m-0 mb-3">
          {closingCta.heading}
        </h2>
        <p className="text-body text-base mb-8 max-w-[440px] mx-auto">
          {closingCta.sub}
        </p>
        <a
          href={closingCta.buttonUrl}
          className="ai-gradient-bg text-white font-heading font-bold uppercase text-sm px-[15px] py-[9px] rounded-[4px] no-underline h-[44px] inline-flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          {closingCta.button}
        </a>
      </div>
    </section>
  );
};

export default ClosingCTA;
