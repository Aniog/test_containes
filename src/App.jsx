import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-6 text-7xl animate-bounce">👋</div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 tracking-tight">
          Hello, World!
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mt-4 max-w-md mx-auto leading-relaxed">
          欢迎来到我的第一个网站，很高兴见到你！
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <span className="px-5 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur border border-white/20">
            ✨ 简单
          </span>
          <span className="px-5 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur border border-white/20">
            🎨 美观
          </span>
          <span className="px-5 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur border border-white/20">
            🚀 快速
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
