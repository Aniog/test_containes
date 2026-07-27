export default function Privacy() {
  return (
    <>
      <section className="bg-primary-900 text-white">
        <div className="section-container section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto">
            Last updated: July 2026
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-3xl mx-auto">
          <div className="prose prose-neutral max-w-none space-y-6 text-neutral-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-primary-900 mt-8">1. Introduction</h2>
            <p>
              SSourcing China ("we", "our", "us") respects your privacy and is committed to protecting
              your personal data. This privacy policy explains how we collect, use, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information such as name, email address, phone number, and company name</li>
              <li>Project requirements and product specifications you share with us</li>
              <li>Communication records between you and our team</li>
              <li>Website usage data through cookies and analytics tools</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your sourcing inquiries and provide quotes</li>
              <li>To manage our sourcing and quality control services</li>
              <li>To communicate with you about your projects and orders</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">4. Data Sharing</h2>
            <p>
              We do not sell your personal information to third parties. We may share your data
              with trusted partners who assist us in delivering our services, subject to confidentiality
              agreements.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data held by us.
              You may also withdraw consent for data processing at any time by contacting us.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at{' '}
              <a href="mailto:info@ssourcingchina.com" className="text-primary-700 underline">info@ssourcingchina.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}