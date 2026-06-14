import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', message: '' })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@artitectmachinery.com',
      link: 'mailto:info@artitectmachinery.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '1234 Industrial Boulevard, Manufacturing District, CA 90210',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 8:00 AM - 6:00 PM PST',
      link: null,
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 id="contact-title" className="section-title">Ready to Transform Your Production?</h2>
          <p id="contact-subtitle" className="section-subtitle">
            Contact our team for product information, custom solutions, 
            or to schedule a demonstration of our machinery.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-info-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">
                    <item.icon size={20} />
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">{item.title}</span>
                    {item.link ? (
                      <a href={item.link} className="contact-info-value contact-info-link">
                        {item.content}
                      </a>
                    ) : (
                      <span className="contact-info-value">{item.content}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your requirements, the type of materials you work with, and any specific needs for your production line..."
              />
            </div>
            <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
            {status === 'success' && (
              <p className="form-success">Thank you for your inquiry! Our team will respond within 24 hours.</p>
            )}
            {error && <p className="form-error">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
