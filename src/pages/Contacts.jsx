import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getContacts, deleteContact } from '@/lib/contacts';
import ContactCard from '@/components/contacts/ContactCard';
import { Users, Search, ArrowLeft, Inbox } from 'lucide-react';

export default function Contacts() {
  const [contacts, setContacts] = useState(() => getContacts());
  const [search, setSearch] = useState('');

  function handleDelete(id) {
    const updated = deleteContact(id);
    setContacts(updated);
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return contacts;
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.subject.toLowerCase().includes(q) ||
        c.message.toLowerCase().includes(q)
    );
  }, [contacts, search]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Saved Contacts</h1>
              </div>
              <p className="text-gray-500 text-sm mt-1 ml-13">
                {contacts.length} {contacts.length === 1 ? 'submission' : 'submissions'} total
              </p>
            </div>

            {/* Search */}
            {contacts.length > 0 && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search contacts…"
                  className="pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64"
                />
              </div>
            )}
          </div>
        </div>

        {/* Empty state */}
        {contacts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No contacts yet</h2>
            <p className="text-gray-500 mb-6 max-w-sm">
              Once someone submits the contact form, their message will appear here.
            </p>
            <Link
              to="/#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              Go to Contact Form
            </Link>
          </div>
        )}

        {/* No search results */}
        {contacts.length > 0 && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No contacts match your search.</p>
            <button
              onClick={() => setSearch('')}
              className="mt-3 text-sm text-indigo-600 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Contact list */}
        {filtered.length > 0 && (
          <div className="space-y-4">
            {filtered.map((contact) => (
              <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
