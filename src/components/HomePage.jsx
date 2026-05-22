import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChefHat, Clock, Star, MapPin, Phone, Mail } from 'lucide-react'

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-burger-orange" />
              <span className="text-2xl font-bold text-burger-dark">Burger Craft Co.</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-burger-dark hover:text-burger-orange transition-colors font-medium">Menu</a>
              <a href="#about" className="text-burger-dark hover:text-burger-orange transition-colors font-medium">About</a>
              <a href="#contact" className="text-burger-dark hover:text-burger-orange transition-colors font-medium">Contact</a>
              <Button className="bg-burger-orange hover:bg-orange-600 text-white">Order Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-burger-orange/90 to-burger-brown/90"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Handcrafted Burgers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Made with love, premium ingredients, and artisanal techniques for the perfect bite every time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-burger-orange hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                View Our Menu
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-burger-orange font-semibold px-8 py-4 text-lg">
                Order Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-burger-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burger-dark mb-4">Why Choose Burger Craft Co.?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about creating the perfect burger experience with quality ingredients and expert craftsmanship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-burger-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChefHat className="h-8 w-8 text-burger-orange" />
                </div>
                <h3 className="text-xl font-semibold text-burger-dark mb-4">Handcrafted Daily</h3>
                <p className="text-gray-600">
                  Every burger is made fresh to order using traditional techniques and premium ingredients sourced locally.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-burger-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-burger-orange" />
                </div>
                <h3 className="text-xl font-semibold text-burger-dark mb-4">Fast & Fresh</h3>
                <p className="text-gray-600">
                  Quick service without compromising quality. Most orders ready in 10-15 minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-burger-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-burger-orange" />
                </div>
                <h3 className="text-xl font-semibold text-burger-dark mb-4">Award Winning</h3>
                <p className="text-gray-600">
                  Recognized as the "Best Burger in Town" three years running by local food critics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Burgers */}
      <section id="menu" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burger-dark mb-4">Featured Burgers</h2>
            <p className="text-lg text-gray-600">Our most popular handcrafted creations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Classic Craft Burger */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  alt="Classic Craft Burger"
                  className="w-full h-48 object-cover"
                  data-strk-img-id="classic-burger-1a2b3c"
                  data-strk-img="[classic-description] [classic-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 id="classic-title" className="text-xl font-semibold text-burger-dark">Classic Craft Burger</h3>
                  <Badge className="bg-burger-orange text-white">Popular</Badge>
                </div>
                <p id="classic-description" className="text-gray-600 mb-4">
                  Grass-fed beef patty, aged cheddar, crispy lettuce, tomato, red onion, and our signature craft sauce on a brioche bun.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-burger-orange">$14.99</span>
                  <Button className="bg-burger-orange hover:bg-orange-600">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            {/* BBQ Bacon Deluxe */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  alt="BBQ Bacon Deluxe Burger"
                  className="w-full h-48 object-cover"
                  data-strk-img-id="bbq-burger-4d5e6f"
                  data-strk-img="[bbq-description] [bbq-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 id="bbq-title" className="text-xl font-semibold text-burger-dark">BBQ Bacon Deluxe</h3>
                  <Badge variant="secondary">New</Badge>
                </div>
                <p id="bbq-description" className="text-gray-600 mb-4">
                  Double beef patty, crispy bacon, smoked cheddar, onion rings, and tangy BBQ sauce on a toasted sesame bun.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-burger-orange">$17.99</span>
                  <Button className="bg-burger-orange hover:bg-orange-600">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            {/* Veggie Craft Burger */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  alt="Veggie Craft Burger"
                  className="w-full h-48 object-cover"
                  data-strk-img-id="veggie-burger-7g8h9i"
                  data-strk-img="[veggie-description] [veggie-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 id="veggie-title" className="text-xl font-semibold text-burger-dark">Veggie Craft Burger</h3>
                  <Badge className="bg-green-500 text-white">Vegetarian</Badge>
                </div>
                <p id="veggie-description" className="text-gray-600 mb-4">
                  House-made black bean and quinoa patty, avocado, sprouts, tomato, and herb aioli on a whole grain bun.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-burger-orange">$13.99</span>
                  <Button className="bg-burger-orange hover:bg-orange-600">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-burger-orange text-burger-orange hover:bg-burger-orange hover:text-white">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-burger-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-burger-dark mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2018, Burger Craft Co. started as a passion project to bring authentic, handcrafted burgers to our community. We believe that great food brings people together, and every burger we make is a testament to that belief.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Using only the finest locally-sourced ingredients and time-honored cooking techniques, we create burgers that are not just meals, but experiences. From our signature craft sauce to our hand-cut fries, everything is made with care and attention to detail.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-burger-orange text-white px-4 py-2 text-sm">Locally Sourced</Badge>
                <Badge className="bg-burger-brown text-white px-4 py-2 text-sm">Handcrafted Daily</Badge>
                <Badge className="bg-green-500 text-white px-4 py-2 text-sm">Sustainable</Badge>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Our restaurant kitchen"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                data-strk-img-id="kitchen-story-j1k2l3"
                data-strk-img="[story-description] [story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="hidden">
                <span id="story-title">Professional burger kitchen</span>
                <span id="story-description">Chef preparing handmade burgers in modern restaurant kitchen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-burger-dark mb-4">Visit Us Today</h2>
            <p className="text-lg text-gray-600">Come taste the difference that handcrafted makes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-burger-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-burger-dark mb-2">Location</h3>
                <p className="text-gray-600">
                  123 Craft Street<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-burger-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-burger-dark mb-2">Phone</h3>
                <p className="text-gray-600">
                  (555) 123-BURGER<br />
                  <span className="text-sm">Call for takeout orders</span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-burger-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-burger-dark mb-2">Hours</h3>
                <p className="text-gray-600">
                  Mon-Thu: 11am-9pm<br />
                  Fri-Sat: 11am-10pm<br />
                  Sun: 12pm-8pm
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-burger-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-8 w-8 text-burger-orange" />
                <span className="text-2xl font-bold">Burger Craft Co.</span>
              </div>
              <p className="text-gray-300 mb-4">
                Handcrafted burgers made with love, premium ingredients, and artisanal techniques for the perfect bite every time.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Instagram
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#menu" className="hover:text-burger-orange transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-burger-orange transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-burger-orange transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-burger-orange transition-colors">Catering</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-BURGER</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@burgercraftco.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Craft Street</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Burger Craft Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}