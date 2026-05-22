import React, { useState, useRef, useEffect } from 'react'
import { Heart, Users, Globe, Shield, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import './App.css'

function App() {
  const containerRef = useRef(null)
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    message: ''
  })

  const predefinedAmounts = [25, 50, 100, 250, 500]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmount = (value) => {
    setCustomAmount(value)
    setSelectedAmount(0)
  }

  const scrollToDonationForm = () => {
    const donationSection = document.getElementById('donation-form')
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDonate = (e) => {
    e.preventDefault()
    const amount = customAmount || selectedAmount
    toast.success(`Thank you for your generous donation of $${amount}!`, {
      description: 'This is a demo - no actual payment will be processed.',
      duration: 5000,
    })
    
    // Reset form after successful "donation"
    setTimeout(() => {
      setCustomAmount('')
      setSelectedAmount(50)
      setDonorInfo({ name: '', email: '', message: '' })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" ref={containerRef}>
      <Toaster position="top-right" />
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          </div>
          <h1 id="hero-title" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Make a Difference Today
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Your donation helps us create positive change in communities around the world. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3" onClick={scrollToDonationForm}>
              Donate Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="p-6">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25</h3>
              <p className="text-gray-600">Countries Reached</p>
            </div>
            <div className="p-6">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">$2.5M</h3>
              <p className="text-gray-600">Funds Raised</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donation-form" className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Donation Amount
            </h2>
            <p className="text-lg text-gray-600">
              Every dollar makes a difference in someone's life
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleDonate}>
              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      type="button"
                      variant={selectedAmount === amount ? "default" : "outline"}
                      className="h-12"
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Other:</span>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      className="pl-8"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold">Your Information</h3>
                <Input
                  placeholder="Full Name"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                  required
                />
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows="3"
                  placeholder="Optional message or dedication"
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                />
              </div>

              {/* Security Notice */}
              <div className="flex items-center gap-2 mb-6 p-4 bg-green-50 rounded-lg">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-800">
                  Your donation is secure and encrypted. We never store your payment information.
                </span>
              </div>

              {/* Donate Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg"
              >
                Donate ${customAmount || selectedAmount} Now
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-gray-600">
              See how your donation creates real change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">$25 Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Provides clean water for one family for an entire month, ensuring access to this basic necessity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">$50 Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Funds educational supplies for 5 children, giving them the tools they need to learn and grow.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">$100 Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Provides medical care and treatment for 10 people in underserved communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories of Impact
            </h2>
            <p className="text-lg text-gray-600">
              Hear from those whose lives have been changed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Thanks to the generous donations, my children now have access to clean water and education. 
                  Our entire community has been transformed."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria Santos</p>
                    <p className="text-sm text-gray-600">Community Leader, Guatemala</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The medical supplies and care provided through donations saved my daughter's life. 
                  I am forever grateful to all the donors."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-900">James Okoye</p>
                    <p className="text-sm text-gray-600">Father, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-red-500 mr-2" />
                <h3 className="text-2xl font-bold">DonateHope</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We're committed to creating positive change in communities worldwide through 
                transparent and impactful charitable work.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Shield className="w-4 h-4 mr-2" />
                <span>Registered 501(c)(3) Non-Profit Organization</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@donatehope.org</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Hope Street</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 DonateHope. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
