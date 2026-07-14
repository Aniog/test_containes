import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Building2, MessageSquare, Trash2, Search, Inbox } from 'lucide-react';
import { format } from 'date-fns';

const STORAGE_KEY = 'saved_contacts';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    setContacts(stored);
    console.log('Loaded contacts from localStorage:', stored.length);
  }, []);

  const deleteContact = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    if (selected?.id === id) setSelected(null);
    console.log('Deleted contact:', id);
  };

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      (c.company || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
            <div className="h-5 w-px bg-gray-200" />
            <h1 className="text-lg font-semibold text-gray-900">Contacts</h1>
            <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-2 py-0.5 rounded-full">
              {contacts.length}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No contacts yet</h2>
            <p className="text-gray-500 mb-6 max-w-sm">
              When someone fills out the contact form on your landing page, they'll appear here.
            </p>
            <Link
              to="/#contact"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Go to contact form
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 gap-6">
            {/* List panel */}
            <div className="md:col-span-2 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {filtered.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">No contacts match your search.</p>
              ) : (
                <div className="space-y-2">
                  {filtered.map((contact) => (
                    <button
                      key={contact.id}
                      onClick={() => setSelected(contact)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        selected?.id === contact.id
                          ? 'border-indigo-300 bg-indigo-50 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-indigo-600 font-semibold text-sm">
                            {contact.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-gray-900 text-sm truncate">{contact.name}</p>
                          <p className="text-gray-500 text-xs truncate">{contact.email}</p>
                          {contact.company && (
                            <p className="text-gray-400 text-xs truncate">{contact.company}</p>
                          )}
                        </div>
                        <span className="text-gray-400 text-xs flex-shrink-0">
                          {format(new Date(contact.submittedAt), 'MMM d')}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Detail panel */}
            <div className="md:col-span-3">
              {selected ? (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-xl">
                          {selected.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{selected.name}</h2>
                        <p className="text-gray-500 text-sm">
                          Submitted {format(new Date(selected.submittedAt), 'PPP')} at{' '}
                          {format(new Date(selected.submittedAt), 'p')}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteContact(selected.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete contact"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Email</p>
                        <a
                          href={`mailto:${selected.email}`}
                          className="text-sm text-indigo-600 hover:underline font-medium"
                        >
                          {selected.email}
                        </a>
                      </div>
                    </div>

                    {selected.company && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Building2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Company</p>
                          <p className="text-sm text-gray-900 font-medium">{selected.company}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <MessageSquare className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Message</p>
                        <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-wrap">
                          {selected.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 h-full min-h-64 flex flex-col items-center justify-center text-center p-8">
                  <User className="w-10 h-10 text-gray-300 mb-3" />
                  <p className="text-gray-500 text-sm">Select a contact to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
