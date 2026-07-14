import { useState } from 'react';
import { deleteContact } from '@/lib/contacts';
import { Trash2, Mail, Clock, Tag, X } from 'lucide-react';
import { format } from 'date-fns';

export default function ContactCard({ contact, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleDelete() {
    onDelete(contact.id);
  }

  const formattedDate = format(new Date(contact.submittedAt), 'MMM d, yyyy · h:mm a');

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          {/* Avatar */}
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-indigo-700 font-semibold text-sm">
              {contact.name.charAt(0).toUpperCase()}
            </span>
          </div>

          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Mail className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-indigo-600 hover:underline truncate"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-xs text-gray-500 hover:text-gray-700 border border-gray-200 hover:border-gray-300 px-3 py-1.5 rounded-lg transition-colors"
          >
            {expanded ? 'Hide' : 'Read'}
          </button>
          {confirmDelete ? (
            <div className="flex items-center gap-1">
              <button
                onClick={handleDelete}
                className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg transition-colors"
              >
                Confirm
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg transition-colors"
              aria-label="Delete contact"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Subject & date */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
          <Tag className="w-3 h-3" />
          {contact.subject}
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Clock className="w-3 h-3" />
          {formattedDate}
        </div>
      </div>

      {/* Expanded message */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
            {contact.message}
          </p>
        </div>
      )}
    </div>
  );
}
