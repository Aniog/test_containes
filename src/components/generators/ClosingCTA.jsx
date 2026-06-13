import strings from '@/strings.en.js';

export default function ClosingCTA() {
  return (
    <section className="py-[60px]">
      <div className="section-container text-center">
        <h2 className="font-heading font-bold uppercase text-[28px] md:text-[36px] text-heading-dark leading-[1.2] mb-[10px]">
          {strings.closingHeading}
        </h2>
        <p className="text-body text-[14px] mb-[20px] max-w-[480px] mx-auto">
          {strings.closingSub}
        </p>
        <a href="/s/ai_site_builder" className="btn-primary btn-primary-large">
          {strings.closingCTA}
        </a>
      </div>
    </section>
  );
}