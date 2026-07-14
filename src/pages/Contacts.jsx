import { useState, useEffect } from 'react';
import { Trash2, Mail, Phone, MessageSquare, Calendar, Users, Search, X } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const STORAGE_KEY = 'connectus_contacts';

const ContactCard = ({ contact, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between gap-4">
        {/* Avatar + name */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <span className="text-indigo-600 font-bold text-sm">
              {contact.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 truncate">{contact.name}</p>
            <p className="text-sm text-gray-500 truncate">{contact.email}</p>
          </div>
        </div>

        {/* Delete button */}
        <button
          onClick={() => onDelete(contact.id)}
          className="flex-shrink-0 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="Delete contact"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Meta row */}
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-500">
        {contact.phone && (
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            {contact.phone}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {format(parseISO(contact.submittedAt), 'MMM d, yyyy · h:mm a')}
        </span>
      </div>

      {/* Message preview */}
      <div className="mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          {expanded ? 'Hide message' : 'View message'}
        </button>
        {expanded && (
          <p className="mt-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3 leading-relaxed">
            {contact.message}
          </p>
        )}
      </div>
    </div>
  );
};

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    console.log('Loaded contacts from storage:', stored.length);
    setContacts(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    console.log('Deleted contact:', id);
  };

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.phone && c.phone.includes(q)) ||
      c.message.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Saved Contacts</h1>
          </div>
          <p className="text-gray-500 ml-13">
            {contacts.length === 0
              ? 'No contacts yet. Submit the form on the home page to get started.'
              : `${contacts.length} contact${contacts.length !== 1 ? 's' : ''} saved`}
          </p>
        </div>

        {/* Search bar */}
        {contacts.length > 0 && (
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, or message..."
              className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Empty state */}
        {contacts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No contacts yet</h3>
            <p className="text-gray-400 text-sm mb-6">
              Go to the home page and submit the contact form to see entries here.
            </p>
            <a
              href="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Go to Home Page
            </a>
          </div>
        )}

        {/* No search results */}
        {contacts.length > 0 && filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No contacts match your search.</p>
          </div>
        )}

        {/* Contact grid */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((contact) => (
              <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
