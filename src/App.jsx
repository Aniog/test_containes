import React, { useState } from 'react'
import { Heart, Flower, Sun, Sparkles, Mail, User, MessageSquare, Send, AlertCircle } from 'lucide-react'
import { submitContactForm } from './api/contact.js'

function App() {
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitError('')

    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        setSubmitMessage('Thank you for your message! We\'ve received your inquiry and will get back to you soon.')
        setFormData({ name: '', email: '', message: '', subject: '' })
      } else {
        setSubmitError(result.error || 'Failed to submit your message. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-yellow-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 py-20">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Flower className="w-20 h-20 text-pink-600 animate-pulse" />
              <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            Tulips
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover the enchanting beauty of nature's most beloved spring flowers
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* About Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Sun className="w-10 h-10 text-yellow-500" />
                The Magic of Tulips
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tulips are among the most recognizable and beloved flowers in the world. 
                With their elegant cup-shaped blooms and vibrant colors, they herald the 
                arrival of spring and bring joy to gardens everywhere.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Originally from Central Asia, tulips have captured hearts across the globe 
                with their simple yet stunning beauty. Each bloom is a masterpiece of nature's 
                artistry, painted in hues that range from the softest pastels to the most 
                vibrant jewel tones.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-yellow-200 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <Flower className="w-32 h-32 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Spring's Herald</h3>
                  <p className="text-gray-600">
                    Tulips bloom in early spring, bringing color after winter's gray
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why We Love Tulips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-400">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Symbol of Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Tulips represent perfect love and elegance, making them a favorite for 
                romantic gestures and special occasions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-400">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bright Colors</h3>
              <p className="text-gray-600 leading-relaxed">
                From sunny yellows to passionate pinks, tulips come in a rainbow 
                of colors to brighten any space.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-400">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Easy to Grow</h3>
              <p className="text-gray-600 leading-relaxed">
                Tulips are surprisingly easy to cultivate, making them perfect 
                for both novice and experienced gardeners.
              </p>
            </div>
          </div>
        </section>

        {/* Color Showcase */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            A Spectrum of Beauty
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-3xl p-12 text-center shadow-xl">
              <Flower className="w-24 h-24 text-yellow-700 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-yellow-800 mb-4">Golden Yellow</h3>
              <p className="text-yellow-700 text-lg">
                Bright and cheerful, yellow tulips symbolize sunshine, happiness, 
                and new beginnings. They're perfect for lifting spirits and 
                celebrating life's joyful moments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-200 to-pink-400 rounded-3xl p-12 text-center shadow-xl">
              <Flower className="w-24 h-24 text-pink-700 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-pink-800 mb-4">Soft Pink</h3>
              <p className="text-pink-700 text-lg">
                Gentle and romantic, pink tulips represent affection, caring, 
                and good wishes. They bring a touch of elegance and warmth 
                to any garden or bouquet.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                <Mail className="w-10 h-10 text-pink-500" />
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about tulips or want to share your gardening experience? 
                We'd love to hear from you!
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Contact Info Side */}
                <div className="bg-gradient-to-br from-pink-400 to-yellow-400 p-12 text-white">
                  <div className="h-full flex flex-col justify-center">
                    <Flower className="w-16 h-16 mb-6 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                    <p className="text-white/90 mb-8 leading-relaxed">
                      Whether you're a seasoned gardener or just starting your tulip journey, 
                      we're here to help you create the garden of your dreams.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5" />
                        </div>
                        <span>hello@tulipgarden.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Flower className="w-5 h-5" />
                        </div>
                        <span>Growing beautiful gardens since 2020</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Side */}
                <div className="p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        <Sparkles className="w-4 h-4 inline mr-2" />
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-colors"
                        placeholder="What's your inquiry about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your tulip questions or gardening experience..."
                      />
                    </div>

                    {submitMessage && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-700 text-sm flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          {submitMessage}
                        </p>
                      </div>
                    )}

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-700 text-sm flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          {submitError}
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-pink-400 to-yellow-400 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Saving to Database...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      * Required fields. Your information will be stored securely in our database.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 rounded-3xl p-16 shadow-2xl">
          <Flower className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Plant Your Own Tulip Garden
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the joy of watching these beautiful flowers bloom in your own space. 
            Start your tulip journey today and bring spring's magic to your doorstep.
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Today
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Flower className="w-12 h-12 text-pink-400" />
          </div>
          <p className="text-gray-300 mb-4">
            Celebrating the beauty of tulips and the joy they bring to our lives
          </p>
          <p className="text-gray-500">
            © {currentYear} Tulip Garden. Made with love for flower enthusiasts everywhere.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
