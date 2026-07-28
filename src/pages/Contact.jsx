import React, { useEffect, useRef } from 'react';
import strkImgConfig from '../strk-img-config.json';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      const config = strkImgConfig;
      return window.ImageHelper.loadImages(config, containerRef.current);
    }
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@ssourcingchina.com',
      href: 'mailto:info@ssourcingchina.com',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+86 21 5555 1234',
      href: 'tel:+862155551234',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Room 1208, Tower B, 88 Century Avenue, Pudong, Shanghai 200120, China',
      href: null,
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday – Friday, 8:30 AM – 6:00 PM (China Standard Time)',
      href: null,
    },
  ];

  return (
    <div ref={containerRef}>
      <div className="page-header">
        <div className="page-header-container">
          <h1 id="contact-hero-title">Contact Us</h1>
          <p id="contact-hero-subtitle">Tell us about your sourcing needs. We respond within 24 business hours.</p>
        </div>
      </div>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6" style={{ marginBottom: '2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <img
              data-strk-img-id="contact-hero"
              data-strk-img="[contact-hero-subtitle] [contact-hero-title] business contact"
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt="Contact us"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="max-w-1280 mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Get in Touch</h2>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                Whether you have a specific product in mind or are exploring sourcing options, 
                we are ready to help. Fill out the form or reach us directly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {contactInfo.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      backgroundColor: 'var(--color-bg-alt)', 
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--color-accent)'
                    }}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.125rem' }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} style={{ fontWeight: 500 }}>{item.value}</a>
                      ) : (
                        <div style={{ fontWeight: 500 }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem', padding: '1.25rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: '8px' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9375rem' }}>What to Include</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0 }}>
                  Product description, target price range, estimated quantity, required certifications, 
                  and your delivery timeline help us provide a more accurate response.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6 text-center">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>We Work With Buyers Worldwide</h2>
          <p style={{ color: 'var(--color-text-light)', maxWidth: '560px', margin: '0 auto' }}>
            Our clients are based in North America, Europe, Australia, and throughout Asia. 
            We communicate in English and support multiple time zones.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;