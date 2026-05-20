function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-800 tracking-tight">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 max-w-md">
          Welcome to your first React application!
        </p>
        <div className="pt-4">
          <span className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-colors cursor-pointer">
            Get Started
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
