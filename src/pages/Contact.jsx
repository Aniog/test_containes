import { useState, useRef, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Contact = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productCategory: '',
      message: ''
    })
  }

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for a free sourcing consultation</p>
        </div>

        <style>{`
          .page-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
            padding: 140px 0 80px;
            text-align: center;
          }

          .page-header h1 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 16px;
          }

          .page-header p {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            max-width: 600px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .page-header {
              padding: 120px 0 60px;
            }
            .page-header h1 {
              font-size: 32px;
            }
          }
        `}</style>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p className="form-desc">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {submitStatus === 'success' ? (
                <div className="success-message card">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. Our team will contact you within 24 hours.</p>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setSubmitStatus(null)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
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
                    <label htmlFor="productCategory">Product Category</label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics</option>
                      <option value="home-kitchen">Home & Kitchen</option>
                      <option value="textiles">Textiles & Apparel</option>
                      <option value="industrial">Industrial Equipment</option>
                      <option value="packaging">Packaging</option>
                      <option value="toys">Toys & Gifts</option>
                      <option value="automotive">Automotive</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your sourcing needs, product requirements, and any questions you have..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card card">
                <h3>Get In Touch</h3>
                <p>Have questions? We'd love to help you with your China sourcing needs.</p>
                
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="info-label">Email</span>
                      <a href="mailto:info@ssourcingchina.com">info@ssourcingchina.com</a>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="info-label">Phone</span>
                      <a href="tel:+862112345678">+86 21 1234 5678</a>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="info-label">Office</span>
                      <span>Shanghai, China</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="info-label">Response Time</span>
                      <span>Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="office-image">
                <div className="image-placeholder"
                  data-strk-img-id="office-img-1"
                  data-strk-img="[office-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                />
                <h4 id="office-title">Our Shanghai Office</h4>
              </div>

              <div className="what-to-expect card">
                <h4>What to Expect</h4>
                <ul>
                  <li><CheckCircle size={16} /> Response within 24 hours</li>
                  <li><CheckCircle size={16} /> Free initial consultation</li>
                  <li><CheckCircle size={16} /> No obligation quote</li>
                  <li><CheckCircle size={16} /> Customized sourcing plan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .contact-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 64px;
          }

          .contact-form-wrapper h2 {
            font-size: 28px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .form-desc {
            font-size: 16px;
            color: var(--text-secondary);
            margin-bottom: 32px;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .form-group label {
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary);
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 14px 16px;
            border: 2px solid var(--border);
            border-radius: 4px;
            font-size: 15px;
            font-family: inherit;
            transition: border-color 0.2s;
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: var(--primary);
          }

          .form-group textarea {
            resize: vertical;
            min-height: 120px;
          }

          .btn-submit {
            padding: 16px 32px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .btn-submit:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          .success-message {
            text-align: center;
            padding: 48px;
          }

          .success-icon {
            color: var(--accent);
            margin-bottom: 20px;
          }

          .success-message h3 {
            font-size: 28px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 12px;
          }

          .success-message p {
            font-size: 16px;
            color: var(--text-secondary);
            margin-bottom: 24px;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .info-card {
            padding: 32px;
          }

          .info-card h3 {
            font-size: 22px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .info-card > p {
            font-size: 15px;
            color: var(--text-secondary);
            margin-bottom: 24px;
          }

          .info-items {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .info-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
          }

          .info-icon {
            width: 44px;
            height: 44px;
            background: var(--bg-secondary);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            flex-shrink: 0;
          }

          .info-label {
            display: block;
            font-size: 12px;
            color: var(--text-muted);
            text-transform: uppercase;
            margin-bottom: 2px;
          }

          .info-item a,
          .info-item span {
            font-size: 15px;
            color: var(--text-primary);
            font-weight: 500;
          }

          .office-image {
            border-radius: 12px;
            overflow: hidden;
          }

          .office-image .image-placeholder {
            height: 200px;
            background: var(--bg-tertiary);
            background-size: cover;
            background-position: center;
          }

          .office-image h4 {
            padding: 16px;
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
            background: white;
          }

          .what-to-expect {
            padding: 24px;
          }

          .what-to-expect h4 {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 16px;
          }

          .what-to-expect ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .what-to-expect li {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 0;
            font-size: 15px;
            color: var(--text-primary);
          }

          .what-to-expect li svg {
            color: var(--accent);
          }

          @media (max-width: 1024px) {
            .contact-grid {
              grid-template-columns: 1fr;
              gap: 48px;
            }
            .form-row {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>
    </div>
  )
}

export default Contact