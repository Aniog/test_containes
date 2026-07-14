import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import {
  Users,
  Mail,
  Phone,
  MessageSquare,
  Trash2,
  ArrowLeft,
  Search,
  Inbox,
  Tag,
  Calendar,
} from 'lucide-react';

const STORAGE_KEY = 'contacthub_contacts';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    console.log('Loaded contacts from storage:', stored.length);
    setContacts(stored);
  }, []);

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name?.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.subject?.toLowerCase().includes(q) ||
      c.message?.toLowerCase().includes(q)
    );
  });

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setContacts(updated);
    setDeleteId(null);
    if (expanded === id) setExpanded(null);
    console.log('Deleted contact:', id);
  };

  const handleClearAll = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContacts([]);
    setExpanded(null);
    console.log('Cleared all contacts');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
              <div className="w-px h-5 bg-gray-300" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Saved Contacts</h1>
                  <p className="text-xs text-gray-500">
                    {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'} total
                  </p>
                </div>
              </div>
            </div>

            {contacts.length > 0 && (
              <button
                onClick={() => setDeleteId('all')}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          {/* Search */}
          {contacts.length > 0 && (
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, subject..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {contacts.length === 0 ? (
          <EmptyState />
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No contacts match your search.</p>
            <button
              onClick={() => setSearch('')}
              className="mt-3 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                expanded={expanded === contact.id}
                onToggle={() => setExpanded(expanded === contact.id ? null : contact.id)}
                onDelete={() => setDeleteId(contact.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteId && (
        <ConfirmModal
          isAll={deleteId === 'all'}
          onConfirm={() => deleteId === 'all' ? handleClearAll() : handleDelete(deleteId)}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
};

const ContactCard = ({ contact, expanded, onToggle, onDelete }) => {
  const date = contact.submittedAt
    ? format(new Date(contact.submittedAt), 'MMM d, yyyy · h:mm a')
    : 'Unknown date';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 hover:border-indigo-200 transition-all shadow-sm overflow-hidden">
      {/* Card header — always visible */}
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-4 flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
          <span className="text-indigo-700 font-bold text-sm">
            {contact.name?.charAt(0)?.toUpperCase() || '?'}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-semibold text-gray-900 text-sm">{contact.name}</p>
            {contact.subject && (
              <span className="inline-flex items-center gap-1 text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
                <Tag className="w-3 h-3" />
                {contact.subject}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 truncate">{contact.email}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="hidden sm:flex items-center gap-1 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            {date}
          </span>
          <span className="text-gray-400 text-xs">{expanded ? '▲' : '▼'}</span>
        </div>
      </button>

      {/* Expanded details */}
      {expanded && (
        <div className="border-t border-gray-100 px-6 py-5 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <DetailRow icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            {contact.phone && (
              <DetailRow icon={Phone} label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
            )}
          </div>
          {contact.message && (
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                Message
              </div>
              <p className="text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-3 leading-relaxed">
                {contact.message}
              </p>
            </div>
          )}
          <div className="flex items-center justify-between pt-2">
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="w-3 h-3" />
              {date}
            </span>
            <button
              onClick={onDelete}
              className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailRow = ({ icon: Icon, label, value, href }) => (
  <div>
    <p className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1.5">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </p>
    {href ? (
      <a href={href} className="text-sm text-indigo-600 hover:text-indigo-700 font-medium break-all">
        {value}
      </a>
    ) : (
      <p className="text-sm text-gray-900">{value}</p>
    )}
  </div>
);

const EmptyState = () => (
  <div className="text-center py-20">
    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <Inbox className="w-8 h-8 text-gray-400" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">No contacts yet</h3>
    <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
      Once someone fills out the contact form, their information will appear here.
    </p>
    <Link
      to="/#contact"
      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
    >
      Go to Contact Form
    </Link>
  </div>
);

const ConfirmModal = ({ isAll, onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Trash2 className="w-6 h-6 text-red-600" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
        {isAll ? 'Clear All Contacts?' : 'Delete Contact?'}
      </h3>
      <p className="text-sm text-gray-600 text-center mb-6">
        {isAll
          ? 'This will permanently delete all saved contacts. This action cannot be undone.'
          : 'This contact will be permanently deleted. This action cannot be undone.'}
      </p>
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-lg transition-colors text-sm"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
        >
          {isAll ? 'Clear All' : 'Delete'}
        </button>
      </div>
    </div>
  </div>
);

export default ContactsPage;
