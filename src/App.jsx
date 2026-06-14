import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Settings, Shield, Award, Clock, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    description: 'High-precision double folding machine for complex metal fabrication. Perfect for creating multiple bends in a single operation with exceptional accuracy.',
    icon: Settings,
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Industrial-grade double folder designed for continuous production. Features robust construction and intuitive controls for operator comfort.',
    icon: Settings,
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folder for precision bending operations. Ideal for HVAC, automotive, and general fabrication applications.',
    icon: Settings,
  },
  {
    id: 'sheet-metal-folding',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced sheet metal folding machine with computerized control system. Delivers consistent, repeatable results across large production runs.',
    icon: Settings,
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Heavy-duty metal folder engineered for demanding industrial environments. Built to last with premium components and craftsmanship.',
    icon: Settings,
  },
  {
    id: 'metal-folding',
    title: 'Metal Folding Machine',
    description: 'Professional metal folding machine combining power and precision. Features adjustable bending angles and multiple profile capabilities.',
    icon: Settings,
  },
]

const features = [
  {
    title: 'Precision Engineering',
    description: 'Every machine is manufactured to exact tolerances, ensuring consistent, accurate bends every time.',
    icon: Award,
  },
  {
    title: 'Industrial Durability',
    description: 'Built with heavy-duty components designed to withstand demanding production environments.',
    icon: Shield,
  },
  {
    title: 'Easy Operation',
    description: 'Intuitive controls and clear interfaces make our machines accessible to operators of all skill levels.',
    icon: Settings,
  },
  {
    title: 'Fast Delivery',
    description: 'Efficient manufacturing processes ensure quick turnaround without compromising quality.',
    icon: Clock,
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('idle')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1000)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-navy-700 tracking-tight">
                ARTITECT
              </span>
              <span className="text-2xl font-light text-steel-500 ml-1">
                MACHINERY
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-600 hover:text-navy-700 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-slate-600 hover:text-navy-700 font-medium transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-navy-700 font-medium transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-navy-700 font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-navy-700 font-medium transition-colors"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')}>
                Get Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 text-slate-600 hover:text-navy-700 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left py-2 text-slate-600 hover:text-navy-700 font-medium"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left py-2 text-slate-600 hover:text-navy-700 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-slate-600 hover:text-navy-700 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-slate-600 hover:text-navy-700 font-medium"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full mt-2">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-700 to-slate-800 pt-20"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Precision Engineering for
            <br />
            <span className="text-amber-400">Sheet Metal Fabrication</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            ARTITECT MACHINERY delivers premium double folding machines and metal folding 
            equipment engineered for accuracy, durability, and performance in industrial applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => scrollToSection('products')}
              size="lg"
              className="text-lg px-8"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-navy-700"
            >
              Request Quote
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 sm:gap-16 text-slate-300">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-slate-600" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
              <div className="text-sm">Machines Delivered</div>
            </div>
            <div className="w-px h-12 bg-slate-600" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">98%</div>
              <div className="text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-700 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Discover our comprehensive lineup of sheet metal folding machines, 
              designed to meet the demands of modern industrial fabrication.
            </p>
            <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:border-amber-500/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-navy-700/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <product.icon className="w-7 h-7 text-navy-700 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                  <button className="mt-4 inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-700 mb-6">
                Why Choose ARTITECT MACHINERY?
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                We combine decades of engineering expertise with cutting-edge manufacturing 
                to deliver machines that exceed industry standards.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle className="w-6 h-6 text-amber-400" />
                    <span>ISO 9001 Certified Manufacturing</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle className="w-6 h-6 text-amber-400" />
                    <span>2-Year Comprehensive Warranty</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle className="w-6 h-6 text-amber-400" />
                    <span>Lifetime Technical Support</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle className="w-6 h-6 text-amber-400" />
                    <span>On-Site Installation & Training</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle className="w-6 h-6 text-amber-400" />
                    <span>Custom Configuration Available</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <CheckCircle className="w-6 h-6 text-amber-400" />
                    <span>Global Spare Parts Supply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <Settings className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p>Company Image</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 rounded-xl p-6 text-white">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-700 mb-6">
                Building Trust Through Quality
              </h2>
              <p className="text-lg text-slate-500 mb-6">
                Since 1998, ARTITECT MACHINERY has been at the forefront of sheet metal 
                fabrication technology. Our commitment to precision engineering and 
                customer satisfaction has made us a trusted partner for manufacturers worldwide.
              </p>
              <p className="text-lg text-slate-500 mb-8">
                Every machine that leaves our facility undergoes rigorous quality testing 
                to ensure it meets our exacting standards. We believe in building 
                relationships that last as long as our machines.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-navy-700">500+</div>
                  <div className="text-slate-500">Machines Installed</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-navy-700">30+</div>
                  <div className="text-slate-500">Countries Served</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-navy-700">50+</div>
                  <div className="text-slate-500">Expert Engineers</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-navy-700">24/7</div>
                  <div className="text-slate-500">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Ready to upgrade your fabrication capabilities? Contact our team 
                to discuss your requirements and find the perfect solution for your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Call Us</div>
                    <div className="text-white font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email Us</div>
                    <div className="text-white font-medium">sales@artitectmachinery.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Visit Us</div>
                    <div className="text-white font-medium">
                      1234 Industrial Boulevard<br />
                      Manufacturing District, MD 12345
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-navy-700 mb-6">
                Request a Quote
              </h3>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! We'll be in touch shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white tracking-tight">
                  ARTITECT
                </span>
                <span className="text-2xl font-light text-slate-400 ml-1">
                  MACHINERY
                </span>
              </div>
              <p className="text-slate-400 max-w-md">
                Leading manufacturer of precision sheet metal folding machines. 
                Engineering excellence for industrial applications worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+1 (555) 123-4567</li>
                <li>sales@artitectmachinery.com</li>
                <li>Mon - Fri: 9AM - 6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
