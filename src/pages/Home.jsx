import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { Zap, Shield, Heart, Mountain, Star, ArrowRight } from 'lucide-react'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Mountain Biker",
      content: "CycleLife helped me find the perfect mountain bike. The quality is outstanding and the service is exceptional!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Daily Commuter",
      content: "My city bike from CycleLife has transformed my daily commute. Comfortable, reliable, and stylish!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Weekend Rider",
      content: "The team at CycleLife really knows their stuff. They matched me with the perfect road bike for my weekend adventures.",
      rating: 5
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-title" className="text-5xl font-bold text-gray-900 mb-6">
                Ride Into Adventure
              </h1>
              <p id="hero-subtitle" className="text-xl text-gray-700 mb-8">
                Discover the perfect bike for your journey. From mountain trails to city streets, we have the ride that matches your lifestyle and unleashes your potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/bikes" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Explore Bikes
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="hero-bike-main-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Mountain bike on scenic trail"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose CycleLife?
            </h2>
            <p id="features-subtitle" className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're passionate about providing the best cycling experience with quality bikes, expert service, and unmatched support for every rider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 id="feature-performance-title" className="text-xl font-semibold text-gray-900 mb-2">
                High Performance
              </h3>
              <p id="feature-performance-desc" className="text-gray-700">
                Premium components and engineering for maximum speed, efficiency, and reliability on every ride.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 id="feature-safety-title" className="text-xl font-semibold text-gray-900 mb-2">
                Safety First
              </h3>
              <p id="feature-safety-desc" className="text-gray-700">
                Advanced braking systems, durable frames, and safety features to keep you secure on any terrain.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 id="feature-comfort-title" className="text-xl font-semibold text-gray-900 mb-2">
                Ultimate Comfort
              </h3>
              <p id="feature-comfort-desc" className="text-gray-700">
                Ergonomic design and adjustable components ensure a comfortable ride for hours of cycling enjoyment.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 id="feature-adventure-title" className="text-xl font-semibold text-gray-900 mb-2">
                Built for Adventure
              </h3>
              <p id="feature-adventure-desc" className="text-gray-700">
                Rugged construction and versatile design ready for mountain trails, city streets, and everything between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="featured-bikes-title" className="text-4xl font-bold text-gray-900 mb-4">
              Featured Bikes
            </h2>
            <p id="featured-bikes-subtitle" className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our most popular bikes, carefully selected for their quality, performance, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                data-strk-img-id="featured-mountain-bike-x1y2z3"
                data-strk-img="[featured-mountain-desc] [featured-mountain-title] [featured-bikes-subtitle] [featured-bikes-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Featured mountain bike"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 id="featured-mountain-title" className="text-2xl font-bold text-gray-900 mb-2">
                  TrailMaster Pro
                </h3>
                <p id="featured-mountain-desc" className="text-gray-700 mb-4">
                  Professional-grade mountain bike with full suspension and premium components for serious trail riders.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$2,499</span>
                  <Link 
                    to="/bikes" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                data-strk-img-id="featured-road-bike-a4b5c6"
                data-strk-img="[featured-road-desc] [featured-road-title] [featured-bikes-subtitle] [featured-bikes-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Featured road bike"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 id="featured-road-title" className="text-2xl font-bold text-gray-900 mb-2">
                  SpeedRunner Elite
                </h3>
                <p id="featured-road-desc" className="text-gray-700 mb-4">
                  Lightweight carbon fiber road bike designed for speed and endurance on long distance rides.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$1,899</span>
                  <Link 
                    to="/bikes" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                data-strk-img-id="featured-city-bike-d7e8f9"
                data-strk-img="[featured-city-desc] [featured-city-title] [featured-bikes-subtitle] [featured-bikes-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Featured city bike"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 id="featured-city-title" className="text-2xl font-bold text-gray-900 mb-2">
                  Urban Cruiser
                </h3>
                <p id="featured-city-desc" className="text-gray-700 mb-4">
                  Comfortable and stylish city bike perfect for daily commuting and leisurely neighborhood rides.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$899</span>
                  <Link 
                    to="/bikes" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/bikes" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Bikes
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what real cyclists say about their CycleLife experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">15,000+</div>
              <div className="text-blue-100">Happy Riders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">750+</div>
              <div className="text-blue-100">Bike Models</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">20</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.5%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Cycling Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Visit our store today or browse our online catalog to find the perfect bike for your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Visit Our Store
            </Link>
            <Link 
              to="/bikes" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home