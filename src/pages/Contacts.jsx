import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Trash2, Mail, Building2, Calendar, MessageSquare, Search, Inbox } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const STORAGE_KEY = 'launchpad_contacts';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    console.log('Loaded contacts from storage:', stored.length);
    setContacts(stored);
  }, []);

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.company || '').toLowerCase().includes(q)
    );
  });

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setContacts(updated);
    if (selected?.id === id) setSelected(null);
    setDeleteConfirm(null);
    console.log('Deleted contact:', id);
  };

  const formatDate = (iso) => {
    try {
      return format(parseISO(iso), 'MMM d, yyyy · h:mm a');
    } catch {
      return iso;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors no-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <Users className="w-4 h-4 text-indigo-600" />
              Contacts
              {contacts.length > 0 && (
                <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-0.5 rounded-full">
                  {contacts.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {contacts.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <Inbox className="w-9 h-9 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">No contacts yet</h2>
            <p className="text-slate-500 text-sm mb-8 max-w-xs">
              When someone fills out the contact form on your landing page, they'll appear here.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors no-underline"
            >
              Go to contact form
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left: list */}
            <div className="lg:col-span-2 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Contact list */}
              <div className="space-y-2">
                {filtered.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-8">No contacts match your search.</p>
                ) : (
                  filtered.map((contact) => (
                    <button
                      key={contact.id}
                      onClick={() => setSelected(contact)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        selected?.id === contact.id
                          ? 'bg-indigo-50 border-indigo-300 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-medium text-slate-900 text-sm truncate">{contact.name}</p>
                          <p className="text-xs text-slate-500 truncate mt-0.5">{contact.email}</p>
                          {contact.company && (
                            <p className="text-xs text-slate-400 truncate mt-0.5">{contact.company}</p>
                          )}
                        </div>
                        <span className="text-xs text-slate-400 whitespace-nowrap flex-shrink-0 mt-0.5">
                          {format(parseISO(contact.submittedAt), 'MMM d')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {contact.message}
                      </p>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Right: detail */}
            <div className="lg:col-span-3">
              {selected ? (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{selected.name}</h2>
                      <p className="text-sm text-slate-500 mt-1">
                        Submitted {formatDate(selected.submittedAt)}
                      </p>
                    </div>
                    {deleteConfirm === selected.id ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-600">Delete this contact?</span>
                        <button
                          onClick={() => handleDelete(selected.id)}
                          className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg transition-colors border-0 cursor-pointer"
                        >
                          Yes, delete
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg transition-colors border-0 cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(selected.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors bg-transparent border-0 cursor-pointer"
                        title="Delete contact"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Email</p>
                        <a
                          href={`mailto:${selected.email}`}
                          className="text-sm text-indigo-600 hover:text-indigo-700 no-underline"
                        >
                          {selected.email}
                        </a>
                      </div>
                    </div>

                    {selected.company && (
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Company</p>
                          <p className="text-sm text-slate-900">{selected.company}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Submitted</p>
                        <p className="text-sm text-slate-900">{formatDate(selected.submittedAt)}</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageSquare className="w-4 h-4 text-indigo-600" />
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Message</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                          {selected.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 h-64 flex items-center justify-center">
                  <p className="text-sm text-slate-400">Select a contact to view details</p>
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
