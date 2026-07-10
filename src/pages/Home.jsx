import ContactForm from '@/components/contact/ContactForm.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Nav */}
      <header className="border-b border-gray-100 px-6 py-4">
        <span className="text-sm font-medium tracking-tight text-gray-900">Acme</span>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Simple. Minimal.</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4 leading-tight">
          We'd love to hear<br className="hidden md:block" /> from you
        </h1>
        <p className="text-base text-gray-500 max-w-sm">
          Have a question or just want to say hello? Fill out the form below and we'll get back to you.
        </p>
      </section>

      {/* Contact form */}
      <section className="flex justify-center px-6 pb-24">
        <div className="w-full max-w-md">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-5 text-center">
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Acme. All rights reserved.</p>
      </footer>
    </div>
  )
}
