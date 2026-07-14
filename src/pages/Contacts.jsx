import ContactsList from '@/components/contacts/ContactsList'
import { useContacts } from '@/hooks/useContacts'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Contacts() {
  const { contacts, deleteContact, clearContacts } = useContacts()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2 text-slate-600">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-slate-200" />
            <h1 className="text-xl font-bold text-slate-900">Contacts</h1>
          </div>
          <span className="text-sm text-slate-500">
            {contacts.length} total
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 flex justify-center">
        <ContactsList
          contacts={contacts}
          onDelete={deleteContact}
          onClear={clearContacts}
        />
      </main>
    </div>
  )
}
