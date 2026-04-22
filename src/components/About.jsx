import React from 'react'
import { Users, Clock, Award, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      number: "10,000+",
      label: "Happy Customers"
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-600" />,
      number: "8+",
      label: "Years Experience"
    },
    {
      icon: <Award className="w-8 h-8 text-pink-600" />,
      number: "50+",
      label: "Awards Won"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      number: "100%",
      label: "Made with Love"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Sweet Story
            </h2>
            <div className="w-24 h-1 bg-pink-600 mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Sweet Dreams Cake Shop began as a small family dream in 2015. What started 
                in our home kitchen with a passion for creating beautiful, delicious cakes 
                has grown into the community's favorite bakery.
              </p>
              
              <p className="text-lg">
                Our founder, Sarah Johnson, learned the art of baking from her grandmother, 
                who believed that every cake should tell a story and create lasting memories. 
                This philosophy continues to guide everything we do today.
              </p>
              
              <p className="text-lg">
                We use only the finest ingredients, sourced locally when possible, and every 
                cake is handcrafted with attention to detail that makes each creation unique. 
                From intimate celebrations to grand weddings, we're honored to be part of 
                your special moments.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-pink-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 italic">
                "To create not just cakes, but edible works of art that bring joy, 
                celebrate life's precious moments, and leave lasting sweet memories 
                in every bite."
              </p>
            </div>
          </div>

          {/* Right side - Visual Elements */}
          <div className="space-y-8">
            {/* Baker Image Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                👩‍🍳
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sarah Johnson</h3>
              <p className="text-pink-600 font-semibold mb-3">Master Baker & Founder</p>
              <p className="text-gray-600">
                "Every cake is a canvas, and every celebration deserves a masterpiece."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Makes Us Special
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h4>
              <p className="text-gray-600">
                We use only the finest ingredients, from Belgian chocolate to Madagascar vanilla, 
                ensuring every bite is exceptional.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Custom Designs</h4>
              <p className="text-gray-600">
                Every cake is uniquely designed to match your vision, from elegant wedding cakes 
                to whimsical birthday creations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Personal Touch</h4>
              <p className="text-gray-600">
                We work closely with each customer to understand their story and create 
                cakes that perfectly capture their special moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About