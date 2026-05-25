import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center px-4">
      <div
        className={`text-center transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-6 flex justify-center">
          <span className="text-6xl">👋</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
          Hello, World!
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-md mx-auto mb-8">
          欢迎来到我的第一个网站。简单、优雅，从这里开始。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            onClick={() => alert('你好，世界！🌍')}
          >
            点击打招呼
          </button>
          <button
            className="px-6 py-3 rounded-full border-2 border-indigo-300 text-indigo-600 font-semibold hover:bg-indigo-50 hover:scale-105 transition-all duration-200"
            onClick={() => window.open('https://developer.mozilla.org', '_blank')}
          >
            了解更多
          </button>
        </div>
      </div>

      <footer className="absolute bottom-6 text-sm text-gray-400">
        用 React + Tailwind CSS 构建 ✨
      </footer>
    </main>
  )
}

export default App
