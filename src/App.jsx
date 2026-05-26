import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { Coffee, MapPin, Clock, Phone, Mail, Star, Heart, Leaf } from 'lucide-react'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-amber-50" ref={containerRef}>
      {/* Navigation */}
      <nav className="bg-amber-900 text-amber-50 py-4 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8" />
            <span className="text-2xl font-bold">Brew & Bean</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-amber-200 transition-colors">Home</a>
            <a href="#menu" className="hover:text-amber-200 transition-colors">Menu</a>
            <a href="#about" className="hover:text-amber-200 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-200 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-amber-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-amber-50 px-4">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-bold mb-6">
            Brew & Bean Cafe
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Artisan coffee, fresh pastries, and warm community vibes in the heart of downtown
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-800 hover:bg-amber-700 text-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Menu
            </button>
            <button className="border-2 border-amber-50 text-amber-50 hover:bg-amber-50 hover:text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Us
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="menu-title" className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Our Menu
            </h2>
            <p id="menu-subtitle" className="text-xl text-amber-800 max-w-2xl mx-auto">
              Carefully crafted beverages and fresh baked goods made with love
            </p>
          </div>

          {/* Coffee Menu */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-amber-950 mb-8 text-center">Coffee & Beverages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Signature Espresso", price: "$3.50", desc: "Rich, bold espresso with notes of chocolate and caramel" },
                { name: "Vanilla Latte", price: "$4.75", desc: "Smooth espresso with steamed milk and vanilla syrup" },
                { name: "Caramel Macchiato", price: "$5.25", desc: "Espresso with vanilla milk and caramel drizzle" },
                { name: "Cold Brew", price: "$4.00", desc: "Smooth, refreshing cold-steeped coffee" },
                { name: "Chai Tea Latte", price: "$4.50", desc: "Spiced tea blend with steamed milk" },
                { name: "Hot Chocolate", price: "$3.75", desc: "Rich cocoa with whipped cream and marshmallows" }
              ].map((item, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-amber-950">{item.name}</h4>
                    <span className="text-lg font-bold text-amber-800">{item.price}</span>
                  </div>
                  <p className="text-amber-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Food Menu */}
          <div>
            <h3 className="text-3xl font-bold text-amber-950 mb-8 text-center">Fresh Baked Goods</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Croissant", price: "$3.25", desc: "Buttery, flaky pastry baked fresh daily" },
                { name: "Blueberry Muffin", price: "$2.75", desc: "Moist muffin bursting with fresh blueberries" },
                { name: "Avocado Toast", price: "$8.50", desc: "Multigrain bread with smashed avocado and seasonings" },
                { name: "Breakfast Sandwich", price: "$6.75", desc: "Egg, cheese, and bacon on a toasted English muffin" },
                { name: "Banana Bread", price: "$3.00", desc: "Homemade banana bread with walnuts" },
                { name: "Chocolate Chip Cookie", price: "$2.25", desc: "Warm, gooey cookie with premium chocolate chips" }
              ].map((item, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-amber-950">{item.name}</h4>
                    <span className="text-lg font-bold text-amber-800">{item.price}</span>
                  </div>
                  <p className="text-amber-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
                Our Story
              </h2>
              <p id="about-subtitle" className="text-xl text-amber-800 mb-6">
                Founded in 2018 by coffee enthusiasts Maria and James
              </p>
              <div className="space-y-4 text-amber-700 text-lg">
                <p>
                  What started as a dream to create the perfect neighborhood coffee shop has grown into 
                  a beloved community gathering place. We source our beans directly from sustainable farms 
                  and roast them in small batches to ensure the freshest, most flavorful coffee.
                </p>
                <p>
                  Our commitment goes beyond great coffee. We believe in supporting local artisans, 
                  using eco-friendly practices, and creating a warm, welcoming space where everyone feels at home.
                </p>
              </div>
              <div className="flex gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <Leaf className="w-6 h-6 text-amber-600" />
                  <span className="text-amber-800 font-semibold">Sustainable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-amber-600" />
                  <span className="text-amber-800 font-semibold">Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-amber-600" />
                  <span className="text-amber-800 font-semibold">Quality</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Cozy cafe interior with warm lighting"
                className="rounded-lg shadow-lg w-full"
                data-strk-img-id="about-img-7d4b2e"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Visit Us
            </h2>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Come experience the perfect blend of great coffee and warm hospitality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-amber-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-amber-950 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-semibold text-amber-950">Address</p>
                      <p className="text-amber-700">123 Coffee Street, Downtown District</p>
                      <p className="text-amber-700">City, State 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-semibold text-amber-950">Phone</p>
                      <p className="text-amber-700">(555) 123-BREW</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-semibold text-amber-950">Email</p>
                      <p className="text-amber-700">hello@brewandbean.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-amber-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-amber-950 mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-amber-600" />
                  Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-amber-950 font-semibold">Monday - Friday</span>
                    <span className="text-amber-700">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-950 font-semibold">Saturday</span>
                    <span className="text-amber-700">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-950 font-semibold">Sunday</span>
                    <span className="text-amber-700">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-amber-200 rounded-lg shadow-md h-96 flex items-center justify-center">
              <div className="text-center text-amber-800">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl font-semibold">Interactive Map</p>
                <p>123 Coffee Street, Downtown District</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="w-8 h-8" />
            <span className="text-2xl font-bold">Brew & Bean</span>
          </div>
          <p className="text-amber-200 mb-4">
            Crafting exceptional coffee experiences since 2018
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <span>© 2024 Brew & Bean Cafe</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
