import strings from '../../data/strings.en.js';

export default function ClosingCTA() {
  return (
    <section className="section-padding bg-white" style={{ padding: '60px 20px' }}>
      <div className="content-container text-center">
        <h2 className="text-hero-dark text-[28px] md:text-[36px] mb-[10px] mt-0">
          {strings.closingHeadline}
        </h2>
        <p className="text-body-gray text-[15px] mb-[25px] mt-0 max-w-[500px] mx-auto">
          {strings.closingSub}
        </p>
        <a href="/s/ai_site_builder" className="btn-primary-lg text-[15px] px-[32px]">
          {strings.closingCTA}
        </a>
      </div>
    </section>
  );
}