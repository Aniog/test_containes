import React from 'react'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* 主标题区域 */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-light text-pink-800 tracking-wide">
            欢迎
          </h1>
          <p className="text-xl md:text-2xl text-pink-700 font-light">
            一个简洁优雅的粉色页面
          </p>
        </div>

        {/* 装饰性元素 */}
        <div className="flex justify-center space-x-4 my-12">
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-pink-600 rounded-full animate-pulse delay-150"></div>
        </div>

        {/* 内容区域 */}
        <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-pink-200/50">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-pink-800">
              纯净之美
            </h2>
            <p className="text-lg text-pink-700 leading-relaxed max-w-2xl mx-auto">
              这是一个专为您打造的粉色主题单页面网站。简洁的设计，温柔的色彩，为您带来宁静舒适的视觉体验。
            </p>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="mt-16 text-pink-600 text-sm">
          <p>© {currentYear} 粉色空间 · 简约而不简单</p>
        </div>
      </div>

      {/* 背景装饰圆圈 */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-pink-300/20 rounded-full blur-xl"></div>
      <div className="fixed top-1/3 right-20 w-32 h-32 bg-pink-400/15 rounded-full blur-2xl"></div>
      <div className="fixed bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
    </div>
  )
}

export default App
