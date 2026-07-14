import { useState } from 'react';
import { Trash2, Mail, Calendar, Tag, MessageSquare, Search, Users } from 'lucide-react';
import { getContacts, deleteContact } from '@/lib/contacts';
import { Link } from 'react-router-dom';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function ContactCard({ contact, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
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
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          aria-label="Delete contact"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Tag className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span className="font-medium text-slate-700">{contact.subject}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{formatDate(contact.createdAt)}</span>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          {expanded ? 'Hide message' : 'View message'}
        </button>
        {expanded && (
          <p className="mt-3 text-sm text-slate-600 bg-slate-50 rounded-lg p-3 leading-relaxed border border-slate-100">
            {contact.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ContactsDashboard() {
  const [contacts, setContacts] = useState(() => getContacts());
  const [search, setSearch] = useState('');

  function handleDelete(id) {
    deleteContact(id);
    setContacts(getContacts());
  }

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Contacts</h1>
            <p className="text-slate-500 mt-1">
              {contacts.length} {contacts.length === 1 ? 'message' : 'messages'} received
            </p>
          </div>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            New Contact Form
          </Link>
        </div>

        {/* Search */}
        {contacts.length > 0 && (
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email, or subject…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            />
          </div>
        )}

        {/* Empty state */}
        {contacts.length === 0 && (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">No contacts yet</h2>
            <p className="text-slate-500 mb-6 max-w-sm mx-auto">
              Once someone fills out the contact form, their message will appear here.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Go to Contact Form
            </Link>
          </div>
        )}

        {/* No search results */}
        {contacts.length > 0 && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500">No contacts match your search.</p>
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
