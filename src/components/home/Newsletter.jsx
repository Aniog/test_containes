const Newsletter = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide font-serif text-gray-900 mb-2">
            Join for 10% Off
          </h2>
          <div className="w-16 h-px bg-amber-700 mx-auto mb-6" />
          <p className="text-gray-600 font-light mb-8 leading-relaxed">
            Subscribe to our newsletter and receive 10% off your first order. Be the first to know about new collections, exclusive offers, and styling tips.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-amber-700 transition-colors font-light"
            />
            <button
              type="submit"
              className="bg-amber-800 text-white px-8 py-3 text-sm tracking-[0.2em] uppercase font-light hover:bg-amber-900 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 font-light mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
