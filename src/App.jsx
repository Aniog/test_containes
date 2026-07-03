const sections = [
  {
    bg: 'bg-white',
    text: 'text-gray-800',
    title: 'Hello Hurst',
    subtitle: 'Welcome to my page',
  },
  {
    bg: 'bg-gray-900',
    text: 'text-white',
    title: 'About',
    subtitle: 'Learn more about who I am and what I do',
  },
  {
    bg: 'bg-indigo-600',
    text: 'text-white',
    title: 'Services',
    subtitle: 'Explore the services I offer',
  },
  {
    bg: 'bg-amber-400',
    text: 'text-gray-900',
    title: 'Portfolio',
    subtitle: 'A showcase of my recent work',
  },
  {
    bg: 'bg-gray-800',
    text: 'text-white',
    title: 'Contact',
    subtitle: 'Get in touch with me anytime',
  },
]

function App() {
  return (
    <div>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`h-screen flex flex-col items-center justify-center ${section.bg} ${section.text}`}
        >
          <h1 className="text-5xl font-bold mb-4">{section.title}</h1>
          <p className="text-xl opacity-75">{section.subtitle}</p>
        </div>
      ))}
    </div>
  )
}

export default App
