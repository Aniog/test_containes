import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
    console.log('Contact form submitted:', form);
  };

  const inputStyle = {
    background: '#21262D',
    border: '1px solid #30363D',
    color: '#E6EDF3',
    padding: '12px 16px',
    width: '100%',
    fontSize: '14px',
    fontFamily: '"Inter", sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '#8B949E',
    marginBottom: '8px',
  };

  return (
    <section id="contact" style={{ background: '#161B22', borderTop: '1px solid #21262D' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#C9A84C' }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#C9A84C' }}>
              Get in Touch
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: '"Playfair Display", serif', color: '#E6EDF3' }}
          >
            Request a Quote
          </h2>
          <p className="text-base max-w-xl" style={{ color: '#8B949E' }}>
            Tell us about your project and we'll recommend the right machine for your needs. Our engineers are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: '+1 (800) 278-4832',
                sub: 'Mon–Fri, 8am–6pm EST',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'info@artitectmachinery.com',
                sub: 'We reply within 24 hours',
              },
              {
                icon: MapPin,
                label: 'Address',
                value: 'Industrial Park, Suite 400',
                sub: 'Detroit, MI 48201, USA',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-5">
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                  >
                    <Icon size={18} style={{ color: '#C9A84C' }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase mb-1" style={{ color: '#8B949E' }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#E6EDF3' }}>{item.value}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#8B949E' }}>{item.sub}</div>
                  </div>
                </div>
              );
            })}

            {/* Certifications */}
            <div className="pt-8" style={{ borderTop: '1px solid #21262D' }}>
              <div className="text-xs tracking-widest uppercase mb-4" style={{ color: '#8B949E' }}>
                Certifications
              </div>
              <div className="flex flex-wrap gap-3">
                {['ISO 9001', 'CE Marked', 'UL Listed', 'RoHS Compliant'].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-3 py-1.5 tracking-wide"
                    style={{ border: '1px solid #30363D', color: '#C9D1D9' }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center py-16 px-8 h-full"
                style={{ background: '#0D1117', border: '1px solid #30363D' }}
              >
                <CheckCircle size={48} style={{ color: '#C9A84C' }} strokeWidth={1.5} className="mb-6" />
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: '"Playfair Display", serif', color: '#E6EDF3' }}
                >
                  Message Received
                </h3>
                <p className="text-sm max-w-sm" style={{ color: '#8B949E' }}>
                  Thank you for reaching out. One of our engineers will contact you within 24 hours with a tailored recommendation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ background: '#0D1117', border: '1px solid #30363D', padding: '40px' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderColor = '#30363D')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderColor = '#30363D')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderColor = '#30363D')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Product of Interest</label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderColor = '#30363D')}
                    >
                      <option value="" style={{ background: '#21262D' }}>Select a machine...</option>
                      <option value="double-folding-machine" style={{ background: '#21262D' }}>Double Folding Machine</option>
                      <option value="double-folder" style={{ background: '#21262D' }}>Double Folder</option>
                      <option value="sheet-metal-folder" style={{ background: '#21262D' }}>Sheet Metal Folder</option>
                      <option value="metal-folding-machine" style={{ background: '#21262D' }}>Metal Folding Machine</option>
                      <option value="metal-folder" style={{ background: '#21262D' }}>Metal Folder</option>
                      <option value="sheet-metal-folding-machine" style={{ background: '#21262D' }}>Sheet Metal Folding Machine</option>
                      <option value="other" style={{ background: '#21262D' }}>Not sure / Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project requirements, material types, production volume, and any specific needs..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                    onBlur={(e) => (e.target.style.borderColor = '#30363D')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 w-full text-sm tracking-widest uppercase font-semibold py-4 transition-all duration-200 cursor-pointer"
                  style={{
                    background: submitting ? '#8B949E' : '#C9A84C',
                    color: '#0D1117',
                    border: 'none',
                    opacity: submitting ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = '#D4B96A'; }}
                  onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = '#C9A84C'; }}
                >
                  {submitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
