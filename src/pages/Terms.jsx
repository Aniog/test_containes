export default function Terms() {
  return (
    <>
      <section className="bg-primary-900 text-white">
        <div className="section-container section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Terms of Service</h1>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto">
            Last updated: July 2026
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-3xl mx-auto">
          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-primary-900 mt-8">1. Services</h2>
            <p>
              SSourcing China provides sourcing, supplier verification, factory audit, quality
              inspection, production follow-up, and shipping coordination services to international
              buyers. Our services are delivered based on agreed scopes of work and service agreements.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">2. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information about your requirements</li>
              <li>Communicate promptly and clearly with our team</li>
              <li>Pay agreed fees for services rendered</li>
              <li>Not use our services for any unlawful or prohibited activities</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">3. Limitation of Liability</h2>
            <p>
              SSourcing China acts as an intermediary and service provider. We conduct thorough
              assessments and inspections, but we cannot guarantee the performance, solvency, or
              conduct of third-party suppliers. Our liability is limited to the value of the
              services we provide, as stated in our service agreement.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">4. Intellectual Property</h2>
            <p>
              All materials, reports, and documentation provided by SSourcing China are our
              intellectual property and may not be reproduced or distributed without our prior
              written consent.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">5. Confidentiality</h2>
            <p>
              We treat all client information as confidential and will not disclose it to third
              parties without your consent, except as required by law or as necessary to perform
              our services.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">6. Termination</h2>
            <p>
              Either party may terminate a service agreement with written notice. Fees for services
              already rendered will be payable upon termination.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of the People's Republic of China. Any disputes
              shall be resolved through friendly negotiation or, if necessary, in the courts of
              Guangzhou, China.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">8. Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:info@ssourcingchina.com" className="text-primary-700 underline">info@ssourcingchina.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}