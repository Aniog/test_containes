import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Users, Trash2, Search, Mail, Building2, MessageSquare, Calendar } from 'lucide-react';

const STORAGE_KEY = 'contacts';

function loadContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

function deleteContact(id) {
  const contacts = loadContacts().filter((c) => c.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  return contacts;
}

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    setContacts(loadContacts());
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
    const updated = deleteContact(id);
    setContacts(updated);
    setDeleteConfirm(null);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to site
              </Link>
              <div className="w-px h-5 bg-slate-200" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-900 leading-none">Contacts</h1>
                  <p className="text-xs text-slate-500 mt-0.5">{contacts.length} total</p>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search contacts…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filtered.length === 0 ? (
          <EmptyState hasSearch={search.length > 0} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={() => setDeleteConfirm(contact.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Delete contact?</h3>
            <p className="text-sm text-slate-600 mb-6">
              This action cannot be undone. The contact will be permanently removed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-4 py-2.5 rounded-lg text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactCard({ contact, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-indigo-700 font-bold text-sm">
              {contact.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="font-semibold text-slate-900 text-sm leading-tight">{contact.name}</p>
            {contact.company && (
              <p className="text-xs text-slate-500 mt-0.5">{contact.company}</p>
            )}
          </div>
        </div>
        <button
          onClick={onDelete}
          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
          aria-label="Delete contact"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <a href={`mailto:${contact.email}`} className="hover:text-indigo-600 transition-colors truncate">
            {contact.email}
          </a>
        </div>
        {contact.company && (
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Building2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">{contact.company}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{format(new Date(contact.createdAt), 'MMM d, yyyy · h:mm a')}</span>
        </div>
      </div>

      {/* Message toggle */}
      {contact.message && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            {expanded ? 'Hide message' : 'View message'}
          </button>
          {expanded && (
            <p className="mt-2 text-xs text-slate-600 leading-relaxed bg-slate-50 rounded-lg p-3 border border-slate-100">
              {contact.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function EmptyState({ hasSearch }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
        <Users className="w-7 h-7 text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {hasSearch ? 'No contacts found' : 'No contacts yet'}
      </h3>
      <p className="text-sm text-slate-500 max-w-xs">
        {hasSearch
          ? 'Try adjusting your search query.'
          : 'Contacts submitted through the form will appear here.'}
      </p>
      {!hasSearch && (
        <Link
          to="/#contact"
          className="mt-5 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          Go to contact form
        </Link>
      )}
    </div>
  );
}
