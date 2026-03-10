import React from 'react'
import { MapPin, Clock, Users, Award, Flame, Palette } from 'lucide-react'

const AboutSection = () => {
  const craftingSteps = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Shaping",
      description: "Master artisans hand-shape each piece on the potter's wheel with precision and artistry"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "First Firing",
      description: "Pieces are fired at 1000°C to create the bisque, preparing them for glazing"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Glazing & Decoration",
      description: "Intricate patterns are painted by hand using traditional techniques and mineral glazes"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Final Firing",
      description: "A second firing at 1300°C creates the final lustrous finish and vibrant colors"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Art of 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                {" "}Jingdezhen
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              For over a millennium, Jingdezhen has been the heart of Chinese porcelain craftsmanship. 
              Known as the "Porcelain Capital of the World," this ancient city has produced the finest 
              ceramics for emperors, scholars, and tea connoisseurs throughout history.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our teacups represent the pinnacle of this tradition, where each piece is meticulously 
              crafted using techniques passed down through generations. From the selection of the finest 
              kaolin clay to the final firing in traditional kilns, every step honors the legacy of 
              Jingdezhen's master artisans.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-slate-600">Years of Heritage</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-slate-600">Master Artisans</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl p-8 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center" 
                alt="Jingdezhen pottery workshop"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Jingdezhen</div>
                    <div className="text-sm text-slate-600">Jiangxi, China</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crafting Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Crafting Process
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each teacup undergoes a meticulous process that can take weeks to complete, 
              ensuring the highest quality and artistic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftingSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Features */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Jingdezhen Teacups?
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the perfect harmony of tradition, artistry, and functionality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Timeless Tradition</h4>
              <p className="text-slate-300">
                Techniques refined over centuries ensure each piece meets the highest standards of quality and beauty.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Master Craftsmanship</h4>
              <p className="text-slate-300">
                Created by skilled artisans who have dedicated their lives to perfecting the art of porcelain making.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Unmatched Quality</h4>
              <p className="text-slate-300">
                Each teacup is individually inspected to ensure it meets our exacting standards for perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection