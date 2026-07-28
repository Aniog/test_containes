import React, { useEffect, useRef } from 'react';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      const config = strkImgConfig;
      return window.ImageHelper.loadImages(config, containerRef.current);
    }
  }, []);

  const values = [
    {
      title: 'Transparency',
      desc: 'We share what we find, including problems. You make decisions with complete information.',
    },
    {
      title: 'Practicality',
      desc: 'We focus on what actually works in real factories, not theoretical best practices.',
    },
    {
      title: 'Accountability',
      desc: 'We take responsibility for the suppliers we recommend and the inspections we conduct.',
    },
    {
      title: 'Long-term Perspective',
      desc: 'We build relationships that support repeat business, not one-time transactions.',
    },
  ];

  const team = [
    { role: 'Sourcing Managers', desc: 'Average 8+ years experience across electronics, consumer goods, and industrial categories.' },
    { role: 'Quality Engineers', desc: 'Trained in AQL standards, ISO systems, and product-specific testing protocols.' },
    { role: 'Logistics Coordinators', desc: 'Handle documentation, freight booking, and customs requirements daily.' },
  ];

  return (
    <div ref={containerRef}>
      <div className="page-header">
        <div className="page-header-container">
          <h1 id="about-hero-title">About SSourcing China</h1>
          <p id="about-hero-subtitle">Professional sourcing support based in Shanghai since 2014</p>
        </div>
      </div>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6" style={{ marginBottom: '2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <img
              data-strk-img-id="about-hero"
              data-strk-img="[about-hero-subtitle] [about-hero-title] professional team"
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt="About SSourcing China"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="max-w-1280 mx-auto px-6">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
              SSourcing China was founded to help overseas companies source from China more reliably. 
              We are not a trading company. We are an independent sourcing agent that works on your behalf.
            </p>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
              Our team is based in Shanghai with regular travel to manufacturing regions across China. 
              We speak fluent Mandarin and English, and we understand both factory operations and 
              international buyer expectations.
            </p>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-light)' }}>
              We have completed over 2,400 shipments for clients in 28 countries. Our clients range from 
              small e-commerce brands to established distributors and retailers.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">What We Believe</h2>
          <p className="section-subtitle">Principles that guide how we work</p>
          
          <div className="services-grid">
            {values.map((v, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'center', padding: '1.75rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ margin: 0, fontSize: '0.9375rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Experienced professionals who understand both sides of the supply chain</p>
          
          <div className="services-grid">
            {team.map((t, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>{t.role}</h3>
                <p style={{ margin: 0, fontSize: '0.9375rem' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6 text-center">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Ready to Work Together?</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
            Tell us about your sourcing needs and we will respond within 24 hours.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;