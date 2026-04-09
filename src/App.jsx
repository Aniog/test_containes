import React, { useState } from 'react'

function App() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your blank page is ready to be customized.
          </p>
          <button
            onClick={handleClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            {clicked ? 'Clicked!' : 'Click Me'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
