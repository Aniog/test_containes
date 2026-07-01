import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
          Welcome to Your New App
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We're ready to help you build something amazing. Start by describing what you want to create!
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { title: 'Modern UI', desc: 'Beautifully crafted components using Tailwind CSS and shadcn/ui.' },
          { title: 'Fast Performance', desc: 'Built on Vite for lightning-fast HMR and optimized production builds.' },
          { title: 'Persistent Data', desc: 'Easy integration with our database SDK for all your storage needs.' }
        ].map((feature, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
            <p className="text-slate-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
