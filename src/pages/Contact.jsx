import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <>
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              GET IN TOUCH
            </div>
            <h1 style={{ marginBottom: '1rem' }}>Contact Us</h1>
            <p className="text-muted" style={{ fontSize: '1.125rem' }}>
              Tell us about your sourcing requirements. We will review your needs and respond within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>SSourcing China</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ flexShrink: 0, color: 'var(--color-accent)', marginTop: '2px' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Office</div>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--color-text-light)' }}>
                      1205, Building 3<br />
                      1288 Huashan Road<br />
                      Shanghai 200050, China
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ flexShrink: 0, color: 'var(--color-accent)', marginTop: '2px' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Email</div>
                    <a href="mailto:info@ssourcingchina.com" style={{ fontSize: '0.9375rem' }}>
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ flexShrink: 0, color: 'var(--color-accent)', marginTop: '2px' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Phone</div>
                    <a href="tel:+862150000000" style={{ fontSize: '0.9375rem' }}>
                      +86 21 5000 0000
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flexShrink: 0, color: 'var(--color-accent)', marginTop: '2px' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Business Hours</div>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--color-text-light)' }}>
                      Monday – Friday<br />
                      8:30 AM – 6:00 PM (China Standard Time)
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>What to Include in Your Inquiry</div>
                <ul style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', paddingLeft: '1.25rem', margin: 0 }}>
                  <li>Product description and specifications</li>
                  <li>Estimated order quantity</li>
                  <li>Target price range (if known)</li>
                  <li>Quality requirements or certifications</li>
                  <li>Target delivery timeline</li>
                  <li>Destination country</li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          <div style={{ textAlign: 'left', marginTop: '1.5rem' }}>
            {[
              { q: 'How quickly will I receive a response?', a: 'We aim to respond to all inquiries within 24 business hours. Complex projects may require additional time for initial research.' },
              { q: 'Is there a fee for an initial consultation?', a: 'Initial consultations to discuss your requirements are provided at no charge. Project fees are quoted after we understand the scope of work.' },
              { q: 'Do you work with small order quantities?', a: 'We work with buyers across a range of volumes. Some suppliers have minimum order requirements; we will discuss this during the consultation.' },
              { q: 'Can you source products not listed on your website?', a: 'Yes. Contact us with your requirements and we will research availability and qualified suppliers.' },
            ].map((item, index) => (
              <div key={index} style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: index < 3 ? '1px solid var(--color-border)' : 'none' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.q}</div>
                <div style={{ fontSize: '0.9375rem', color: 'var(--color-text-light)' }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;