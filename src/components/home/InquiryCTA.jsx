import InquiryForm from "@/components/shared/InquiryForm.jsx";

export default function InquiryCTA() {
  return (
    <section id="quote" className="section bg-[#F6F1EA] border-t border-[#E5E1D8]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">Start Your Sourcing Project</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-[#0F172A] leading-tight">
              Tell us what you need to source.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#475569] max-w-md">
              Fill in the form and our sourcing team will get back to you within one business day with a shortlist of verified suppliers and a clear plan for your project.
            </p>

            <ul className="mt-8 space-y-4 text-[14.5px] text-[#0F172A]">
              {[
                "Free initial consultation — no commitment required",
                "Typical reply within one business day",
                "NDA available on request",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C8553D]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}