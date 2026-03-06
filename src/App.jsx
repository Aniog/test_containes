import React from 'react'
import { Phone, Mail, MapPin, Clock, Star, Users, Award, Heart } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Willowbrook Equestrian</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#facilities" className="text-gray-700 hover:text-blue-600 transition-colors">Facilities</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Experience the Magic of
              <span className="text-blue-600 block">Equestrian Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the joy of horseback riding at our premier equestrian center. From beginner lessons to advanced training, 
              we provide world-class instruction in a safe, welcoming environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book a Lesson
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Take a Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive equestrian programs designed for riders of all skill levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Riding Lessons</h3>
              <p className="text-gray-600 mb-6">
                Professional instruction for beginners to advanced riders. Individual and group lessons available 
                with certified instructors.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Beginner to Advanced levels</li>
                <li>• English & Western styles</li>
                <li>• Individual & Group sessions</li>
                <li>• Competition preparation</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Horse Boarding</h3>
              <p className="text-gray-600 mb-6">
                Premium boarding facilities with 24/7 care, spacious stalls, and access to trails and arenas.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Full & Partial board options</li>
                <li>• Daily turnout & exercise</li>
                <li>• Premium feed & hay</li>
                <li>• Veterinary coordination</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-6">
                Specialized training for both horse and rider, including competition preparation and behavioral training.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Horse training & conditioning</li>
                <li>• Competition coaching</li>
                <li>• Behavioral correction</li>
                <li>• Young horse development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities designed for the comfort and safety of both horses and riders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-900 font-semibold mb-1">Indoor Arenas</div>
                <div className="text-gray-600 text-sm">Climate-controlled training spaces</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <div className="text-gray-900 font-semibold mb-1">Outdoor Rings</div>
                <div className="text-gray-600 text-sm">All-weather footing surfaces</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">40</div>
                <div className="text-gray-900 font-semibold mb-1">Horse Stalls</div>
                <div className="text-gray-600 text-sm">Spacious & well-ventilated</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
                <div className="text-gray-900 font-semibold mb-1">Miles of Trails</div>
                <div className="text-gray-600 text-sm">Scenic riding paths</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Amenities</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  Heated viewing lounge
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  Professional tack shop
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  Wash stalls with hot water
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  Feed room & hay storage
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  24/7 security monitoring
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  Emergency veterinary access
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  Fire suppression systems
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-3" />
                  Professional staff on-site
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Willowbrook Equestrian</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 25 years, Willowbrook Equestrian has been the premier destination for horse enthusiasts 
                in the region. Founded by Sarah and Michael Thompson, our center combines traditional horsemanship 
                with modern training techniques.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that the bond between horse and rider is sacred, and our mission is to nurture that 
                relationship through expert instruction, exceptional care, and a supportive community environment.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Students</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-red-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
                    <p className="text-gray-600">Every horse receives individualized attention and care</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence in Training</h4>
                    <p className="text-gray-600">Certified instructors with decades of experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Focus</h4>
                    <p className="text-gray-600">Building lasting relationships within our equestrian family</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your equestrian journey? Contact us today to schedule a visit or book your first lesson.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      1234 Equestrian Way<br />
                      Willowbrook, CA 95123
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@willowbrookequestrian.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your riding experience and what you're looking for..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Willowbrook Equestrian</h3>
              <p className="text-gray-400 mb-4">
                Creating lasting bonds between horses and riders through expert instruction and compassionate care.
              </p>
              <p className="text-gray-400">
                © {new Date().getFullYear()} Willowbrook Equestrian Center. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Riding Lessons</li>
                <li>Horse Boarding</li>
                <li>Training Programs</li>
                <li>Competition Coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
