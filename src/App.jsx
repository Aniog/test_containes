import "./App.css"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F6F8] p-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#4B5056] mb-4">Strikingly AI Generators</h1>
        <p className="text-[#636972] mb-6">The generators hub is available at <a href="/generators" className="text-[#8159BB] underline">/generators</a>.</p>
        <a
          href="/generators"
          className="inline-block px-6 py-3 rounded text-white text-sm font-bold uppercase tracking-wide"
          style={{ background: "linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)" }}
        >
          OPEN GENERATORS HUB
        </a>
      </div>
    </div>
  )
}

export default App
