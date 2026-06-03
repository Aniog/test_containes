import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { Wrench, Settings, Zap, Shield, Clock, CheckCircle, Calendar, Phone } from 'lucide-react'

function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      id: 1,
      name: "Basic Tune-Up",
      price: 75,
      duration: "1-2 hours",
      description: "Essential maintenance to keep your bike running smoothly.",
      includes: [
        "Brake adjustment and inspection",
        "Gear shifting adjustment",
        "Chain cleaning and lubrication",
        "Tire pressure check",
        "Safety inspection"
      ],
      icon: Settings,
      popular: false
    },
    {
      id: 2,
      name: "Complete Overhaul",
      price: 199,
      duration: "1-2 days",
      description: "Comprehensive service to restore your bike to like-new condition.",
      includes: [
        "Complete disassembly and cleaning",
        "All cables and housing replacement",
        "Bearing service and adjustment",
        "Brake pad and chain replacement",
        "Full safety inspection and test ride"
      ],
      icon: Wrench,
      popular: true
    },
    {
      id: 3,
      name: "Wheel Building",
      price: 125,
      duration: "2-3 days",
      description: "Custom wheel building and professional wheel truing services.",
      includes: [
        "Custom wheel building",
        "Professional wheel truing",
        "Spoke tension optimization",
        "Hub service and adjustment",
        "Quality guarantee"
      ],
      icon: Settings,
      popular: false
    },
    {
      id: 4,
      name: "E-Bike Service",
      price: 149,
      duration: "2-4 hours",
      description: "Specialized service for electric bikes and their components.",
      includes: [
        "Battery health check",
        "Motor inspection and cleaning",
        "Electrical system diagnosis",
        "Software updates",
        "Standard bike maintenance"
      ],
      icon: Zap,
      popular: false
    }
  ]

  const repairServices = [
    {
      name: "Flat Tire Repair",
      price: "From $15",
      description: "Quick puncture repair or tube replacement"
    },
    {
      name: "Brake Repair",
      price: "From $25",
      description: "Brake pad replacement and adjustment"
    },
    {
      name: "Chain Replacement",
      price: "From $35",
      description: "New chain installation and adjustment"
    },
    {
      name: "Gear Adjustment",
      price: "From $20",
      description: "Derailleur tuning and cable adjustment"
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Expert Bike Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Keep your bike in perfect condition with our professional maintenance and repair services. 
              Our certified mechanics have the expertise to handle any bike, from basic tune-ups to complete overhauls.
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from our comprehensive service packages designed to meet every maintenance need and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div key={service.id} className={`relative bg-white rounded-lg shadow-lg p-6 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">${service.price}</div>
                    <div className="text-gray-600 text-sm">{service.duration}</div>
                  </div>
                  
                  <p className="text-gray-700 text-center mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    service.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}>
                    Book Service
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Repairs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="repairs-title" className="text-4xl font-bold text-gray-900 mb-6">
                Quick Repairs
              </h2>
              <p id="repairs-desc" className="text-lg text-gray-700 mb-8">
                Need a quick fix? We offer fast, affordable repair services for common bike issues. 
                Most repairs can be completed while you wait.
              </p>
              
              <div className="space-y-4">
                {repairServices.map((repair, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <div>
                      <h3 className="font-semibold text-gray-900">{repair.name}</h3>
                      <p className="text-gray-600 text-sm">{repair.description}</p>
                    </div>
                    <div className="text-blue-600 font-semibold">{repair.price}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Quote
                </Link>
              </div>
            </div>
            
            <div>
              <img
                data-strk-img-id="bike-repair-shop-r1s2t3"
                data-strk-img="[repairs-desc] [repairs-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Bike repair shop"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Service?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our certified mechanics use only the best tools and parts to ensure your bike performs at its peak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Mechanics</h3>
              <p className="text-gray-700">
                Our team is certified by leading bike manufacturers and industry organizations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-700">
                Most services completed within 24-48 hours, with express options available.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-700">
                All work is guaranteed for 90 days. If you're not satisfied, we'll make it right.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Parts</h3>
              <p className="text-gray-700">
                We use only genuine OEM and premium aftermarket parts for all repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your bike service online or call us to discuss your specific needs. 
            We're here to keep you riding safely and smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Online
            </button>
            <Link 
              to="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* Service Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Maintenance Tips
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Keep your bike in great condition between services with these expert tips from our mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Weekly Checks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Check tire pressure</li>
                <li>• Test brakes before riding</li>
                <li>• Inspect chain for dirt/wear</li>
                <li>• Check for loose bolts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monthly Care</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Clean and lubricate chain</li>
                <li>• Wipe down frame and components</li>
                <li>• Check gear shifting</li>
                <li>• Inspect tires for wear</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal Service</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Professional tune-up</li>
                <li>• Brake pad inspection</li>
                <li>• Cable and housing check</li>
                <li>• Complete safety inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services