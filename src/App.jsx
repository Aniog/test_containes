import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#e4e8ef] flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your Site
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your website is ready. Start building amazing experiences with Strikingly.
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
          <a 
            href="https://www.strikingly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
