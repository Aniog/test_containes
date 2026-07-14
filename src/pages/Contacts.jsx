import { useState, useEffect } from 'react';
import { getContacts, deleteContact } from '@/lib/contacts';
import { Trash2, Users, Mail, Clock, Search, Inbox } from 'lucide-react';
import { format } from 'date-fns';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setContacts(getContacts());
  }, []);

  const handleDelete = (id) => {
    deleteContact(id);
    setContacts(getContacts());
    if (selected?.id === id) setSelected(null);
    console.log('Deleted contact:', id);
  };

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Users className="w-8 h-8 text-indigo-600" />
              Contact Submissions
            </h1>
            <p className="text-gray-500 mt-1 text-sm">
              {contacts.length} {contacts.length === 1 ? 'submission' : 'submissions'} total
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, subject…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {contacts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-3">
              {filtered.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-8">No results match your search.</p>
              ) : (
                filtered.map((contact) => (
                  <ContactCard
                    key={contact.id}
                    contact={contact}
                    isSelected={selected?.id === contact.id}
                    onClick={() => setSelected(contact)}
                    onDelete={handleDelete}
                  />
                ))
              )}
            </div>

            <div className="lg:col-span-3">
              {selected ? (
                <ContactDetail contact={selected} onDelete={handleDelete} />
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-64 flex items-center justify-center text-gray-400 text-sm">
                  Select a contact to view details
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ContactCard = ({ contact, isSelected, onClick, onDelete }) => (
  <button
    onClick={onClick}
    className={`w-full text-left bg-white rounded-xl border p-4 transition-all cursor-pointer ${
      isSelected
        ? 'border-indigo-400 ring-2 ring-indigo-100 shadow-sm'
        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
    }`}
  >
    <div className="flex items-start justify-between gap-2">
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 text-sm truncate">{contact.name}</p>
        <p className="text-gray-500 text-xs truncate mt-0.5">{contact.email}</p>
        <p className="text-gray-700 text-xs mt-1.5 font-medium truncate">{contact.subject}</p>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(contact.id); }}
        className="shrink-0 text-gray-300 hover:text-red-500 transition-colors p-1 rounded"
        aria-label="Delete contact"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
    <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs">
      <Clock className="w-3 h-3" />
      {format(new Date(contact.submittedAt), 'MMM d, yyyy · h:mm a')}
    </div>
  </button>
);

const ContactDetail = ({ contact, onDelete }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">{contact.name}</h2>
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-1.5 text-indigo-600 text-sm mt-1 hover:underline"
        >
          <Mail className="w-4 h-4" />
          {contact.email}
        </a>
      </div>
      <button
        onClick={() => onDelete(contact.id)}
        className="flex items-center gap-1.5 text-sm text-red-600 hover:bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg transition-colors"
      >
        <Trash2 className="w-4 h-4" />
        Delete
      </button>
    </div>

    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Subject</p>
        <p className="text-gray-900 font-medium">{contact.subject}</p>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Message</p>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{contact.message}</p>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Submitted</p>
        <p className="text-gray-600 text-sm flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-gray-400" />
          {format(new Date(contact.submittedAt), 'MMMM d, yyyy \'at\' h:mm a')}
        </p>
      </div>
    </div>
  </div>
);

const EmptyState = () => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm py-20 flex flex-col items-center justify-center text-center px-4">
    <div className="bg-gray-100 text-gray-400 p-5 rounded-full mb-5">
      <Inbox className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">No contacts yet</h3>
    <p className="text-gray-500 text-sm max-w-xs">
      Once someone submits the contact form on the home page, their message will appear here.
    </p>
  </div>
);

export default Contacts;
