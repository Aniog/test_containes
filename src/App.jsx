import React from 'react'
import { Phone, Mail, MapPin, Star, Users, Award, Clock, ChevronRight } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-900">Willowbrook Equestrian</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#facilities" className="text-gray-700 hover:text-purple-600 transition-colors">Facilities</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Book a Lesson
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-purple-50 to-violet-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Experience the 
                <span className="text-purple-600"> Magic</span> of 
                <span className="text-violet-600"> Horsemanship</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the joy of riding at our premier equestrian center. From beginner lessons to advanced training, 
                we offer world-class instruction in a safe, welcoming environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                  Start Your Journey
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-purple-400 hover:bg-purple-50 transition-colors">
                  Schedule a Tour
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-violet-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <span className="text-4xl">🐎</span>
                  </div>
                  <p className="text-purple-700 font-medium">Professional Horse Training</p>
                </div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-500 text-sm">Rating</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold">500+</span>
                  <span className="text-gray-500 text-sm">Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From your first time in the saddle to competitive training, we offer comprehensive programs 
              tailored to riders of all skill levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Riding Lessons */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏇</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Riding Lessons</h3>
              <p className="text-gray-600 mb-6">
                Professional instruction for all ages and skill levels. Our certified instructors provide 
                personalized lessons in a safe, supportive environment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Beginner to Advanced
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Private & Group Lessons
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  English & Western Styles
                </li>
              </ul>
              <div className="text-2xl font-bold text-purple-600 mb-2">From $75/lesson</div>
            </div>

            {/* Horse Boarding */}
            <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-violet-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Horse Boarding</h3>
              <p className="text-gray-600 mb-6">
                Premium boarding facilities with spacious stalls, daily turnout, and professional care. 
                Your horse will receive the attention they deserve.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Full & Partial Board
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Daily Turnout
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  24/7 Care
                </li>
              </ul>
              <div className="text-2xl font-bold text-violet-600 mb-2">From $450/month</div>
            </div>

            {/* Training Programs */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-6">
                Advanced training for competitive riders and horses. Prepare for shows, competitions, 
                and achieve your equestrian goals with expert guidance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  Competition Prep
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  Horse Training
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  Specialized Programs
                </li>
              </ul>
              <div className="text-2xl font-bold text-indigo-600 mb-2">Custom Pricing</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facilities provide the perfect environment for learning, training, 
              and caring for horses with the highest standards of safety and comfort.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Premium Indoor Arena</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our climate-controlled indoor arena features premium footing and excellent lighting, 
                allowing for year-round training regardless of weather conditions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                  <span className="font-medium">120' x 200' riding space</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                  <span className="font-medium">Climate controlled environment</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                  <span className="font-medium">Professional lighting system</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                  <span className="font-medium">Premium sand & fiber footing</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-violet-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-3xl">🏟️</span>
                </div>
                <p className="text-purple-700 font-medium">Indoor Training Arena</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stables */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Modern Stables</h4>
              <p className="text-gray-600 mb-4">
                Spacious 12x12 stalls with automatic waterers, excellent ventilation, and daily cleaning.
              </p>
              <div className="text-sm text-gray-500">
                <div className="flex justify-between mb-2">
                  <span>Stalls Available:</span>
                  <span className="font-medium text-purple-600">24</span>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="font-medium text-purple-600">12' x 12'</span>
                </div>
              </div>
            </div>

            {/* Outdoor Arena */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-violet-100">
              <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">☀️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Outdoor Arena</h4>
              <p className="text-gray-600 mb-4">
                Large outdoor arena perfect for jumping, dressage, and general riding with natural lighting.
              </p>
              <div className="text-sm text-gray-500">
                <div className="flex justify-between mb-2">
                  <span>Size:</span>
                  <span className="font-medium text-violet-600">150' x 250'</span>
                </div>
                <div className="flex justify-between">
                  <span>Footing:</span>
                  <span className="font-medium text-violet-600">Sand & Rubber</span>
                </div>
              </div>
            </div>

            {/* Pastures */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-indigo-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Turnout Pastures</h4>
              <p className="text-gray-600 mb-4">
                Multiple fenced pastures with shelters, automatic waterers, and rotational grazing.
              </p>
              <div className="text-sm text-gray-500">
                <div className="flex justify-between mb-2">
                  <span>Pastures:</span>
                  <span className="font-medium text-indigo-600">8 Fields</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Acres:</span>
                  <span className="font-medium text-indigo-600">45 Acres</span>
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
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Willowbrook Equestrian</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 25 years, Willowbrook Equestrian has been a premier destination for horse enthusiasts 
                of all levels. Founded by Sarah and Michael Thompson, our center combines traditional horsemanship 
                with modern training techniques.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that the bond between horse and rider is sacred, and our mission is to foster that 
                connection through expert instruction, exceptional care, and a supportive community.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">25+ Years</div>
                    <div className="text-gray-600 text-sm">Experience</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">500+</div>
                    <div className="text-gray-600 text-sm">Happy Students</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">4.9/5</div>
                    <div className="text-gray-600 text-sm">Rating</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">7 Days</div>
                    <div className="text-gray-600 text-sm">Open Weekly</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <span className="text-4xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
                <p className="text-gray-600 mb-6">
                  Our certified instructors bring decades of combined experience in English and Western riding, 
                  dressage, jumping, and horse training.
                </p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Meet the Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Ready to start your equestrian journey? Contact us today to schedule a tour, 
              book a lesson, or learn more about our services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-purple-200">(555) 123-4567</div>
                    <div className="text-purple-300 text-sm">Mon-Sun: 7AM - 7PM</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-purple-200">info@willowbrookequestrian.com</div>
                    <div className="text-purple-300 text-sm">We respond within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-purple-200">1234 Country Road</div>
                    <div className="text-purple-200">Willowbrook, CA 95123</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-700">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-purple-700/50 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-purple-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-purple-700/50 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-purple-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-purple-700/50 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-purple-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-purple-700/50 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-purple-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-purple-700/50 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white">
                      <option>Riding Lessons</option>
                      <option>Horse Boarding</option>
                      <option>Training Programs</option>
                      <option>Facility Tour</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-3 bg-purple-700/50 border border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-purple-300"
                      placeholder="Tell us about your riding experience and goals..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-950 to-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-purple-200">Willowbrook Equestrian</h3>
              <p className="text-purple-300 mb-6 max-w-md">
                Creating lasting bonds between horses and riders through expert instruction, 
                exceptional care, and a supportive community.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <span className="text-sm">📘</span>
                </div>
                <div className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <span className="text-sm">📷</span>
                </div>
                <div className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <span className="text-sm">🐦</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-200">Quick Links</h4>
              <ul className="space-y-2 text-purple-300">
                <li><a href="#home" className="hover:text-purple-100 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-purple-100 transition-colors">Services</a></li>
                <li><a href="#facilities" className="hover:text-purple-100 transition-colors">Facilities</a></li>
                <li><a href="#about" className="hover:text-purple-100 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-purple-100 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-200">Services</h4>
              <ul className="space-y-2 text-purple-300">
                <li>Riding Lessons</li>
                <li>Horse Boarding</li>
                <li>Training Programs</li>
                <li>Summer Camps</li>
                <li>Birthday Parties</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-800 mt-12 pt-8 text-center text-purple-300">
            <p>&copy; {new Date().getFullYear()} Willowbrook Equestrian Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
