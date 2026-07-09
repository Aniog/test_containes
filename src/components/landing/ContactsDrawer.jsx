import { useState, useEffect } from 'react';
import { X, Trash2, Mail, User, MessageSquare, Calendar, Inbox } from 'lucide-react';
import { getContacts, deleteContact } from './ContactForm';
import { format } from 'date-fns';

export default function ContactsDrawer({ open, onClose }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (open) {
      setContacts(getContacts());
    }
  }, [open]);

  const handleDelete = (id) => {
    deleteContact(id);
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Contacts panel"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Contacts</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {contacts.length} {contacts.length === 1 ? 'submission' : 'submissions'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close contacts panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {contacts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-20">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                <Inbox className="w-7 h-7 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm font-medium">No contacts yet</p>
              <p className="text-gray-400 text-xs max-w-xs">
                Submissions from the contact form will appear here.
              </p>
            </div>
          ) : (
            contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-gray-50 rounded-xl border border-gray-200 p-4 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span className="text-sm font-semibold text-gray-900 truncate">
                        {contact.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm text-indigo-600 hover:underline truncate"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {contact.message}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <Calendar className="w-3 h-3 text-gray-400 shrink-0" />
                      <span className="text-xs text-gray-400">
                        {format(new Date(contact.createdAt), 'MMM d, yyyy · h:mm a')}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="opacity-0 group-hover:opacity-100 w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all shrink-0"
                    aria-label={`Delete contact from ${contact.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  );
}
