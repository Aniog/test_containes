import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Factory, Package, Truck, FileCheck, ArrowRight, ChevronRight, HelpCircle } from 'lucide-react'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              We help overseas buyers find reliable suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Supplier Verification</h3>
              <p className="text-gray-600">Thorough factory audits and supplier validation</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Inspection</h3>
              <p className="text-gray-600">Pre-shipment and during production inspections</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Shipping Coordination</h3>
              <p className="text-gray-600">Logistics and shipping documentation support</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free consultation and sourcing quote today</p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
