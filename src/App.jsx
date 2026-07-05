import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#e4e8ef] flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your application is ready. Start building by editing the code.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Fast</h3>
            <p className="text-sm text-gray-600">Built with Vite for instant updates</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Modern</h3>
            <p className="text-sm text-gray-600">React + Tailwind CSS</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Editable</h3>
            <p className="text-sm text-gray-600">Visual editing enabled</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
