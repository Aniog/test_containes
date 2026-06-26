import { forwardRef } from 'react';

const ContactCTA = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true" className="text-slate-50">
          <defs>
            <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-900">
        <h2 id="contact-title" className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Upgrade Your Capability?
        </h2>
        <p id="contact-subtitle" className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Contact our specialist team today for pricing, custom requests, and expert advice on which double folding machine fits your shop.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:sales@artitectmachinery.com"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
          >
            Email Sales Team
          </a>
          <a
            href="tel:+15551234567"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-slate-900 border-2 border-slate-200 hover:border-orange-500 hover:text-orange-600 transition-colors"
          >
            Call +1 (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
});

ContactCTA.displayName = 'ContactCTA';

export default ContactCTA;