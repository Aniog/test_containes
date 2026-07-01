const TrustBar = () => {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' },
  ]

  return (
    <div className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm font-light text-gray-600">
              <span className="text-base">{item.icon}</span>
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
