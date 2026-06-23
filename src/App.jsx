import { useState, useEffect } from 'react'
import './App.css'

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

const FactoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
    <path d="M17 18h1"></path>
    <path d="M12 18h1"></path>
    <path d="M7 18h1"></path>
  </svg>
)

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
)

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="font-['Playfair_Display'] text-2xl font-bold" style={{ color: isScrolled ? '#1a1a2e' : 'white' }}>
              ARTITECT
            </span>
            <span className="font-['Playfair_Display'] text-2xl font-light ml-1" style={{ color: isScrolled ? '#1a1a2e' : 'white' }}>
              MACHINERY
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="font-medium transition-colors hover:text-[#e94560]" style={{ color: isScrolled ? '#1a1a2e' : 'white' }}>Products</a>
            <a href="#about" className="font-medium transition-colors hover:text-[#e94560]" style={{ color: isScrolled ? '#1a1a2e' : 'white' }}>About</a>
            <a href="#features" className="font-medium transition-colors hover:text-[#e94560]" style={{ color: isScrolled ? '#1a1a2e' : 'white' }}>Why Us</a>
            <a href="#contact" className="btn btn-primary">Get Quote</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? '#1a1a2e' : 'white' }}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#products" className="font-medium text-[#1a1a2e] py-2" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#about" className="font-medium text-[#1a1a2e] py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#features" className="font-medium text-[#1a1a2e] py-2" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
            <a href="#contact" className="btn btn-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>Get Quote</a>
          </div>
        </div>
      )}
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] text-white mb-6 fade-in">
            Precision Metal{' '}
            <span className="text-[#e94560]">Folding</span>{' '}
            Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 fade-in fade-in-delay-1">
            Leading manufacturer of premium sheet metal folding machines. 
            Engineered for excellence, built for performance.
          </p>
          <div className="flex flex-wrap gap-4 fade-in fade-in-delay-2">
            <a href="#products" className="btn btn-primary">
              View Products
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

// Features Section
function Features() {
  const features = [
    {
      icon: <FactoryIcon />,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art production facilities ensuring precision and consistency in every machine we build.'
    },
    {
      icon: <SettingsIcon />,
      title: 'Custom Engineering',
      description: 'Tailored solutions to meet your specific requirements. Our team works closely with you to deliver optimal results.'
    },
    {
      icon: <AwardIcon />,
      title: 'Quality Certified',
      description: 'ISO certified manufacturing process with rigorous quality control at every stage of production.'
    },
    {
      icon: <UsersIcon />,
      title: 'Global Support',
      description: 'Worldwide service network with 24/7 technical support and comprehensive spare parts availability.'
    }
  ]

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-4">
            Why Choose <span className="text-[#e94560]">ARTITECT</span>
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto">
            We combine decades of industry experience with cutting-edge technology to deliver exceptional metal folding solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg transition-all duration-300 hover:shadow-xl group"
              style={{ backgroundColor: '#f8f9fa' }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-[#e94560] group-hover:bg-[#e94560] group-hover:text-white transition-colors" style={{ backgroundColor: 'rgba(233, 69, 96, 0.1)' }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">{feature.title}</h3>
              <p className="text-[#6c757d]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Products Section
function Products() {
  const products = [
    {
      name: 'Double Folding Machine',
      description: 'High-precision dual-axis folding system for complex metal bending operations. Features automatic material handling and digital control.',
      keywords: ['double folding machine', 'metal folder']
    },
    {
      name: 'Double Folder',
      description: 'Industrial-grade double folder with enhanced capacity and speed. Perfect for high-volume production environments.',
      keywords: ['double folder', 'sheet metal folder']
    },
    {
      name: 'Sheet Metal Folder',
      description: 'Versatile sheet metal folding machine with adjustable angles and precision guides. Ideal for various industrial applications.',
      keywords: ['sheet metal folder', 'sheet metal folding machine']
    },
    {
      name: 'Metal Folder Machine',
      description: 'Heavy-duty metal folder machine with robust construction and advanced automation features for continuous operation.',
      keywords: ['metal folder machine', 'metal folding machine']
    }
  ]

  return (
    <section id="products" className="section" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-4">
            Our <span className="text-[#e94560]">Products</span>
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto">
            Industry-leading sheet metal folding machines designed for precision, durability, and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Product Image Placeholder */}
              <div 
                className="h-64 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-white/20 rounded-lg rotate-45 group-hover:rotate-0 transition-transform duration-500"></div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/60 text-sm font-medium">Product {index + 1}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-['Playfair_Display'] text-[#1a1a2e] mb-3 group-hover:text-[#e94560] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#6c757d] mb-6">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.keywords.map((keyword, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ backgroundColor: 'rgba(233, 69, 96, 0.1)', color: '#e94560' }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 font-semibold text-[#e94560] hover:gap-3 transition-all"
                >
                  Request Details <ChevronRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function About() {
  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' },
    { value: '5000+', label: 'Machines Delivered' },
    { value: '99%', label: 'Customer Satisfaction' }
  ]

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div 
              className="rounded-lg overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}
            >
              <div className="aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <FactoryIcon />
                  <p className="text-white/60 mt-4">Manufacturing Excellence</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div 
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-lg -z-10"
              style={{ backgroundColor: '#e94560' }}
            ></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-6">
              Engineering <span className="text-[#e94560]">Excellence</span> Since 1998
            </h2>
            <p className="text-lg text-[#6c757d] mb-6">
              At ARTITECT MACHINERY, we have been at the forefront of sheet metal folding technology for over two decades. Our commitment to innovation and quality has made us a trusted partner for industries worldwide.
            </p>
            <p className="text-[#6c757d] mb-8">
              Our state-of-the-art facilities combine traditional craftsmanship with modern technology, ensuring every machine meets the highest standards of precision and reliability. We understand that each customer has unique needs, which is why we offer customized solutions tailored to your specific requirements.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="text-3xl font-bold text-[#e94560] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#6c757d]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-['Playfair_Display'] text-white mb-4">
            Get In <span className="text-[#e94560]">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your metal folding operations? Contact us today for a personalized quote.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#e94560] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#e94560] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#e94560] transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#e94560] transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a2e] text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4">
              ARTITECT<span className="font-light">MACHINERY</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Leading manufacturer of precision sheet metal folding machines since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-400 hover:text-[#e94560] transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#e94560] transition-colors">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-[#e94560] transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#e94560] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-400 hover:text-[#e94560] transition-colors">Double Folding Machine</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-[#e94560] transition-colors">Double Folder</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-[#e94560] transition-colors">Sheet Metal Folder</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-[#e94560] transition-colors">Metal Folding Machine</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>info@artitectmachinery.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Industrial District<br />Manufacturing City, MC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ARTITECT MACHINERY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
