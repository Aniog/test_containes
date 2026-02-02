import React from 'react'
import { Phone, Mail, MapPin, Star, Users, Award, Clock } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Instructors",
      description: "Certified professionals with years of experience in equestrian training"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Award-Winning Facility",
      description: "State-of-the-art stables and training grounds recognized for excellence"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Flexible Scheduling",
      description: "Lessons available 7 days a week to fit your busy lifestyle"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Bella Equestrian Center transformed my daughter's confidence. The instructors are patient and skilled."
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Professional facility with top-notch care for both horses and riders. Highly recommend!"
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "From beginner to advanced, they have programs for everyone. Amazing experience!"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Bella</span> Equestrian Center
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover the joy of horseback riding at our premier equestrian facility. 
            From beginner lessons to advanced training, we offer exceptional programs 
            for riders of all ages and skill levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Book a Lesson
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Programs
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Bella Equestrian Center?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beginner Lessons</h3>
              <p className="text-gray-600 mb-4">Perfect for first-time riders. Learn basic horsemanship and riding fundamentals in a safe, supportive environment.</p>
              <p className="text-blue-600 font-semibold">Starting at $75/lesson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Training</h3>
              <p className="text-gray-600 mb-4">Competitive training for experienced riders. Focus on dressage, jumping, and show preparation.</p>
              <p className="text-blue-600 font-semibold">Starting at $120/lesson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Summer Camps</h3>
              <p className="text-gray-600 mb-4">Week-long programs for children and teens. Combine riding lessons with horse care education.</p>
              <p className="text-blue-600 font-semibold">$450/week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Riders Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Visit Us Today
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-700">(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-700">info@bellaequestrian.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700">123 Equestrian Way<br />Countryside, CA 90210</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Bella Equestrian Center</h3>
          <p className="text-gray-300 mb-4">
            Creating lifelong bonds between horses and riders since 1995
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bella Equestrian Center. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home