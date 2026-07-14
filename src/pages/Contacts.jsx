import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Trash2, Search, Mail, Building2, Calendar, MessageSquare } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const STORAGE_KEY = 'saved_contacts';

function loadContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

function deleteContact(id) {
  const contacts = loadContacts().filter((c) => c.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  return contacts;
}

function clearAllContacts() {
  localStorage.removeItem(STORAGE_KEY);
  return [];
}

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    setContacts(loadContacts());
    console.log('Contacts loaded from localStorage');
  }, []);

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.company || '').toLowerCase().includes(q)
    );
  });

  function handleDelete(id) {
    setContacts(deleteContact(id));
    if (expanded === id) setExpanded(null);
    console.log('Contact deleted:', id);
  }

  function handleClearAll() {
    setContacts(clearAllContacts());
    setConfirmClear(false);
    setExpanded(null);
    console.log('All contacts cleared');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2 font-semibold text-gray-900">
              <Users className="w-5 h-5 text-indigo-600" />
              Saved Contacts
            </div>
          </div>
          <span className="text-sm text-gray-500">
            {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">No contacts yet</h2>
            <p className="text-gray-500 max-w-sm">
              When someone fills out the contact form on your landing page, they'll appear here.
            </p>
            <Link
              to="/#contact"
              className="mt-2 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Go to contact form
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, or company…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              {!confirmClear ? (
                <button
                  onClick={() => setConfirmClear(true)}
                  className="flex items-center gap-2 border border-red-200 text-red-600 hover:bg-red-50 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear all
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Are you sure?</span>
                  <button
                    onClick={handleClearAll}
                    className="text-sm font-medium text-red-600 hover:text-red-700 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Yes, clear all
                  </button>
                  <button
                    onClick={() => setConfirmClear(false)}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                No contacts match your search.
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {filtered.map((contact) => (
                  <div
                    key={contact.id}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <div
                      className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setExpanded(expanded === contact.id ? null : contact.id)}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-indigo-700 font-semibold text-sm">
                            {contact.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-900 truncate">{contact.name}</p>
                          <p className="text-sm text-gray-500 truncate">{contact.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                        {contact.company && (
                          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                            <Building2 className="w-3 h-3" />
                            {contact.company}
                          </span>
                        )}
                        <span className="hidden md:flex items-center gap-1.5 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" />
                          {format(parseISO(contact.submittedAt), 'MMM d, yyyy')}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDelete(contact.id); }}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          aria-label="Delete contact"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {expanded === contact.id && (
                      <div className="border-t border-gray-100 px-6 py-5 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <Mail className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium text-gray-500 mb-0.5">Email</p>
                            <a
                              href={`mailto:${contact.email}`}
                              className="text-sm text-indigo-600 hover:underline"
                            >
                              {contact.email}
                            </a>
                          </div>
                        </div>

                        {contact.company && (
                          <div className="flex items-start gap-3">
                            <Building2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-0.5">Company</p>
                              <p className="text-sm text-gray-900">{contact.company}</p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-start gap-3">
                          <Calendar className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium text-gray-500 mb-0.5">Submitted</p>
                            <p className="text-sm text-gray-900">
                              {format(parseISO(contact.submittedAt), 'PPPp')}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 sm:col-span-2">
                          <MessageSquare className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium text-gray-500 mb-0.5">Message</p>
                            <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-wrap">
                              {contact.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
