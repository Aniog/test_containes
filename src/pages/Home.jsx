import { useEffect, useState } from 'react'
import ContactForm from '@/components/landing/ContactForm.jsx?fresh=202607140733'
import ContactsPanel from '@/components/landing/ContactsPanel.jsx?fresh=202607140733'
import FeatureCards from '@/components/landing/FeatureCards.jsx?fresh=202607140733'
import Footer from '@/components/landing/Footer.jsx?fresh=202607140733'
import Header from '@/components/landing/Header.jsx?fresh=202607140733'
import HeroSection from '@/components/landing/HeroSection.jsx?fresh=202607140733'

const STORAGE_KEY = 'contactflow-preview-contacts'
const emptyForm = {
  name: '',
  email: '',
  company: '',
  interest: 'Project inquiry',
  message: '',
}

const loadStoredContacts = () => {
  const savedContacts = window.localStorage.getItem(STORAGE_KEY)
  return savedContacts ? JSON.parse(savedContacts) : []
}

const Home = () => {
  const [contacts, setContacts] = useState(loadStoredContacts)
  const [formData, setFormData] = useState(emptyForm)
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const contact = {
      ...formData,
      id: `${Date.now()}-${formData.email}`,
      createdAt: new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      }).format(new Date()),
    }

    setContacts((current) => [contact, ...current])
    setFormData(emptyForm)
    setSuccessMessage('Contact saved. You can review it in the saved contacts panel.')
  }

  const handleClear = () => {
    setContacts([])
    setSuccessMessage('Preview contacts cleared.')
  }

  return (
    <div className="min-h-screen bg-blue-50 text-slate-800">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <section id="contact" className="bg-blue-50 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
            <ContactForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              successMessage={successMessage}
            />
            <ContactsPanel contacts={contacts} onClear={handleClear} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
