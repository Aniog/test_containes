import { useState } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { Trash2, Mail, Building2, MessageSquare, Calendar, Search, Users, Inbox } from 'lucide-react';

const STORAGE_KEY = 'saved_contacts';

const ContactCard = ({ contact, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const timeAgo = (() => {
    try {
      return formatDistanceToNow(parseISO(contact.submittedAt), { addSuffix: true });
    } catch {
      return 'Unknown time';
    }
  })();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-700 font-bold text-sm">
                {contact.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-slate-900 truncate">{contact.name}</h3>
              <div className="flex items-center gap-1 text-slate-500 text-sm">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{contact.email}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onDelete(contact.id)}
            className="flex-shrink-0 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Delete contact"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {contact.company && (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
              <Building2 className="w-3 h-3" />
              {contact.company}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
            <Calendar className="w-3 h-3" />
            {timeAgo}
          </span>
        </div>

        <div className="mt-4">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            <MessageSquare className="w-4 h-4" />
            {expanded ? 'Hide message' : 'View message'}
          </button>
          {expanded && (
            <p className="mt-3 text-sm text-slate-600 bg-slate-50 rounded-lg p-3 leading-relaxed border border-slate-200">
              {contact.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactsPage = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  });
  const [search, setSearch] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const handleDelete = (id) => {
    if (deleteConfirm === id) {
      const updated = contacts.filter((c) => c.id !== id);
      setContacts(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setDeleteConfirm(null);
      console.log('Contact deleted:', id);
    } else {
      setDeleteConfirm(id);
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };

  const handleClearAll = () => {
    setContacts([]);
    localStorage.removeItem(STORAGE_KEY);
    console.log('All contacts cleared');
  };

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.company || '').toLowerCase().includes(q) ||
      c.message.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-6 h-6 text-indigo-600" />
              <h1 className="text-2xl font-bold text-slate-900">Saved Contacts</h1>
            </div>
            <p className="text-slate-500 text-sm">
              {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'} collected
            </p>
          </div>
          {contacts.length > 0 && (
            <button
              onClick={handleClearAll}
              className="self-start sm:self-auto text-sm text-red-500 hover:text-red-600 hover:bg-red-50 border border-red-200 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Search */}
        {contacts.length > 0 && (
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, company, or message…"
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            />
          </div>
        )}

        {/* Empty state */}
        {contacts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">No contacts yet</h2>
            <p className="text-slate-500 text-sm max-w-xs">
              Contacts submitted through the form on the home page will appear here.
            </p>
            <a
              href="/"
              className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Go to Home Page
            </a>
          </div>
        )}

        {/* No search results */}
        {contacts.length > 0 && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500">No contacts match your search.</p>
            <button
              onClick={() => setSearch('')}
              className="mt-3 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Contact grid */}
        {filtered.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {deleteConfirm && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm px-5 py-3 rounded-xl shadow-lg">
            Click delete again to confirm removal
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
