import React from 'react'
import { Phone, Mail, MapPin, Star, Users, Award, Heart, ChevronRight } from 'lucide-react'
import './App.css'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-800">Bella Horse Center</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-amber-800 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Welcome to
                <span className="text-amber-800 block">Bella Horse Center</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the joy of horseback riding in a safe, professional environment. 
                From beginner lessons to advanced training, we provide exceptional equestrian 
                education for riders of all ages and skill levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 transition-colors font-semibold">
                  Book a Lesson
                </button>
                <button className="border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-lg hover:bg-amber-800 hover:text-white transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-amber-200 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🐎</div>
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Premium Equestrian Experience</h3>
                <p className="text-amber-700">Professional instruction • Well-trained horses • Safe environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive equestrian services designed to meet the needs of every rider, 
              from first-time beginners to experienced equestrians.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Riding Lessons */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-amber-800 mb-4">
                <Users size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Riding Lessons</h3>
              <p className="text-gray-600 mb-6">
                Professional riding instruction for all ages and skill levels. Our certified 
                instructors provide personalized lessons in a safe, supportive environment.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight size={16} className="text-amber-800 mr-2" />Beginner to Advanced</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-amber-800 mr-2" />Private & Group Lessons</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-amber-800 mr-2" />Children & Adult Programs</li>
              </ul>
            </div>

            {/* Horse Boarding */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-amber-800 mb-4">
                <Heart size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Horse Boarding</h3>
              <p className="text-gray-600 mb-6">
                Premium boarding facilities with spacious stalls, daily turnout, and 
                comprehensive care for your beloved horses in a peaceful setting.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight size={16} className="text-amber-800 mr-2" />Full & Partial Board</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-amber-800 mr-2" />Daily Turnout</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-amber-800 mr-2" />24/7 Care</li>
              </ul>
            </div>

            {/* Training Programs */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-amber-800 mb-4">
                <Award size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-6">
                Advanced training programs for competitive riders and horses, including 
                dressage, jumping, and specialized discipline training.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight size={16} className="text-amber-800 mr-2" />Competition Prep</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-amber-800 mr-2" />Dressage & Jumping</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-amber-800 mr-2" />Horse Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Bella Horse Center</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 20 years, Bella Horse Center has been a premier destination for 
                equestrian education and horse care. Our facility spans 50 acres of beautiful 
                countryside, providing the perfect environment for both horses and riders.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We pride ourselves on maintaining the highest standards of safety, care, and 
                instruction. Our team of certified professionals is dedicated to fostering 
                a love of horses while building confidence and skill in every rider.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-2">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-2">50</div>
                  <div className="text-gray-600">Acres</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-2">30+</div>
                  <div className="text-gray-600">Horses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-2">500+</div>
                  <div className="text-gray-600">Happy Riders</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Star className="text-amber-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Certified Instructors</h3>
                </div>
                <p className="text-gray-600">
                  All our instructors are certified professionals with years of experience 
                  in equestrian education and horse training.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Heart className="text-amber-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Well-Cared Horses</h3>
                </div>
                <p className="text-gray-600">
                  Our horses receive the best care with regular veterinary checkups, 
                  proper nutrition, and plenty of love and attention.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Award className="text-amber-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Safety First</h3>
                </div>
                <p className="text-gray-600">
                  Safety is our top priority. We maintain strict safety protocols and 
                  provide all necessary equipment for a secure riding experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your equestrian journey? Contact us today to schedule 
              a visit or book your first lesson.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-amber-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Sat: 8AM-6PM</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-amber-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@bellahorses.com</p>
              <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
            </div>

            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-amber-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">123 Country Lane</p>
              <p className="text-gray-600">Horseville, ST 12345</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-amber-800 text-white px-12 py-4 rounded-lg hover:bg-amber-900 transition-colors font-semibold text-lg">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Bella Horse Center</h3>
              <p className="text-gray-300 mb-4">
                Your premier destination for equestrian education, horse boarding, 
                and professional training programs.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">i</span>
                </div>
                <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center"><Phone size={16} className="mr-2" />(555) 123-4567</p>
                <p className="flex items-center"><Mail size={16} className="mr-2" />info@bellahorses.com</p>
                <p className="flex items-center"><MapPin size={16} className="mr-2" />123 Country Lane, Horseville, ST</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {currentYear} Bella Horse Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
