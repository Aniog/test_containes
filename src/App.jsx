import './App.css'

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center px-8 py-12 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Hello, World! 👋
        </h1>
        <p className="text-xl text-white/80 mt-4">
          欢迎来到我的第一个网页
        </p>
        <div className="mt-8 w-16 h-1 bg-white/50 rounded-full mx-auto"></div>
        <p className="mt-6 text-white/60 text-sm">
          由 Strikingly Agent 生成
        </p>
      </div>
    </main>
  )
}

export default App
