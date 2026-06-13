import strings from '../strings.en.js';

export default function ClosingCTA() {
  return (
    <section className="py-[60px] md:py-[80px] text-center">
      <div className="max-w-content mx-auto px-5">
        <h2 className="text-[28px] md:text-[36px] text-heading-gray m-0 mb-[10px]">
          {strings.closingHeading}
        </h2>
        <p className="text-[14px] md:text-[16px] text-body-gray mb-[20px] max-w-[480px] mx-auto leading-relaxed">
          {strings.closingSub}
        </p>
        <a href="/s/ai_site_builder" className="btn-primary btn-primary-lg px-[24px] inline-flex">
          {strings.closingCTA}
        </a>
      </div>
    </section>
  );
}